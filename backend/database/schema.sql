CREATE TABLE hcp_interactions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    hcp_name VARCHAR(255),
    interaction_type VARCHAR(100),
    date DATE,
    time TIME,
    attendees TEXT,
    topics TEXT,
    sentiment VARCHAR(50),
    outcomes TEXT,
    followups TEXT
);
