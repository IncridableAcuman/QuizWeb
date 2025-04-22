package com.quiz.server.exception;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class GlobalException extends ResponseEntityExceptionHandler{
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleResourceNotFound(ResourceNotFoundException exception,WebRequest request){
        ErrorResponse errorResponse=new ErrorResponse(
            LocalDateTime.now(),
            HttpStatus.NOT_FOUND.value(),
            "Resource not found",
            exception.getMessage(),
            request.getDescription(false)
        );
        return new ResponseEntity<>(errorResponse,HttpStatus.NOT_FOUND);
    }
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleAllException(Exception exception,WebRequest request){
        ErrorResponse response=new ErrorResponse(
            LocalDateTime.now(),
            HttpStatus.INTERNAL_SERVER_ERROR.value(),
            "Internal Server Error!",
            exception.getMessage(),
            request.getDescription(false)
        );
        return new ResponseEntity<>(response,HttpStatus.INTERNAL_SERVER_ERROR);
    }
    @ExceptionHandler(BadRequestExceptionHandler.class)
    public ResponseEntity<ErrorResponse> handleValidationException(BadRequestExceptionHandler exception,WebRequest request){
        ErrorResponse response=new ErrorResponse(
            LocalDateTime.now(),
            HttpStatus.BAD_REQUEST.value(),
            "Bad request",
            exception.getMessage(),
            request.getDescription(false)
        );
        return new ResponseEntity<>(response,HttpStatus.BAD_REQUEST);
    }
    @ExceptionHandler(CustomException.class)
    public ResponseEntity<ErrorResponse> handleCostomException(CustomException exception,WebRequest request){
        ErrorResponse response=new ErrorResponse(
            LocalDateTime.now(),
            HttpStatus.BAD_REQUEST.value(),
            "Custom ",
            exception.getMessage(),
            request.getDescription(false)
        );
        return new ResponseEntity<>(response,HttpStatus.BAD_REQUEST);
    }
}
