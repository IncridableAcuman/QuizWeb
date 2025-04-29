package com.quiz.server.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.quiz.server.dto.QuestionRequest;
import com.quiz.server.dto.QuestionResponse;
import com.quiz.server.enums.Category;
import com.quiz.server.service.QuestionService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/quizz")
@RequiredArgsConstructor
public class QuestionController {
    private final QuestionService questionService;

    @PostMapping("/create")
    public ResponseEntity<QuestionResponse> createQuestion(@RequestBody QuestionRequest request){
        return ResponseEntity.ok(questionService.createQuestion(request));
    }
    @GetMapping("/questions/{number}")
    public ResponseEntity<QuestionResponse> getQuestionByNumber(@PathVariable Integer number){
        return ResponseEntity.ok(questionService.getQuestionByNumber(number));
    }

    @GetMapping("/categories/{category}")
    public ResponseEntity<QuestionResponse>getQuestionByCategory(@PathVariable Category category){
        return ResponseEntity.ok(questionService.getQuestionByCategory(category));
    }
}
