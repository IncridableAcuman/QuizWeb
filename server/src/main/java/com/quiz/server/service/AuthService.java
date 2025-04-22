package com.quiz.server.service;

import java.sql.Date;

import org.springframework.stereotype.Service;

import com.quiz.server.dto.AuthRequest;
import com.quiz.server.dto.AuthResponse;
import com.quiz.server.dto.LoginRequest;
import com.quiz.server.exception.BadRequestExceptionHandler;
import com.quiz.server.exception.CustomException;
import com.quiz.server.model.Token;
import com.quiz.server.model.User;
import com.quiz.server.repository.TokenRepository;
import com.quiz.server.util.JWTUtil;

import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final JWTUtil jwtUtil;
    private final UserService userService;
    private final MailService mailService;
    private final TokenRepository tokenRepository;
    private static final long accessTime=15*60*1000;
    private static final long refreshTime=7*24*60*60*1000;
    private final CookieService cookieService;
   public AuthResponse userSignUp(AuthRequest request,HttpServletResponse response){
    userService.existUser(request.getEmail());
    // user
    User user=userService.creatUser(request.getUsername(), request.getEmail(), request.getPassword());
    // Token 
    String refreshToken=jwtUtil.generateToken(user, refreshTime);
    Token token=new Token();
    token.setUser(user);
    token.setRefreshToken(refreshToken);
    token.setExpiryDate(new Date(System.currentTimeMillis()+refreshTime));
    tokenRepository.save(token);
    // cookie
    cookieService.addCookieToken(response, refreshToken);
    return new AuthResponse(user.getId(),user.getUsername(),user.getEmail(),user.getRole(),jwtUtil.generateToken(user, accessTime),refreshToken);
   }
    public AuthResponse userSignIn(LoginRequest request,HttpServletResponse response){
        User user=userService.findByEmail(request.getEmail());
        userService.matchesPassword(request.getPassword(), user.getPassword());
        String accessToken=jwtUtil.generateToken(user, accessTime);
        Token token=tokenRepository.findByUser(user)
        .orElseGet(()->{
            Token tokenData=new Token();
            tokenData.setUser(user);
            tokenData.setRefreshToken(jwtUtil.generateToken(user, refreshTime));
            tokenData.setExpiryDate(new Date(System.currentTimeMillis()+refreshTime));
            return tokenRepository.save(tokenData);
        });
        cookieService.addCookieToken(response, accessToken);
        return new AuthResponse(user.getId(),user.getUsername(),user.getEmail(),user.getRole(),accessToken,token.getRefreshToken());
    }
    public AuthResponse refresh(String refreshToken,HttpServletResponse response){
        if(refreshToken==null || refreshToken.isEmpty()){
            throw new RuntimeException("Token is missing");
        }
        if(!jwtUtil.validateToken(refreshToken)){
            throw new CustomException("Invalid token");
        }
        String username;
        try {
            username=jwtUtil.extractEmail(refreshToken);
        } catch (Exception e) {
            throw new BadRequestExceptionHandler("Could not extract email from token");
        }
        User user=userService.findByUsername(username);
        Token token=tokenRepository.findByUser(user).orElseThrow(()->new RuntimeException("Invalid token"));
        if(token.getRefreshToken().equals(refreshToken)){
            throw new CustomException("Token is mismatch");
        }
        String newAccessToken=jwtUtil.generateToken(user, accessTime);
        String newRefreshToken=jwtUtil.generateToken(user, refreshTime);
        token.setUser(user);
        token.setRefreshToken(refreshToken);
        token.setExpiryDate(new Date(System.currentTimeMillis()+refreshTime));
        tokenRepository.save(token);
        cookieService.addCookieToken(response, newRefreshToken);
        return new AuthResponse(user.getId(),user.getUsername(),user.getEmail(),user.getRole(),newAccessToken,newAccessToken);
    }  
    
    public void userSignOut(String refreshToken){
        Token token=tokenRepository.findByRefreshToken(refreshToken).orElseThrow(()->new RuntimeException("Invalid token"));
        tokenRepository.delete(token);
    }
    public String forgotPassword(String email){
        User user=userService.findByEmail(email);
        String token=jwtUtil.generateToken(user, accessTime);
        String resetLink="http://localhost:5173/reset-password?token"+token;
        mailService.sendMail(user.getEmail(),"Forgot Password","Click to this link for your account activiation: "+resetLink);
        return "Link sent to your email";
    }
    public String resetPassword(String password,String token){
        if(password.isEmpty() || token.isEmpty()){
            throw new RuntimeException("All fields are required");
        }
        boolean userPayload=jwtUtil.validateToken(token);
        if(!userPayload){
            throw new CustomException("Invalid token");
        }
        Token token2=tokenRepository.findByRefreshToken(token).orElseThrow(()->new RuntimeException("Token invalid or expired"));
        User user=token2.getUser();
        userService.updatePasswoUser(user,password);
        return "Password reseted successfully";
    }
}
