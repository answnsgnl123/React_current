package com.example.demo.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class LoginForm {

    @JsonProperty(value = "password")
    private String password;
    @JsonProperty(value = "email")
    private String email;

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "LoginForm{" +
                "password='" + password + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
