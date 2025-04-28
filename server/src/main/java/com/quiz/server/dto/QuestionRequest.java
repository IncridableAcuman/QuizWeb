package com.quiz.server.dto;

import java.util.List;

import com.quiz.server.enums.Category;

import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class QuestionRequest {
    private String title;
    private Integer number;
    private Category category;
    List<OptionDTO> options;
    private String currentAnswer;
}
