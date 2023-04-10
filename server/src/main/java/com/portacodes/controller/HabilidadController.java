package com.portacodes.controller;


import com.portacodes.model.entity.Habilidad;
import com.portacodes.model.service.HabilidadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/habilidades")
public class HabilidadController {

    @Autowired
    private HabilidadService habilidadService;

    @GetMapping
    public List<Habilidad> findAll() {
        return habilidadService.findAll();
    }

    @GetMapping("/{id}")
    public Habilidad findById(@PathVariable Long id) {
        return habilidadService.findById(id);
    }

    @PostMapping
    public ResponseEntity<Habilidad> save(@RequestBody Habilidad habilidad) {
        Habilidad habilidadGuardada = habilidadService.save(habilidad);
        return new ResponseEntity<>(habilidadGuardada, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public Habilidad update(@PathVariable Long id, @RequestBody Habilidad habilidad) {
        habilidad.setId(id);
        return habilidadService.save(habilidad);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Long id) {
        habilidadService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
