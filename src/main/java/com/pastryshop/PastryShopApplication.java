package com.pastryshop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class PastryShopApplication {
    
    public static void main(String[] args) {
        SpringApplication.run(PastryShopApplication.class, args);
        System.out.println("Pastry Shop Application is running on http://localhost:8080");
    }
}
