package com.portacodes.auth;

import com.portacodes.exceptions.exception.EmailAlreadyExistsException;
import com.portacodes.exceptions.exception.InvalidCredentialsException;
import com.portacodes.exceptions.responses.SuccessResponse;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {
    private final AuthenticationService service;

    @Operation(
            summary = "Registrar un nuevo usuario",
            description = "Crea una cuenta de usuario con las credenciales proporcionadas en el cuerpo de la solicitud"
    )
    @PostMapping("/register")
    public ResponseEntity<?> register(
            @RequestBody RegisterRequest request
    ) {
        try {
            AuthenticationResponse response = service.register(request);
            String message = "Usuario creado con éxito";
            return ResponseEntity.ok(new SuccessResponse(message));
        } catch (EmailAlreadyExistsException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("El correo electrónico ya existe en la base de datos.");
        }
    }

    @Operation(
            summary = "Autenticar un usuario",
            description = "Inicia sesión con las credenciales proporcionadas en el cuerpo de la solicitud"
    )
    @PostMapping("/authenticate")
    public ResponseEntity<?> authenticate(
            @RequestBody AuthenticationRequest request
    ) {
        try {
            AuthenticationResponse response = service.authenticate(request);
            return ResponseEntity.ok(response);
        } catch (InvalidCredentialsException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Credenciales inválidas");
        } catch (UsernameNotFoundException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Email inválido");
        }
    }

}
