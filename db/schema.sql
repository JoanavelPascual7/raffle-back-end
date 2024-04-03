
CREATE TABLE raffles (
    id SERIAL PRIMARY KEY,  -- Use SERIAL instead of AUTO_INCREMENT for PostgreSQL
    name VARCHAR(255) NOT NULL,
    secret_token VARCHAR(255) NOT NULL
);

CREATE TABLE participants (
    id SERIAL PRIMARY KEY,  -- Use SERIAL instead of AUTO_INCREMENT for PostgreSQL
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20)
);

CREATE TABLE raffle_participants (
    raffle_id INT,
    participant_id INT,
    FOREIGN KEY (raffle_id) REFERENCES raffles(id),
    FOREIGN KEY (participant_id) REFERENCES participants(id),
    PRIMARY KEY (raffle_id, participant_id)
);
