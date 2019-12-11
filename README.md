# SportsMatch Frontend
## Introduction
SportsMatch encourages people to be more active by enabling them to find fellow racket sports players to organise a game with.

Search for fellow players by ability and distance.<br> With help from in app messaging and map of local sports centres, organise a date and time to play<br>Once you've played, input the final result and move up or down the ranks based on the ranking algorithm - FRED.

 This application serves as the frontend for our final project at Makers Academy. You can find the backend for our project [here](https://github.com/jessmar94/sportsmatch_api).

The team consisted of:
- [Sid Mason-Malik](https://github.com/smasonmalik)
- [Duncan Skinner](https://github.com/Duncan9099)
- [Jess Marais](https://github.com/jessmar94)
- [Pam Mezue](https://github.com/Mezela)
- [Dom Tunstill](https://github.com/domtunstill)
- [Vijay Kurian](https://github.com/kurianvijay)

Front-end Technologies used
- React.js
- HTML
- CSS
- jQuery
- Bootstrap
- CircleCI
- Cypress

The project has been deployed to [Heroku](https://sportsmatch-app.herokuapp.com/).

## Trello
https://trello.com/b/Twlp2CTz/sportsmatch

## Documented Learning
https://github.com/jessmar94/sportsmatch_api/wiki

## How to Install and Run in Development Mode
1. Clone this repository.
2. ```npm install``` to install dependencies
3. ```npm start``` to run
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
5. Make sure backend API server is running, following setup instructions avilable [here](https://github.com/jessmar94/sportsmatch_api).

## How to Run Tests
1. Run the following command in your terminal:
```
npx cypress open
```

### Check code quality

## User Stories
```bash
As a keen tennis player,
So I check out SportsMatch,
I want to be able to signup.
```
```bash
As a keen tennis player,
So I can keep my account secure,
I want to be able to login and logout.
```
```bash
As a keen tennis player,
So I can always keep my information up-to-date,
I want to be able to update my information on my profile.
```
```bash
As a keen tennis player,
So I can find a fellow racket-sport fan,
I want to be able to see other players on the platform.
```
```bash
As a advanced abiliy player,
So I can match with players of a similiar level,
I want to be able to filter players by ability.
```
```bash
As a player in north London,
So I can match with local players,
I want to be able to filter players by distance from my postcode.
```
```bash
As a keen tennis player,
So I can plan my week,
I want to be able to see all my games coming up.
```
```bash
As a keen tennis player,
So I can arrange a game of tennis with someone,
I want to be able to request a game with a player.
```
```bash
As a keen tennis player,
So I can accept a fellow tennis player game request,
I want to be able to respond to their game request.
```
```bash
As a keen tennis player,
So I can change the game date,
I want to be able to edit the date and time of organised games.
```
```bash
As a keen tennis player,
So I can keep track of my wins,
I want to be able to record who won the game I organised.
```
```bash
As a keen competitive tennis player,
So I know I am improving,
I want to be able my ability to change based on my results.
```
```bash
As a keen tennis player,
So I can feel proud of all my wins,
I want to be able to see the results of my games.
```
```bash
As a keen tennis and squash player,
So that I can also find squash players,
I want to be able to choose my sport from a few options.
```

## Additional Features
If we had more time, we would have looked to implement the following features:
- Ability to submit the score of the game.
- Ability to register with multiple sports, rather than picking just one.
- Ability for player to input their availability for other players to see - this would require creating an Availability table.
- Ability to register the result of a game as a draw.
- Opponent to confirm game result entered by organiser
- Add in a weather API to help players pick the best day to play.
