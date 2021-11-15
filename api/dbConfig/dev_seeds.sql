CREATE TABLE Leaderboard (
    id SERIAL PRIMARY KEY,
    username varchar(255) NOT NULL,
    score int NOT NULL
);


INSERT INTO Leaderboard (username, score)
VALUES 
('bob', 5),
('jane', 4),
('damn', 2),
('einstein', 1);