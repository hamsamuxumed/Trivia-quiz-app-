# LAP 3 Trivia Game
An online multiplayer trivia game using web sockets. A host can create a game after selecting question difficulty, category and quantity. The room code is then shared to other players wishing to join.

![image](https://user-images.githubusercontent.com/37987393/142598778-70cc7ef8-4605-4652-ae02-0ff2100d253b.png)

## Installation and Usage

### Installation
- Clone or download this repo.
- Navigate to the repo folder and run `npm install` in the terminal.
- To start the dev server, in the repo root folder run `bash _scripts/startDev.sh` from the terminal.
- To teardown the dev server, run `bash _scripts/teardown.sh` also from the repo root folder.
- Run `npm run coverage` to launch the client test suite and coverage report.
- Run `bash _scripts/startTest.sh` to launch the server test suite and coverage report.
- When the dev server is running, navigate to **localhost:8080** to use the website.

### Usage
- Visit: **https://quiz-your-mind.netlify.app/** to play the game.
- The host can click on the 'create' button on the homepage to start a new game room.
- The host will then be able to see a question type selector form and a room code that can be shared to other players wishing to join the game session.
- Once the question type has been selected, the host can then start the game.
- Players must select the right answer to recieve a point.
- The session leaderboard is displayed at the end of the game.
- A leaderboard of the highest scoring players of all time is displayed on the homepage and at the end of the game.

## Bugs
- Currently, a game can start with just one player. Validation to check the number of players in the room may need to be added to prevent this.
- Footer does not display at the bottom of the page.

## Wins and Challenges

### Wins
- A successful implementation of sockets to enable multiple players to join an open game room of their choosing (provided they have the code).
- Questions are retrieved and displayed once the game starts, along with correct and incorrect answers in a multiple choice format.
- All-time leaderboard displays the highest scoring game players.
- Room leaderboard displays the highest scoring players in the room.
- Lighthouse report shows 100% for performance, accessibility and best practices. SEO is 90%.

### Challenges
- Creating separate page views for the host and the players.
- Arranging correct and incorrect answers into a random order and displaying them on the page.
- Testing React component functions.

## Future Features
- Mobile responsivity.
- Ability to share your scores on social media.
- Dark/Light mode
- Display live leaderboard where the room scores update as the game progresses (Currently only diplays at the end).
- Live chat room

## MoSCoW
https://docs.google.com/document/d/11ZLgD03dHTsrZ-RJAfKGL78yxCHSRZcdfQWUFttY3p8/edit

## Presentation
https://docs.google.com/presentation/d/1pQfd3woUEk4q-1_Xl1vHfJxoTQjpIXi80VpIEE9xjtw/edit#slide=id.p