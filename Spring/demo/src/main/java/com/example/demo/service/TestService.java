package com.example.demo.service;

import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class TestService {

    private UserRepository userRepository;

    public List<User> getUserList() {
        return userRepository.findAll();
    }

    public String getUser(Long userId) {


        return "{\n" +
                "\t\t\"id\": 1,\n" +
                "\t\t\"name\": \"김길동\",\n" +
                "\t\t\"age\": 16,\n" +
                "\t\t\"학교\": \"길동중\"\n" +
                "\t}";

    }
}