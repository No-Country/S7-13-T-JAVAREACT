package com.portacodes.model.service;

import com.portacodes.model.entity.User;
import com.portacodes.model.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EmailVerificationServiceImpl implements EmailVerificationService {

    @Autowired
    private UserRepository repository;

    @Override
    public boolean emailExists(String email) {
        Optional<User> userOptional = repository.findByEmail(email);
        return userOptional.isPresent();
    }
}

