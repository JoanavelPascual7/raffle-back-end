-- Raffles Table
INSERT INTO raffles (name, secret_token) VALUES ('Spring Raffle', 'spring2024');
INSERT INTO raffles (name, secret_token) VALUES ('Summer Raffle', 'summer2024');

-- Participants Table
INSERT INTO participants (firstname, lastname, email, phone) VALUES 
('John', 'Peterson', 'john.peterson@pursuit.com', '+1 (212) 456-7890'),
('Jane', 'Smith', 'jane.smith@pursuit.com', '+1 (212) 567-8901'),
('Joanavel', 'Pascual', 'joanavel.pascual@pursuit.com', '+1 (212) 678-9012'),
('Jalen', 'Brunson', 'jalen.bruson@nyk.org', '+1 (212) 222-2000');

-- Raffle Participants Join Table
INSERT INTO raffle_participants (raffle_id, participant_id)
VALUES 
(1, 1), -- John Peterson participates in Spring Raffle
(1, 2), -- Jane Smith participates in Spring Raffle
(2, 3), -- Joanavel Pascual participates in Summer Raffle
(2, 4)  -- Jalen Brunson participates in Summer Raffle
ON CONFLICT DO NOTHING; 
