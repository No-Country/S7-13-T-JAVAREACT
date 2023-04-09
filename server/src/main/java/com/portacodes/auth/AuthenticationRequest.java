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

    /**
     * Este constructor privado acepta un objeto Builder como argumento y se utiliza para construir un objeto AuthenticationRequest utilizando el patrón de diseño de Builder.
     *
     * @param builder El objeto Builder utilizado para construir el objeto AuthenticationRequest.
     */
    private AuthenticationRequest(Builder builder) {
        this.email = builder.email;
        this.password = builder.password;
    }

    /**
     * Devuelve un objeto Builder para construir un objeto AuthenticationRequest.
     *
     * @return Un objeto Builder para construir un objeto AuthenticationRequest.
     */
    public static Builder builder() {
        return new Builder();
    }

    /**
     * Devuelve el correo electrónico del usuario.
     *
     * @return El correo electrónico del usuario.
     */
    public String getEmail() {
        return email;
    }

    /**
     * Devuelve la contraseña del usuario.
     *
     * @return La contraseña del usuario.
     */
    public String getPassword() {
        return password;
    }

    /**
     * La clase Builder se utiliza para construir objetos AuthenticationRequest utilizando el patrón de diseño Builder.
     */
    public static class Builder {
        private String email;
        private String password;

        /**
         * Establece el correo electrónico del usuario.
         *
         * @param email El correo electrónico del usuario.
         * @return El objeto Builder actualizado.
         */
        public Builder email(String email) {
            this.email = email;
            return this;
        }

        /**
         * Establece la contraseña del usuario.
         *
         * @param password La contraseña del usuario.
         * @return El objeto Builder actualizado.
         */
        public Builder password(String password) {
            this.password = password;
            return this;
        }

        /**
         * Construye y devuelve un objeto AuthenticationRequest utilizando los valores de los campos de instancia del objeto Builder.
         *
         * @return Un objeto AuthenticationRequest construido utilizando los valores de los campos de instancia del objeto Builder.
         */
        public AuthenticationRequest build() {
            return new AuthenticationRequest(this);
        }
    }
}
