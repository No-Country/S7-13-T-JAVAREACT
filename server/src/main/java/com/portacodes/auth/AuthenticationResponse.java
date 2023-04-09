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

    /**
     * todo Este constructor privado acepta un objeto Builder como argumento y se utiliza para construir un objeto AuthenticationResponse utilizando el patrón de diseño de Builder.
     *
     * @param builder todo El objeto Builder utilizado para construir el objeto AuthenticationResponse.
     */
    private AuthenticationResponse(Builder builder) {
        this.token = builder.token;
    }

    /**
     * Devuelve un objeto Builder para construir un objeto AuthenticationResponse.
     *
     * @return Un objeto Builder para construir un objeto AuthenticationResponse.
     */
    public static Builder builder() {
        return new Builder();
    }

    /**
     * Devuelve el token de autenticación generado para el usuario.
     *
     * @return El token de autenticación generado para el usuario.
     */
    public String getToken() {
        return token;
    }

    /**
     * La clase Builder se utiliza para construir objetos AuthenticationResponse utilizando el patrón de diseño Builder.
     */
    public static class Builder {
        private String token;


        /**
         * Establece el token de autenticación generado para el usuario.
         *
         * @param token El token de autenticación generado para el usuario.
         * @return El objeto Builder actualizado.
         */
        public Builder token(String token) {
            this.token = token;
            return this;
        }

        /**
         * Construye y devuelve un objeto AuthenticationResponse utilizando los valores de los campos de instancia del objeto Builder.
         *
         * @return Un objeto AuthenticationResponse construido utilizando los valores de los campos de instancia del objeto Builder.
         */
        public AuthenticationResponse build() {
            return new AuthenticationResponse(this);
        }
    }

}
