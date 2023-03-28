package model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Portafolio {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String titulo;

    private String descripcion;

    @ManyToOne
    private Usuario usuario;

    // Getters y Setters
}