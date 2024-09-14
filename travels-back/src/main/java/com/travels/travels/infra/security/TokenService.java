//package com.travels.travels.infra.security;
//
//import com.auth0.jwt.JWT;
//import com.auth0.jwt.algorithms.Algorithm;
//import com.auth0.jwt.exceptions.JWTCreationException;
//import com.auth0.jwt.exceptions.TokenExpiredException;
//import com.travels.travels.domain.user.User;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.stereotype.Service;
//
//import java.time.Instant;
//import java.time.LocalDateTime;
//import java.time.ZoneOffset;
//
//@Service
//public class TokenService {
//
//    @Value("${api.security.token.secret}")
//    private String secret;
//
//    public String generateToken(User user) {
//        try{
//            Algorithm algorithm = Algorithm.HMAC256(secret);
//            return JWT.create()
//                    .withIssuer("auth-api")
//                    .withSubject(user.getEmail())
//                    .withExpiresAt(generateExpirationDate())
//                    .sign(algorithm);
//        }catch (JWTCreationException e) {
//            throw new RuntimeException("Error in token generation: ", e);
//        }
//    }
//
//    public String validateToken(String token){
//        try{
//            Algorithm algorithm = Algorithm.HMAC256(secret);
//            return JWT.require(algorithm)
//                    .withIssuer("auth-api")
//                    .build()
//                    .verify(token)
//                    .getSubject();
//        }catch (TokenExpiredException te) {
//            throw new RuntimeException("Token expired! ", te);
//        }catch (JWTCreationException e) {
//            throw new RuntimeException("Error in token validation: ", e);
//        }
//    }
//
//    private Instant generateExpirationDate(){
//        return LocalDateTime.now().plusHours(2).toInstant(ZoneOffset.of("-03:00"));
//    }
//}
