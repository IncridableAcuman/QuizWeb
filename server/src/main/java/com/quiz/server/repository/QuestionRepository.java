package com.quiz.server.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.quiz.server.model.Question;

public interface QuestionRepository extends JpaRepository<Question,Long> {
    Optional<Question> findByNumber(Integer number);
}
