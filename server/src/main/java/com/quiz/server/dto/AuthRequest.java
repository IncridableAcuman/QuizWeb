package com.quiz.server.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.RequiredArgsConstructor;


@Data
@RequiredArgsConstructor
public class AuthRequest {
    @NotBlank
    private String username;

    @NotBlank
    private String email;

    @NotBlank @Size(min = 8)
    private String password;

}
