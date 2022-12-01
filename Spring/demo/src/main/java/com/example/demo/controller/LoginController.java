package com.example.demo.controller;

import com.example.demo.dto.LoginForm;
import com.example.demo.service.LoginSerivce;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class LoginController {

    private final LoginSerivce loginSerivce;

    @GetMapping("/api/login")
    public String newLoginForm(){
        return "새로만든 로그인폼";
    }

    @PostMapping("/api/login")
    public String createLoginForm(LoginForm form){
        System.out.println(form.toString());
        loginSerivce.findid_password(form.getEmail(),form.getPassword());
        return "";
    }
}
