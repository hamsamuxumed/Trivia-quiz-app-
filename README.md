# LAP 3 Trivia Game
An online trivia game using web sockets. A host can create a game and select question difficulty and the number of questions required. 

## Installation and Usage

### Installation
- Clone or download this repo.
- Navigate to the repo folder and run `npm install` in the terminal.
- To start the dev server, in the repo root folder run `bash _scripts/startDev.sh` from the terminal.
- To teardown the dev server, run `bash _scripts/teardown.sh` also from the repo root folder.
- When the dev server is running, navigate to **localhost:8080** to use the website.

### Usage
- Visit: **netlify-link-here** to play the game.
- The host can click on the 'create' button on the homepage to start a new game room.
- The host will then be able to see a question type selector form and a room code that can be shared to other players wishing to join the game session.
- Once the question type has been selected, the host can then start the game.
- Players must select the right answer to recieve a point.
- The session leaderboard is displayed at the end of the game.
- A leaderboard of the highest scoring players of all time is displayed on the homepage and at the end of the game.

## Bugs
- Currently, a game can start with just one player. Validation to check the number of players in the room may need to be added to prevent this.

## Wins and Challenges

### Wins
- A successful implementation of sockets to enable multiple players to join an open game room of their choosing (provided they have the code).

- Questions are retrieved and displayed once the game starts, along with incorrect answers in a multiple choice format.

### Challenges
- Creating separate page views for the host and the players.
- Arranging correct and incorrect answers into a random order and displaying them on the page.

## Future Features
- Mobile responsivity.
- Ability to share your scores on social media.