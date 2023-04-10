package com.portacodes.controller;


import com.portacodes.exceptions.ResourceNotFoundException;
import com.portacodes.model.DTO.UserDTO;
import com.portacodes.model.DTO.UserIdDTO;
import com.portacodes.model.entity.User;
import com.portacodes.model.repository.UserRepository;
import com.portacodes.model.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class HolaMundocontroler {

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/hola")
    public String holaMundo(){
        return "Hola Mundo";
    }


    @GetMapping("/users")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<UserDTO>> getAllUsers() {
        List<User> users = userService.getAllUsers();
        List<UserDTO> userDTOs = new ArrayList<>();
        for (User user : users) {
            UserDTO userDTO = new UserDTO();
            userDTO.setNombres(user.getNombres());
            userDTO.setRole(user.getRole().name());
            userDTOs.add(userDTO);
        }
        return ResponseEntity.ok(userDTOs);
    }


    @GetMapping("/user/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<UserIdDTO>  getUserById(@PathVariable Integer id) {
        User user = userService.findById(id);
        if (user == null) {
            return ResponseEntity.notFound().build();
        }
        UserIdDTO userIdDTO = new UserIdDTO();
        userIdDTO.setNombres(user.getNombres());
        userIdDTO.setEmail(user.getEmail());
        userIdDTO.setRole(user.getRole().name());
        userIdDTO.setAuthority(user.getAuthorities().stream().findFirst().orElse(null).getAuthority());
        userIdDTO.setUsername(user.getUsername());

        return ResponseEntity.ok(userIdDTO);
    }

    @PutMapping("/users/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<User> update(@PathVariable("id") Integer id, @RequestBody Map<String, Object> updates) {
        // Buscar el usuario existente por ID
        User existingUser = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id " + id));

        // Verificar si el usuario existe antes de actualizarlo
        if (existingUser == null) {
            throw new ResourceNotFoundException("User not found with id " + id);
        }

        // Actualizar los campos especificados en la petición
        String nombres = (String) updates.get("nombres");
        if (nombres != null) {
            existingUser.setNombres(nombres);
        }
        String email = (String) updates.get("email");
        if (email != null) {
            existingUser.setEmail(email);
        }
        String password = (String) updates.get("password");
        if (password != null) {
            existingUser.setPassword(password);
        }

        // Guardar el usuario actualizado en la base de datos
        User savedUser = userRepository.save(existingUser);

        // Devolver el usuario actualizado en la respuesta
        return ResponseEntity.ok(savedUser);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<User> delete(@PathVariable Integer id) {
        User existingUser = userService.findById(id);
        if (existingUser == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        userService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}


