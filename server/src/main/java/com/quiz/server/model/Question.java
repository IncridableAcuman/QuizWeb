package com.quiz.server.model;

import java.io.Serializable;
import java.util.List;

import com.quiz.server.enums.Category;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Question implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;//savol matn qismi

    @Column(nullable = false)
    private Integer number;//qaysi savol ekanligi

    @Enumerated(EnumType.STRING)
    private Category category;//kategoriyasi

    @OneToMany(mappedBy = "question",cascade = CascadeType.ALL)
    List<Option> options;//savolga tegishli variantlar

    @Column(nullable = false)
    private String currentAnswer;//to'g'ri javob->A/B/C/D
}
