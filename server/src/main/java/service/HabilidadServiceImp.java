package service;

import model.Habilidad;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repository.HabilidadRepository;

import java.util.List;
import java.util.Optional;

@Service
public class HabilidadServiceImp implements HabilidadService{


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
