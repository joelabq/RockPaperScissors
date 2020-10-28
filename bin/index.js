#!/usr/bin/env node
var argv = require('yargs/yargs')(process.argv.slice(2)).argv;

moveTypes = {
    'rock' : 'scissors',
    'paper' : 'rock',
    'scissors' : 'paper'
}

class Move  {
    constructor(){}

    whoWon(computerMove,userMove){
        
        if(computerMove === userMove){
            return "~TIE!~"
        }
        
        else if(moveTypes[userMove] === computerMove)  {
            return "~Player Wins.~"
        }
        
        else if(moveTypes[computerMove] === userMove) { 
            return "~Computer Wins.~"
            
        }
       
    }
    
    generateComputerMove(){
        
            switch(Math.floor(Math.random() * (4 - 1) ) + 1) {
            
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
        console.log(`Player plays ${argv.move}!\nComputer plays ${this.computersMove}!`)
        
        console.log(this.game.whoWon(this.computersMove,argv.move))
           
        }
    }

if (moveTypes[argv.move]){
    console.log("Playing a game of Roshambo against the computer.")   
    var newGame = new Game(argv.move)
    
 }
else {
               
   console.log("Please play the game right....Moves: "+Object.keys(moveTypes))
   return;
}