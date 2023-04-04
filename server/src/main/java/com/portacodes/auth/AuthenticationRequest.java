package com.portacodes.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Clase que representa una solicitud de autenticación.
 *
 * <p>Esta clase se utiliza para enviar credenciales de autenticación al servidor y obtener un token de acceso
 * válido a cambio.</p>
 *
 * <p>Los atributos de la solicitud incluyen:</p>
 * <ul>
 *   <li>{@code email}: el correo electrónico del usuario que desea autenticarse</li>
 *   <li>{@code password}: la contraseña del usuario</li>
 * </ul>
 *
 * @see AuthenticationResponse
 */
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationRequest {

    private String email;
    String password;

    private AuthenticationRequest(Builder builder) {
        this.email = builder.email;
        this.password = builder.password;
    }

    public static Builder builder() {
        return new Builder();
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public static class Builder {
        private String email;
        private String password;

        public Builder email(String email) {
            this.email = email;
            return this;
        }

        public Builder password(String password) {
            this.password = password;
            return this;
        }

        public AuthenticationRequest build() {
            return new AuthenticationRequest(this);
        }
    }
}
