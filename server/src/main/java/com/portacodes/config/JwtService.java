package com.portacodes.config;


import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import io.jsonwebtoken.Claims;
import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Service
public class JwtService {


    private static final String SECRET_KEY= "26452948404D635166546A576D5A7134743777217A25432A462D4A614E645267";

    /**
     * todo Extrae el nombre de usuario del token JWT.
     *
     * @param token Token JWT.
     * @return Nombre de usuario extraído del token JWT.
     */
    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    /**
     * Extrae una claim (atributo) específica del token JWT.
     *
     * @param token          Token JWT.
     * @param claimsResolver Función que recibe el objeto Claims y devuelve la claim que se quiere extraer.
     * @param <T>            Tipo de la claim que se quiere extraer.
     * @return Claim extraída del token JWT.
     */
    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    /**
     * Genera un token JWT para el usuario especificado.
     *
     * @param userDetails Detalles del usuario para el que se quiere generar el token.
     * @return Token JWT generado.
     */
    public String generateToken(UserDetails userDetails) {
        return generateToken(new HashMap<>(), userDetails);
    }

    /**
     * Genera un token JWT para el usuario especificado, incluyendo claims adicionales.
     *
     * @param extraClaims  Claims adicionales que se quieren incluir en el token JWT.
     * @param userDetails Detalles del usuario para el que se quiere generar el token.
     * @return Token JWT generado.
     */
    public String generateToken(
            Map<String, Object> extraClaims,
            UserDetails userDetails
    ) {
        return Jwts
                .builder()
                .setClaims(extraClaims)
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 45))//duracion token 45 minutos
                .signWith(getSinginKey(), SignatureAlgorithm.HS256)
                .compact();
    }

    /**
     * Verifica si un token JWT es válido para el usuario especificado.
     *
     * @param token        Token JWT a validar.
     * @param userDetails Detalles del usuario para el que se quiere validar el token.
     * @return true si el token JWT es válido para el usuario especificado, false en caso contrario.
     */
    public boolean isTokenValid(String token, UserDetails userDetails) {
        final String username = extractUsername(token);
        return (username.equals(userDetails.getUsername())) && !isTokenExpired(token);
    }

    /**
     * Verifica si un token JWT ha expirado.
     *
     * @param token Token JWT a verificar.
     * @return true si el token JWT ha expirado, false en caso contrario.
     */
    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    /**
     * Extrae la fecha de expiración del token JWT.
     *
     * @param token Token JWT.
     * @return Fecha de expiración del token JWT.
     */
    private Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    /**

     Extrae todas las reclamaciones (claims) de un token JWT.
     @param token El token JWT del que se extraerán las reclamaciones.
     @return Un objeto Claims que contiene todas las reclamaciones del token.
     */
    private Claims extractAllClaims(String token) {
        return Jwts
                .parserBuilder()
                .setSigningKey(getSinginKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    /**

     Obtiene la clave secreta usada para firmar y verificar tokens JWT.
     @return La clave secreta como objeto de tipo Key.
     */
    private Key getSinginKey() {

        byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(keyBytes);
    }
}
