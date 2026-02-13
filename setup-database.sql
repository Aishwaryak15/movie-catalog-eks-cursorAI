-- Database setup script for Movie Catalog Application
-- Run this script in MySQL to set up the database

-- Create the database
CREATE DATABASE IF NOT EXISTS movie_catalog_db;

-- Use the database
USE movie_catalog_db;

-- Show confirmation
SELECT 'Database movie_catalog_db created successfully!' AS Status;

-- Optional: Insert some sample data (uncomment to use)
/*
INSERT INTO movies (name, description, ticket_price, image_url, genre, in_stock, created_at, updated_at) VALUES
('Inception', 'A thief who steals corporate secrets through dream-sharing technology', 12.99, 'https://via.placeholder.com/300x200/667eea/ffffff?text=Inception', 'Sci-Fi', true, NOW(), NOW()),
('The Dark Knight', 'Batman faces the Joker in Gotham City', 11.50, 'https://via.placeholder.com/300x200/667eea/ffffff?text=Dark+Knight', 'Action', true, NOW(), NOW()),
('Interstellar', 'A team of explorers travel through a wormhole in space', 13.00, 'https://via.placeholder.com/300x200/667eea/ffffff?text=Interstellar', 'Sci-Fi', true, NOW(), NOW());
*/
