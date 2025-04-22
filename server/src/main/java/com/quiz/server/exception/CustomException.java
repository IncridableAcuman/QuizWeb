package com.quiz.server.exception;

public class CustomException extends RuntimeException{
    public CustomException(String message){
        super(message);
    }
}
