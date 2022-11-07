package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FirstController {

    public String a;
    public String b;

    @GetMapping("/api/hello")
    public String test() {
        return "Hello, wosss";
    }
}