package com.example.demo.service;

import com.example.demo.entity.Word;
import com.example.demo.repository.WordRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class WordService {

    private WordRepository wordRepository;

    public List<Word> getWordList(){
        return  wordRepository.findAll();
    }
}
