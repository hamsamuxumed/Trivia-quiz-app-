DROP TABLE IF EXISTS Leaderboard;

CREATE TABLE Leaderboard (
    id SERIAL PRIMARY KEY,
    user varchar(255) NOT NULL,
    score int NOT NULL
);