package model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
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
    private Portafolio portafolio;
}

