package com.example.demo.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;


@AllArgsConstructor
@Service
public class LoginSerivce {

    public String findid_password(String email, String password){
        System.out.println("hi servise data email" + email);
        System.out.println("hi servise data password" + password);

        return "";
    }


}
