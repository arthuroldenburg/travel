package com.travels.travels.controllers;

import com.travels.travels.domain.travel.Travel;
import com.travels.travels.repositories.TravelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("/travels")
public class TravelController {
    @Autowired
    private TravelRepository tr;

    @GetMapping
    private ResponseEntity<List<Travel>> getAll(){
        return ResponseEntity.ok().body(this.tr.findAll());
    }
}
