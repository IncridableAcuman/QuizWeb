package com.quiz.server.controller;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.quiz.server.dto.AuthRequest;
import com.quiz.server.dto.AuthResponse;
import com.quiz.server.dto.LoginRequest;
import com.quiz.server.service.AuthService;

import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Controller
@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> userSignUp(@RequestBody AuthRequest request,HttpServletResponse response){
        return ResponseEntity.ok(authService.userSignUp(request, response));
    }
    @PostMapping("/login")
    public ResponseEntity<AuthResponse> userSignIn(@RequestBody LoginRequest request,HttpServletResponse response){
        return ResponseEntity.ok(authService.userSignIn(request, response));
    }
    @GetMapping("/refresh")
    public ResponseEntity<AuthResponse> refresh(@CookieValue(value = "refreshToken",required = false) String refreshToken,HttpServletResponse response){
        return ResponseEntity.ok(authService.refresh(refreshToken, response));
    }
    @PostMapping("/logout")
    public ResponseEntity<String> userSignOut(@RequestHeader("Authorization") String authorization){
        String refreshToken=authorization.substring(7);
        authService.userSignOut(refreshToken);
        return ResponseEntity.ok("User logged out");
    }
    @PostMapping("/forgot-password")
    public ResponseEntity<String> forgotPassword(@RequestBody Map<String,String> request){
        return ResponseEntity.ok(authService.forgotPassword(request.get("email")));
    }
    @PutMapping("/reset-password")
    public ResponseEntity<String> resetPassword(@RequestBody Map<String,String> request){
        return ResponseEntity.ok(authService.resetPassword(request.get("password"), request.get("token")));
    }
}
