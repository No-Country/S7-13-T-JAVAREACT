package com.portacodes.model.service;

import com.portacodes.model.entity.Habilidad;
import com.portacodes.model.repository.HabilidadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
public class HabilidadServiceImp implements HabilidadService {


    @Autowired
    private HabilidadRepository habilidadRepository;

    @Override
    public List<Habilidad> findAll() {
        return habilidadRepository.findAll();
    }

    @Override
    public Habilidad findById(Long id) {
        Optional<Habilidad> habilidadOptional = habilidadRepository.findById(id);
        if (habilidadOptional.isPresent()) {
            return habilidadOptional.get();
        } else {
            throw new RuntimeException("Habilidad no encontrada con ID: " + id);
        }
    }

    @Override
    public Habilidad save(Habilidad habilidad) {
        return habilidadRepository.save(habilidad);
    }

    @Override
    public void deleteById(Long id) {
        habilidadRepository.deleteById(id);
    }
}
