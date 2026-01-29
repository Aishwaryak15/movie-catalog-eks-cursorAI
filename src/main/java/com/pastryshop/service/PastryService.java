package com.pastryshop.service;

import com.pastryshop.model.Pastry;

import java.util.List;
import java.util.Optional;

public interface PastryService {
    
    // Create a new pastry
    Pastry createPastry(Pastry pastry);
    
    // Get all pastries
    List<Pastry> getAllPastries();
    
    // Get pastry by ID
    Optional<Pastry> getPastryById(Long id);
    
    // Update pastry
    Pastry updatePastry(Long id, Pastry pastry);
    
    // Delete pastry
    void deletePastry(Long id);
    
    // Get pastries by category
    List<Pastry> getPastriesByCategory(String category);
    
    // Get pastries in stock
    List<Pastry> getPastriesInStock();
    
    // Search pastries by name
    List<Pastry> searchPastriesByName(String name);
}
