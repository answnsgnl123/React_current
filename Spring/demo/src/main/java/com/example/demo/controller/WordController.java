package com.example.demo.controller;

import com.example.demo.entity.Word;
import com.example.demo.service.WordService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
public class WordController {

    private final WordService wordService;

    @GetMapping(value = "/data/wordlist")
    public List<Word> getWordList(){
        return wordService.getWordList();
    }

}
