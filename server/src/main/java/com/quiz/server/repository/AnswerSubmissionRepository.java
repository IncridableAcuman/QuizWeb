package com.quiz.server.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.quiz.server.model.AnswerSubmission;

public interface AnswerSubmissionRepository  extends JpaRepository<AnswerSubmission,Long> {
    List<AnswerSubmission> findByUserId(Long userId);
}
