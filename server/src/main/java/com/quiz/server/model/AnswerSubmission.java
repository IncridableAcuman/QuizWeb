package com.quiz.server.model;

import java.io.Serializable;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Entity
@Table(name = "submission")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class AnswerSubmission implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;//user

    @ManyToOne
    @JoinColumn(name = "question_id")
    private Question question;

    private String selectedOption;// tanlagan variant A/B/C/D

    private boolean isCorrect;// to'g'ri yoki noto'g'ri
}
