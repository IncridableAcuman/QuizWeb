package com.quiz.server.config;

import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.stereotype.Component;



@Component
public class SecurityConfig {
    

    @Bean // parollarni hash qilish
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
    @Bean // api so'rovlarini filter qilish yani ixtiyoriy portdan so'rov yubormaslik uchun
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception{
            httpSecurity.csrf(csrf->csrf.disable())
            .authorizeHttpRequests(auth->auth.requestMatchers("/api/auth/**","/api/quizz/**").permitAll().anyRequest().authenticated()
            )
            // .oauth2Login(oauth2->oauth2
            // .defaultSuccessUrl("/api/auth/hello")
            // )
            .sessionManagement(session->session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
            return httpSecurity.build();

    }
}
