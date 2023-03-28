package controller;

import model.Portafolio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import service.PortafolioService;

import java.util.List;

@RestController
@RequestMapping("/portafolios")
public class PortafolioController {

    @Autowired
    private PortafolioService portafolioService;

    @GetMapping
    public ResponseEntity<List<Portafolio>> findAll() {
        List<Portafolio> portafolios = portafolioService.findAll();
        return new ResponseEntity<>(portafolios, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Portafolio> findById(@PathVariable Long id) {
        Portafolio portafolio = portafolioService.findById(id);
        if (portafolio == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(portafolio, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Portafolio> create(@RequestBody Portafolio portafolio) {
        Portafolio savedPortafolio = portafolioService.save(portafolio);
        return new ResponseEntity<>(savedPortafolio, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Portafolio> update(@PathVariable Long id, @RequestBody Portafolio portafolio) {
        Portafolio existingPortafolio = portafolioService.findById(id);
        if (existingPortafolio == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        portafolio.setId(id);
        Portafolio updatedPortafolio = portafolioService.save(portafolio);
        return new ResponseEntity<>(updatedPortafolio, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        Portafolio portafolio = portafolioService.findById(id);
        if (portafolio == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        portafolioService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
