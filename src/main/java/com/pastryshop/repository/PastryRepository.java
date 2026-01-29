package com.pastryshop.repository;

import com.pastryshop.model.Pastry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PastryRepository extends JpaRepository<Pastry, Long> {
    
    // Find pastries by category
    List<Pastry> findByCategory(String category);
    
    // Find pastries that are in stock
    List<Pastry> findByInStock(Boolean inStock);
    
    // Find pastries by name containing (case-insensitive search)
    List<Pastry> findByNameContainingIgnoreCase(String name);
}
