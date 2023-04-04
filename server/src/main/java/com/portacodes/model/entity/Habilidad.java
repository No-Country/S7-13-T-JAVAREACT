package com.portacodes.model.entity;


import jakarta.persistence.*;
import lombok.Data;


@Entity
@Data
@Table(name = "habilidad")
public class Habilidad {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String nombre;

    @ManyToOne
    private Portafolio portafolio;

    // Getters y Setters
}
