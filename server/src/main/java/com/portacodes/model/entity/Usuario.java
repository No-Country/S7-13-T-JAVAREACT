package com.portacodes.model.entity;



import jakarta.persistence.*;
import lombok.Data;


import java.util.List;

@Entity
@Data
@Table(name = "usuarios")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String nombres;

    private String apellidos;

    private String rol;

    private String email;

    private String password;

    // Getters y Setters

    @OneToMany
    private List<Portafolio> portafolio;
}

