package com.pastryshop.service;

import com.pastryshop.model.Pastry;
import com.pastryshop.repository.PastryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PastryServiceImpl implements PastryService {
    
    private final PastryRepository pastryRepository;
    
    @Autowired
    public PastryServiceImpl(PastryRepository pastryRepository) {
        this.pastryRepository = pastryRepository;
    }
    
    @Override
    public Pastry createPastry(Pastry pastry) {
        return pastryRepository.save(pastry);
    }
    
    @Override
    public List<Pastry> getAllPastries() {
        return pastryRepository.findAll();
    }
    
    @Override
    public Optional<Pastry> getPastryById(Long id) {
        return pastryRepository.findById(id);
    }
    
    @Override
    public Pastry updatePastry(Long id, Pastry pastryDetails) {
        Pastry pastry = pastryRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Pastry not found with id: " + id));
        
        pastry.setName(pastryDetails.getName());
        pastry.setDescription(pastryDetails.getDescription());
        pastry.setPrice(pastryDetails.getPrice());
        pastry.setImageUrl(pastryDetails.getImageUrl());
        pastry.setCategory(pastryDetails.getCategory());
        pastry.setInStock(pastryDetails.getInStock());
        
        return pastryRepository.save(pastry);
    }
    
    @Override
    public void deletePastry(Long id) {
        Pastry pastry = pastryRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Pastry not found with id: " + id));
        pastryRepository.delete(pastry);
    }
    
    @Override
    public List<Pastry> getPastriesByCategory(String category) {
        return pastryRepository.findByCategory(category);
    }
    
    @Override
    public List<Pastry> getPastriesInStock() {
        return pastryRepository.findByInStock(true);
    }
    
    @Override
    public List<Pastry> searchPastriesByName(String name) {
        return pastryRepository.findByNameContainingIgnoreCase(name);
    }
}
