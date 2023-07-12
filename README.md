<h1 align="center">STRATEGY GAME</h1>
<h2 align="center"><a href="https://strategy-game.fun">https://strategy-game.fun</a></h2><br/><br/>
<img src="./src/media/for readme/game.webp" width="100%" /><br/><br/>

# How it was

The idea to create this game was born on the wave of the confluence of two interests. Initially, during the lockdown due to covid-19, my friends and I constantly played Monopoly and often added our own rules to the game to make it more fun. At the same time, the idea was born to create ьн own board game, which was never realized. When I started learning web development, I was faced with the task of working out the skills of the Redux Toolkit. After thinking a little, I realized that such a game must manage a huge number of states and the logic of the game itself is not easy. It was a challenge. And so, two ideas merged into one and this game was created, completely from scratch, without using even a line of someone else's code. 

# About the development of this project

Since I'm only just getting into the backend part of web development, you can't play it online, only from one device and only from the desktop. In addition, despite the fact that its a rather large project, you can hardly find duplicate code. But nevertheless, I planned to implement the multiplayer feature somewhere in the middle or towards the end of development, which turned out to be a big mistake. Now I need to spend about a week to fix it, but I have other tasks ahead of me :) In general, the game is designed for two players.<br/><br/>
As for the game engine, there is something to brag about. An application controls about 300 states, and as a rule, changing one state leads to changing several more. 79 rudusers in three slices are responsible for this.<br/><br/>
As I developed, I learned a lot of new things for myself, firstly it's Redux Persist, so you don't have to worry about accidentally reloading the page or closing the tab, all states are saved in local storage. Secondly, I tried on sound design and learned how to control sounds in the application. At first I wanted to use a special library, but I realized that the standard tools are more than enough. There were also other new knowledge gained as a result of development. And how many errors I got and how much time I spent on solving them, you can only imagine, it was a wonderful experience. But no less important is that I gained experience and learned mistakes from the very preparation for the project and its design.<br/><br/>
Great, let's start reviewing the game itself, are you interested? :)

# Main Menu

When you've just downloaded the app, you'll see a blurred background and a "click to start" button. This is done so that when you get to the main menu by clicking on this button, the start music can play, because as you know, all browsers do not allow it to play automatically until the user performs some action on the site.<br/><br/>
So, we get to the main menu, where we can: start a new game, read the rules and go to the game settings. The "Return to Game" button will appear if you already have an active game. Let's look at the rules...

<img src="./src/media/for readme/main.webp" width="100%" /><br/><br/>

# Roules

Here you can scroll down and read all the rules of the game. More interesting "Settings" tab.

<img src="./src/media/for readme/roules.webp" width="100%" /><br/><br/>

# Settings

The game is very flexible in settings. Of course, we can choose the names for the players, turn off the music of the main menu, turn off the music in the game itself and set whose move will be the first by clicking on the "set up" button. And you can also set the initial amount of money, stocks, jail release cards, the cost of fields, the cost of buying houses, the salary of employees, the cost of repairing fields, and much more. Of course, in all paragraphs there are restrictions on the minimum and maximum values, so as not to bring the rules to the point of absurdity. You can also reset the settings to the original, but you can not change the settings after the start of the game, except for the music settings. Now we can start the game...

<img src="./src/media/for readme/settings.webp" width="100%" /><br/><br/>

# Game

Finally, we have the main screen of the game. In the center are the main controls, and on the sides are all the necessary information about the state of affairs of each player. The information of the active player is highlighted in white. Each player can in turn: sell stocks, take out a loan, use a prison release card, if any, buy more houses or hire employees. Soon we will look at everything in more detail, but in the meantime, you can still add that the map has 4 prison fields, 4 roulette fields, 4 neutral fields and 4 commercial fields, all other fields are fields available for purchase and development.

<img src="./src/media/for readme/game.webp" width="100%" /><br/><br/>

# Buying field

If you land on an empty field and you have enough money to buy it, you will be prompted to buy it. Since this is the most frequent operation after the roll of the dice, the purchase was also implemented using the "y" button or the refusal to purchase "n". After the purchase, the field is painted in the color of the player and the first house appears on it. Approximately the same thing happens with the purchase of a commercial field, only employees appear there. You will see an example in the next slides.

<img src="./src/media/for readme/buyfield.webp" width="100%" />
<img src="./src/media/for readme/ownedField.webp" width="100%" /><br/><br/>

# Sell stocks

You must be careful with this option. Because stocks are what bring you income every lap you complete. The more stocks you have, the better, and vice versa, you can be left without passive income at all.

<img src="./src/media/for readme/sellStocks.webp" width="100%" /><br/><br/>

# Take a credit

<img src="./src/media/for readme/credit.webp" width="100%" /><br/><br/>

# Jail

<img src="./src/media/for readme/jail.webp" width="100%" /><br/><br/>

# Roulette

Roulette gives you many options, both good and bad. For example, only here you can get the opportunity to buy more stocks or get a release card from prison or get to repair all your fields.

<img src="./src/media/for readme/roulette.webp" width="100%" /><br/><br/>

# Fight

In any, if the players are on the same field, a fight breaks out between them, they throw the dice and the one with the highest number wins. The loser pays the amount set in the settings.

<img src="./src/media/for readme/fight.webp" width="100%" /><br/><br/>

# Asset Management

Last but not least is the asset management window. Here we can buy, sell, hire and fire employees.

<img src="./src/media/for readme/assetsManagement.webp" width="100%" /><br/><br/>


# Conclusion

In my opinion, the game turned out to be quite entertaining, especially considering the animations and sound effects, just try it ;)  Of course, I know how it could be made more convenient, informative and smart, but it seems to me that I need to move on. When I learn the backend, I already have an idea for a future project, but maybe I will finish this game so that it can be played online. Thank you for reading to the end and good luck!













# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
