package com.portacodes.model.entity;


import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
@Table(name = "portafolios")
public class Portafolio {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String titulo;

    private String descripcion;

    @ManyToOne
    private Usuario usuario;

    @OneToMany
    private List<Habilidad> habilidad;

    // Getters y Setters
}