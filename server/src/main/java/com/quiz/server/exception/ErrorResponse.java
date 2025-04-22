package com.quiz.server.exception;

import java.time.LocalDateTime;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@RequiredArgsConstructor
@Getter
@Setter
public class ErrorResponse {
    private LocalDateTime timestamp;
    private int satus;
    private String error;
    private String message;
    private String path;

    public ErrorResponse(LocalDateTime timestamp,int satus,String error,String message,String path){
        this.timestamp=timestamp;
        this.satus=satus;
        this.error=error;
        this.message=message;
        this.path=path;
    }
}
