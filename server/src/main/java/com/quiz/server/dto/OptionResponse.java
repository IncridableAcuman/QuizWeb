package com.quiz.server.dto;

import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class OptionResponse {
    private Long id;
    private String key;
    private String text;
    private Long questionId;
}
