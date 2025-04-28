package com.quiz.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.quiz.server.model.Option;

public interface OptionRepository extends JpaRepository<Option,Long> {
    
}
