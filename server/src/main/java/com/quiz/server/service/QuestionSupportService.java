package com.quiz.server.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.quiz.server.dto.OptionResponse;
import com.quiz.server.dto.QuestionResponse;
import com.quiz.server.enums.Category;
import com.quiz.server.exception.ResourceNotFoundException;
import com.quiz.server.model.Option;
import com.quiz.server.model.Question;
import com.quiz.server.repository.QuestionRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class QuestionSupportService {
    private final QuestionRepository questionRepository;


    public Question findNumber(Integer number){
   return questionRepository.findByNumber(number).orElseThrow(()->new ResourceNotFoundException("Question not found by number"));
    }
    public Question findCategory(Category category){
        return questionRepository.findByCategory(category).orElseThrow(()->new ResourceNotFoundException("Question not found by category"));
    }

    public List<Option> listOptionData(Question question){
        return question.getOptions().stream().map(opt->{
            Option option=new Option();
            option.setId(opt.getId());
            option.setKey(opt.getKey());
            option.setText(opt.getText());
            return option;
        }).toList();
    }

    public QuestionResponse returnQuestionResponse(Question question){
        List<OptionResponse> options = question.getOptions().stream().map(opt->{
            OptionResponse option=new OptionResponse();
            option.setId(opt.getId());
            option.setKey(opt.getKey());
            option.setText(opt.getText());
            option.setQuestionId(opt.getQuestion().getId());
            return option;
        }).toList();
        QuestionResponse response=new QuestionResponse();
        response.setId(question.getId());
        response.setTitle(question.getTitle());
        response.setNumber(question.getNumber());
        response.setCategory(question.getCategory());
        response.setOptions(options);
        response.setCurrentAnswer(question.getCurrentAnswer());
        return response;
    }
}
