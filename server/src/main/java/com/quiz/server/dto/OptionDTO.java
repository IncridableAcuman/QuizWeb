package com.quiz.server.dto;

//import com.quiz.server.model.Question;

import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class OptionDTO {
    private String key;
    private String text;
}
