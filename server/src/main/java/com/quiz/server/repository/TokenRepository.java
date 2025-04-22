package com.quiz.server.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.quiz.server.model.Token;
import com.quiz.server.model.User;

public interface TokenRepository extends JpaRepository<Token,Long>{
    Optional<Token> findByUser(User user);
    Optional<Token> findByRefreshToken(String refreshToken);
    void deleteByUser(User user);
}
