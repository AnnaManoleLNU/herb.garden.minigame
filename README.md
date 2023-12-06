# Herb Garden Minigame
A1 part 2 in software quality course LNU 2023. Focuses on TDD with TS.

## How to run
After cloning the repo, run `npm install` to install dependencies. Then you can run:
- tests: `npm run test`
- the game: `npm start`

## Technologies
- Language of implementation: TypeScript
- Testing framework: Jest
- Mocking: jest mock
- Coverage: jest coverage
- Project of choice: Herb Garden Minigame(see below)

## Herb garden mini explanation
The game starts with a garden which spawns 6 herbs (2 thyme, 2 rosemary and 2 basil). Watering the herbs to their specified watering needs will give them max quality. If you water them too much or too little, they will not reach max quality. The game ends when the player has harvested all herbs. 

The goal is to get the highest score possible. At the moment, the score is calculated by multiplying the quality of the herbs with the amount of herbs (6). Thus the max score at the moment is 6 x 3 = 18.

However, the game is not finished. The idea is to add more features to the game, mainly:
- The time aspect, which will enable harvesting during a certain time frame.
- The harvesting mechanic, which will also affect the score (optimal harvesting time in the same way 6 x 3 = 18). In this way the max quality of a herb should be 6, not 3.
- Input from an actual user, which will enable the game to be played by a user.
