-- Database setup script for Pastry Shop Application
-- Run this script in MySQL to set up the database

-- Create the database
CREATE DATABASE IF NOT EXISTS pastry_shop_db;

-- Use the database
USE pastry_shop_db;

-- Show confirmation
SELECT 'Database pastry_shop_db created successfully!' AS Status;

-- Optional: Insert some sample data (uncomment to use)
/*
INSERT INTO pastries (name, description, price, image_url, category, in_stock, created_at, updated_at) VALUES
('Chocolate Cake', 'Rich and moist chocolate cake with chocolate frosting', 25.99, 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400', 'Cake', true, NOW(), NOW()),
('Croissant', 'Buttery, flaky French pastry perfect for breakfast', 3.50, 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400', 'Croissant', true, NOW(), NOW()),
('Macaron', 'Delicate French meringue cookies with various flavors', 2.99, 'https://images.unsplash.com/photo-1558312657-b2dead0fb77f?w=400', 'Macaron', true, NOW(), NOW()),
('Apple Pie', 'Classic American apple pie with cinnamon', 18.99, 'https://images.unsplash.com/photo-1535920527002-b35e96722eb9?w=400', 'Pie', true, NOW(), NOW()),
('Blueberry Donut', 'Soft glazed donut with blueberry filling', 4.50, 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400', 'Donut', false, NOW(), NOW());
*/
