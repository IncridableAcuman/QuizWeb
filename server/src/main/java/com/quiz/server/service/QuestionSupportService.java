package com.quiz.server.service;

import java.util.List;

import org.springframework.stereotype.Service;

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

    public Question create(String title,Integer number,Category category,List<Option> options,String currentAnswer){
        Question question=new Question();
        question.setTitle(title);
        question.setNumber(number);
        question.setCategory(category);
        question.setOptions(options);
        question.setCurrentAnswer(currentAnswer);
        return questionRepository.save(question);
    }

    public Question findNumber(Integer number){
   return questionRepository.findByNumber(number).orElseThrow(()->new ResourceNotFoundException("Question not found by number"));
    }
    public Question findCategory(Category category){
        return questionRepository.findByCategory(category).orElseThrow(()->new ResourceNotFoundException("Question not found by category"));
    }
    
}
