package com.portacodes.config;



import com.portacodes.token.TokenRepository;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.lang.NonNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtService jwtService;
    private final UserDetailsService userDetailsService;

    private final TokenRepository tokenRepository;

    /**

     Intercepta la solicitud entrante, extrae el token JWT del encabezado de autorización y autentica al usuario

     utilizando el token JWT y el servicio de detalles del usuario. Si la autenticación tiene éxito, agrega

     la autenticación a SecurityContextHolder.

     Si la autenticación falla, SecurityContextHolder permanecerá sin cambios.

     @param request La solicitud HTTP entrante

     @param response La respuesta HTTP saliente

     @param filterChain La cadena de filtros a través de la cual se está procesando la solicitud

     @throws ServletException si se produce un error de servlet

     @throws IOException si se produce un error de E/S
     */
    @Override
    protected void doFilterInternal(
            @NonNull HttpServletRequest request,
            @NonNull HttpServletResponse response,
            @NonNull FilterChain filterChain
    )
            throws ServletException, IOException {
        if (request.getServletPath().contains("/api/v1/auth")) {
            filterChain.doFilter(request, response);
            return;
        }
        final String authHeader = request.getHeader("Authorization");
        final String jwt;
        final String userEmail;
        //todo Si el encabezado de autorización está vacío o no comienza con "Bearer ", continúa con la siguiente solicitud en la cadena de filtros
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            filterChain.doFilter(request, response);
            return;
        }
        //todo Extrae el token JWT del encabezado de autorización
        jwt = authHeader.substring(7);
        userEmail = jwtService.extractUsername(jwt);// todo extract the useremail from jwt token;
        //  todo Si se extrajo un correo electrónico y la autenticación actual es nula, autentica al usuario utilizando el servicio de detalles del usuario y el token JWT
        if (userEmail != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            UserDetails userDetails = this.userDetailsService.loadUserByUsername(userEmail);
            var isTokenValid = tokenRepository.findByToken(jwt)
                    .map(token -> !token.isExpired() && !token.isRevoked())
                    .orElse(false);
            if (jwtService.isTokenValid(jwt, userDetails) && isTokenValid) {
                UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                        userDetails,
                        null,
                        userDetails.getAuthorities()
                );
                authToken.setDetails(
                        new WebAuthenticationDetailsSource().buildDetails(request)
                );
                SecurityContextHolder.getContext().setAuthentication(authToken);
            }
        }
        filterChain.doFilter(request, response);
    }
}
