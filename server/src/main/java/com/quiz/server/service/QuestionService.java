package com.quiz.server.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.quiz.server.dto.QuestionRequest;
import com.quiz.server.dto.QuestionResponse;
import com.quiz.server.enums.Category;
import com.quiz.server.model.Option;
import com.quiz.server.model.Question;
import com.quiz.server.repository.OptionRepository;
import com.quiz.server.repository.QuestionRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class QuestionService {
   private final OptionRepository optionRepository;
   private final QuestionSupportService questionSupportService;
   private final QuestionRepository questionRepository;

   @Transactional
   public QuestionResponse createQuestion(QuestionRequest request){
        Question question=new Question();
        question.setTitle(request.getTitle());
        question.setNumber(request.getNumber());
        question.setCategory(request.getCategory());
        question.setCurrentAnswer(request.getCurrentAnswer());
        Question saved=questionRepository.save(question);

        List<Option> options=request.getOptions().stream().map(opt->{
            Option option=new Option();
            option.setKey(opt.getKey());
            option.setText(opt.getText());
            option.setQuestion(saved);
            return optionRepository.save(option);
        }).toList();
        question.setId(saved.getId());;
        question.setOptions(options);
        return questionSupportService.returnQuestionResponse(question);
   }

   public QuestionResponse getQuestionByNumber(Integer number){
    Question question=questionSupportService.findNumber(number);
    // List<Option> options=question.getOptions().stream().map(opt->{
    //     Option dto=new Option();
    //     dto.setId(opt.getId());
    //     dto.setKey(opt.getKey());
    //     dto.setText(opt.getText());
    //     return dto;
    // }).toList();
    return questionSupportService.returnQuestionResponse(question);
   }

   public QuestionResponse getQuestionByCategory(Category category){
    Question question=questionSupportService.findCategory(category);
    // List<Option> options=question.getOptions().stream().map(opt->{
    //     Option dto=new Option();
    //     dto.setId(opt.getId());
    //     dto.setKey(opt.getKey());
    //     dto.setText(opt.getText());
    //     return dto;
    // }).toList();
   return questionSupportService.returnQuestionResponse(question);
   }
}
