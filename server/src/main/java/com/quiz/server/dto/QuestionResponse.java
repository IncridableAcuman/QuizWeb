package com.quiz.server.dto;

import java.util.List;

import com.quiz.server.enums.Category;

import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class QuestionResponse {
    private Long id;
    private String title;
    private Integer number;
    private Category category;
    List<OptionResponse> options;
    private String currentAnswer;
}
