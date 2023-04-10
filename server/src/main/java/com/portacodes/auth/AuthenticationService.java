package com.portacodes.auth;

import com.portacodes.config.JwtService;
import com.portacodes.model.entity.Role;
import com.portacodes.model.entity.User;
import com.portacodes.model.repository.UserRepository;
import com.portacodes.token.Token;
import com.portacodes.token.TokenRepository;
import com.portacodes.token.TokenType;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository repository;

    private final TokenRepository tokenRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    /**
     * Registra a un nuevo usuario en el sistema.
     *
     * @param request Los datos del usuario a registrar.
     * @return Un objeto {@link AuthenticationResponse} que contiene el token JWT generado para el usuario.
     */
    public AuthenticationResponse register(RegisterRequest request) {
        var user = User.builder()
                .nombres(request.getFirstname())
                .apellidos(request.getLastname())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER)
                .build();
        var savedUser = repository.save(user);
        var jwtToken = jwtService.generateToken(user);
        saveUserToken(savedUser, jwtToken);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();

    }

    /**
     * Autentica a un usuario en el sistema.
     *
     * @param request Los datos de autenticación del usuario.
     * @return Un objeto {@link AuthenticationResponse} que contiene el token JWT generado para el usuario.
     */
    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        var user = repository.findByEmail(request.getEmail())
                .orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        revokeAllUserTokens(user);
        saveUserToken(user, jwtToken);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    /**
     * Guarda el token JWT generado para un usuario en la base de datos.
     *
     * @param user     El usuario al que pertenece el token.
     * @param jwtToken El token JWT generado para el usuario.
     */
    private void saveUserToken(User user, String jwtToken) {
        var token = Token.builder()
                .user(user)
                .token(jwtToken)
                .tokenType(TokenType.BEARER)
                .expired(false)
                .revoked(false)
                .build();
        tokenRepository.save(token);
    }

    /**
     * Revoca y expira todos los tokens JWT generados para un usuario en la base de datos.
     *
     * @param user El usuario al que pertenecen los tokens a revocar.
     */
    private void revokeAllUserTokens(User user) {
        var validUserTokens = tokenRepository.findAllValidTokenByUser(Math.toIntExact(user.getId()));
        if (validUserTokens.isEmpty())
            return;
        validUserTokens.forEach(token -> {
            token.setExpired(true);
            token.setRevoked(true);
        });
        tokenRepository.saveAll(validUserTokens);
    }
}
