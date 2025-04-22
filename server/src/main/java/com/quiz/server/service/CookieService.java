package com.quiz.server.service;

import org.springframework.http.ResponseCookie;
import org.springframework.stereotype.Service;

import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CookieService {
    
    public void addCookieToken(HttpServletResponse response,String refreshToken){
          ResponseCookie responseCookie=ResponseCookie.from("refreshToken", refreshToken)
        .httpOnly(true)
        .secure(false)
        .path("/")
        .maxAge(7*24*60*60*1000)
        .build();
        response.addHeader("Set-Cookie", responseCookie.toString());
    }
}
