-- step 1 connect to the db
\c bookmarks_dev
-- step 2 add values to our table
INSERT INTO bookmarks (name, url, isFavorite, category) VALUES 
('MDN', 'https://developer.mozilla.org/en-US/', true, 'educational'),
('Apartment Therapy', 'https://www.apartmenttherapy.com', true, 'inspirational'),
('DMV', 'https://dmv.ny.gov', false, 'adulting')