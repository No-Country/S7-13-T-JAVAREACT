package com.portacodes.model.service;

import com.portacodes.model.entity.Habilidad;


import java.util.List;

public interface HabilidadService {
    List<Habilidad> findAll();
    Habilidad findById(Long id);
    Habilidad save(Habilidad habilidad);
    void deleteById(Long id);
}
