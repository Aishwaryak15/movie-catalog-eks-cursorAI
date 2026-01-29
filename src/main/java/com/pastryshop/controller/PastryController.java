package com.pastryshop.controller;

import com.pastryshop.model.Pastry;
import com.pastryshop.service.PastryService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pastries")
@CrossOrigin(origins = "http://localhost:3000")
public class PastryController {
    
    private final PastryService pastryService;
    
    @Autowired
    public PastryController(PastryService pastryService) {
        this.pastryService = pastryService;
    }
    
    // Create a new pastry
    @PostMapping
    public ResponseEntity<Pastry> createPastry(@Valid @RequestBody Pastry pastry) {
        Pastry createdPastry = pastryService.createPastry(pastry);
        return new ResponseEntity<>(createdPastry, HttpStatus.CREATED);
    }
    
    // Get all pastries
    @GetMapping
    public ResponseEntity<List<Pastry>> getAllPastries() {
        List<Pastry> pastries = pastryService.getAllPastries();
        return new ResponseEntity<>(pastries, HttpStatus.OK);
    }
    
    // Get pastry by ID
    @GetMapping("/{id}")
    public ResponseEntity<Pastry> getPastryById(@PathVariable Long id) {
        return pastryService.getPastryById(id)
                .map(pastry -> new ResponseEntity<>(pastry, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    
    // Update pastry
    @PutMapping("/{id}")
    public ResponseEntity<Pastry> updatePastry(
            @PathVariable Long id, 
            @Valid @RequestBody Pastry pastry) {
        try {
            Pastry updatedPastry = pastryService.updatePastry(id, pastry);
            return new ResponseEntity<>(updatedPastry, HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    
    // Delete pastry
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePastry(@PathVariable Long id) {
        try {
            pastryService.deletePastry(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    
    // Get pastries by category
    @GetMapping("/category/{category}")
    public ResponseEntity<List<Pastry>> getPastriesByCategory(@PathVariable String category) {
        List<Pastry> pastries = pastryService.getPastriesByCategory(category);
        return new ResponseEntity<>(pastries, HttpStatus.OK);
    }
    
    // Get pastries in stock
    @GetMapping("/in-stock")
    public ResponseEntity<List<Pastry>> getPastriesInStock() {
        List<Pastry> pastries = pastryService.getPastriesInStock();
        return new ResponseEntity<>(pastries, HttpStatus.OK);
    }
    
    // Search pastries by name
    @GetMapping("/search")
    public ResponseEntity<List<Pastry>> searchPastriesByName(@RequestParam String name) {
        List<Pastry> pastries = pastryService.searchPastriesByName(name);
        return new ResponseEntity<>(pastries, HttpStatus.OK);
    }
}
