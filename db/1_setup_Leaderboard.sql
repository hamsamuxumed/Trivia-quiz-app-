DROP TABLE IF EXISTS Leaderboard;

CREATE TABLE Leaderboard (
    id SERIAL PRIMARY KEY,
    username varchar(255) NOT NULL,
    score int NOT NULL,
    room varchar NOT NULL,
    socket_id varchar(255) NOT NULL
);