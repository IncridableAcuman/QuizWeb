package com.quiz.server.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.quiz.server.enums.Role;
import com.quiz.server.model.User;
import com.quiz.server.repository.AuthRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {
    private final PasswordEncoder passwordEncoder;
    private final AuthRepository authRepository;

    public User findByEmail(String email){
        return authRepository.findByEmail(email).orElseThrow(()->new RuntimeException("User not found"));
    }
    public User findByUsername(String username){
        return authRepository.findByUsername(username).orElseThrow(()->new RuntimeException("User not found"));
    }
    public void existUser(String email){
        if(authRepository.findByEmail(email).isPresent()){
            throw new RuntimeException("User already exist");
        }
    }
    // public User findOrCreateOAuthUser(String username, String email) {
    //     return authRepository.findByEmail(email).orElseGet(() -> {
    //         User user = new User();
    //         user.setUsername(username);
    //         user.setEmail(email);
    //         user.setPassword(""); // Parol OAuth orqali bo‘lgani uchun shart emas
    //         user.setRole(Role.student);
    //         return authRepository.save(user);
    //     });
    // }
    
    public User updatePasswoUser(User user,String password){
        user.setPassword(passwordEncoder.encode(password));
        return authRepository.save(user);
    }
    public User creatUser(String username,String email,String password){
        User user=new User();
        user.setUsername(username);
        user.setEmail(email);
        user.setPassword(passwordEncoder.encode(password));
        user.setRole(Role.student);
        return authRepository.save(user);
    }
    public void matchesPassword(String password,String userPassword){
        if(!passwordEncoder.matches(password, userPassword)){
            throw new RuntimeException("Invalid Password ");
        }
    }
}
