// package com.quiz.server.config;

// import java.io.IOException;
// import java.sql.Date;
// import java.util.Map;

// import org.springframework.security.core.Authentication;
// import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
// import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
// import org.springframework.stereotype.Component;

// import com.quiz.server.model.Token;
// import com.quiz.server.model.User;
// import com.quiz.server.repository.TokenRepository;
// import com.quiz.server.service.CookieService;
// import com.quiz.server.service.UserService;
// import com.quiz.server.util.JWTUtil;

// import jakarta.servlet.ServletException;
// import jakarta.servlet.http.HttpServletRequest;
// import jakarta.servlet.http.HttpServletResponse;
// import lombok.RequiredArgsConstructor;

// @Component
// @RequiredArgsConstructor
// public class OAuth2AuthenticationSuccessHandler implements AuthenticationSuccessHandler {

//     private final JWTUtil jwtUtil;
//     private final TokenRepository tokenRepository;
//     private final UserService userService;
//     private final CookieService cookieService;

//     private final long accessTime = 15 * 60 * 1000;
//     private final long refreshTime = 7 * 24 * 60 * 60 * 1000;

//     @Override
//     public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
//                                         Authentication authentication) throws IOException, ServletException {
//         OAuth2AuthenticationToken authToken = (OAuth2AuthenticationToken) authentication;
//         Map<String, Object> attributes = authToken.getPrincipal().getAttributes();

//         String email = (String) attributes.get("email");
//         String username = (String) attributes.get("name");

//         // Agar user mavjud bo'lmasa, yaratamiz
//         User user = userService.findOrCreateOAuthUser(username,email);

//         // Tokenlar
//         String accessToken = jwtUtil.generateToken(user, accessTime);
//         String refreshToken = jwtUtil.generateToken(user, refreshTime);

//         // Saqlash
//         Token token = tokenRepository.findByUser(user).orElse(new Token());
//         token.setUser(user);
//         token.setRefreshToken(refreshToken);
//         token.setExpiryDate(new Date(System.currentTimeMillis() + refreshTime));
//         tokenRepository.save(token);

//         // Cookie orqali yuborish
//         cookieService.addCookieToken(response, refreshToken);

//         // Clientga redirect qilish (masalan, frontend urlga)
//         response.sendRedirect("http://localhost:5173/oauth-success?accessToken=" + accessToken);
//     }
// }
