package server.model.service;

import server.model.entity.Portafolio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import server.model.repository.PortafolioRepository;

import java.util.List;

@Service
public class PortafolioService {

    @Autowired
    private PortafolioRepository portafolioRepository;

    public List<Portafolio> findAll() {
        return portafolioRepository.findAll();
    }

    public Portafolio findById(Long id) {
        return portafolioRepository.findById(id).orElse(null);
    }

    public Portafolio save(Portafolio portafolio) {
        return portafolioRepository.save(portafolio);
    }

    public void deleteById(Long id) {
        portafolioRepository.deleteById(id);
    }
}