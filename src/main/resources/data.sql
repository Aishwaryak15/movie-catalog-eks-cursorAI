INSERT INTO movies (name, description, ticket_price, image_url, genre, in_stock, created_at, updated_at)
SELECT * FROM (
  SELECT 'Inception' AS name, 'A thief who steals corporate secrets through dream-sharing technology' AS description, 12.99 AS ticket_price, 'https://via.placeholder.com/300x200/667eea/ffffff?text=Inception' AS image_url, 'Sci-Fi' AS genre, true AS in_stock, NOW() AS created_at, NOW() AS updated_at
  UNION ALL SELECT 'The Dark Knight', 'Batman faces the Joker in Gotham City', 11.50, 'https://via.placeholder.com/300x200/667eea/ffffff?text=Dark+Knight', 'Action', true, NOW(), NOW()
  UNION ALL SELECT 'Interstellar', 'A team of explorers travel through a wormhole in space', 13.00, 'https://via.placeholder.com/300x200/667eea/ffffff?text=Interstellar', 'Sci-Fi', true, NOW(), NOW()
) t WHERE 0 = (SELECT cnt FROM (SELECT COUNT(*) AS cnt FROM movies) AS c);
