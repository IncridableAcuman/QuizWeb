package com.quiz.server.repository;

import java.util.Optional;

import com.quiz.server.model.Question;

public interface QuestionRepository {
    Optional<Question> findByNumber(Integer number);
}
