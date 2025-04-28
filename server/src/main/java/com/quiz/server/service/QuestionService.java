package com.quiz.server.service;

import java.util.List;

import org.springframework.stereotype.Service;

//import com.quiz.server.dto.OptionDTO;
import com.quiz.server.dto.QuestionRequest;
import com.quiz.server.dto.QuestionResponse;
import com.quiz.server.model.Option;
import com.quiz.server.model.Question;
import com.quiz.server.repository.OptionRepository;
import com.quiz.server.repository.QuestionRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class QuestionService {
   private final QuestionRepository questionRepository;
   private final OptionRepository optionRepository;
   public QuestionResponse createQuestion(QuestionRequest request){

    Question question=new Question();
    question.setTitle(request.getTitle());
    question.setNumber(request.getNumber());
    question.setCategory(request.getCategory());
    question.setCurrentAnswer(request.getCurrentAnswer());

    Question saved = questionRepository.save(question);

    List<Option> options=request.getOptions().stream().map(opt->{
        Option option=new Option();
        option.setKey(opt.getKey());
        option.setText(opt.getText());
        option.setQuestion(saved);
        return optionRepository.save(option); 
    }).toList();

    question.setOptions(options);

    QuestionResponse response=new QuestionResponse();
    response.setId(saved.getId());
    response.setTitle(saved.getTitle());
    response.setCategory(saved.getCategory());
    response.setOptions(options);
    response.setCurrentAnswer(saved.getCurrentAnswer());

    return response;
   }
}
