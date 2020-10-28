#!/usr/bin/env node
var argv = require('yargs/yargs')(process.argv.slice(2)).argv;

moveTypes = { //Key is move, value is what beats the move
    'rock' : 'scissors',
    'paper' : 'rock',
    'scissors' : 'paper'
}

class Move  {
    constructor(){}

    whoWon(computerMove,userMove){
        
        if(computerMove === userMove){ //Both moves a tie? If so.. TIE
            return "~TIE!~"
        }
        
       return (moveTypes[userMove] === computerMove) ? "~Player Wins.~" :  "~Computer Wins.~" //Check to see if users move beats computer move the declare the winner
       
    }
    
    generateComputerMove(){ //This returns what the computers move is...
        
            switch(Math.floor(Math.random() * 3) + 1) { //Floor rounds down, 0.385475 would be zero, so multiply by 3 (the max) then add 1 to shift from starter of zero to one
            
                case 1: return 'rock'
                case 2: return 'paper'
                case 3: return 'scissors'
          }
        }
    }

class Game  {
    
    constructor(userMove){
      
        this.game = new Move()
        this.computersMove = this.game.generateComputerMove()
        console.log(`Player plays ${userMove}!\nComputer plays ${this.computersMove}!`) 
        
        console.log(this.game.whoWon(this.computersMove,userMove)) 
           
        }
    }

    const userMove = argv.move.toLowerCase(); //Normalize input

if (moveTypes[userMove]){ //Check for 
    console.log("Playing a game of Roshambo against the computer.")   
    var newGame = new Game(userMove)
    
 }
else {
               
   console.log("Please play the game right....Moves: "+Object.keys(moveTypes))
   return;
}