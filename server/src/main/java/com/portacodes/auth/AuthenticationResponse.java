package com.portacodes.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Clase utilizada para representar la respuesta de autenticación exitosa.
 * Contiene el token generado por el sistema.
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse  {

    private String token;

    private AuthenticationResponse(Builder builder) {
        this.token = builder.token;
    }

    public static Builder builder() {
        return new Builder();
    }

    public String getToken() {
        return token;
    }

    public static class Builder {
        private String token;

        public Builder token(String token) {
            this.token = token;
            return this;
        }

        public AuthenticationResponse build() {
            return new AuthenticationResponse(this);
        }
    }

}
