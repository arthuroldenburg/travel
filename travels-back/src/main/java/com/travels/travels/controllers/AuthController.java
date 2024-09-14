//package com.travels.travels.controllers;
//
//import com.travels.travels.domain.user.DTO.AuthDTO;
//import com.travels.travels.domain.user.DTO.LoginResponseDTO;
//import com.travels.travels.domain.user.DTO.RegisterDTO;
//import com.travels.travels.domain.user.User;
//import com.travels.travels.infra.security.TokenService;
//import com.travels.travels.repositories.UserRepository;
//import jakarta.validation.Valid;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//@RequestMapping("auth")
//public class AuthController {
//
//    @Autowired
//    private AuthenticationManager authenticationManager;
//    @Autowired
//    private UserRepository userRepository;
//    @Autowired
//    private TokenService tokenService;
//
//    @PostMapping("/login")
//    public ResponseEntity<LoginResponseDTO> login(@RequestBody @Valid AuthDTO data){
//        var auth = this.authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(data.email(), data.password()));
//        var token = tokenService.generateToken((User) auth.getPrincipal());
//        return ResponseEntity.ok(new LoginResponseDTO(token));
//    }
//
//    @PostMapping("/register")
//    public ResponseEntity<User> register(@RequestBody @Valid RegisterDTO data){
//        if (this.userRepository.findByEmail(data.email()) != null) return ResponseEntity.badRequest().build();
//        String encryptedPassword = new BCryptPasswordEncoder().encode(data.password());
//        this.userRepository.save(new User(data.username(), data.email(), encryptedPassword, data.phone(), data.birthDate(), data.role()));
//        return ResponseEntity.ok().build();
//    }
//
//}
