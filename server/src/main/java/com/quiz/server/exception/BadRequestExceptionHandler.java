package com.quiz.server.exception;

public class BadRequestExceptionHandler  extends RuntimeException{
    public BadRequestExceptionHandler(String message){
        super(message);
    }
}
