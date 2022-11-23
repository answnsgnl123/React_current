package com.example.demo.controller;

import com.example.demo.dto.LoginForm;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

    @GetMapping("/api/login")
    public String newLoginForm(){
        return "새로만든 로그인폼";
    }

    @PostMapping("/api/login")
    public String createLoginForm(@RequestBody LoginForm form){
        System.out.println(form.toString());
        System.out.println(form.getEmail());
        return "";
    }
}
