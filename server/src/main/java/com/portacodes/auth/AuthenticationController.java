package com.portacodes.auth;




import com.portacodes.exceptions.EmailAlreadyExistsException;
import com.portacodes.exceptions.InvalidCredentialsException;
import com.portacodes.responses.SuccessResponse;
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
            return ResponseEntity.ok(new SuccessResponse(message, response));
        } catch (EmailAlreadyExistsException e) {
            String message = "El correo electrónico ya existe en la base de datos.";
            return ResponseEntity.status(HttpStatus.CONFLICT).body(new ErrorResponse(message));
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
            String message = "Credenciales inválidas";
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new ErrorResponse(message));
        } catch (UsernameNotFoundException e) {
            String message = "Email inválido";
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new ErrorResponse(message));
        }
    }

}
