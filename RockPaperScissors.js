/*
Game of Rock, Paper, Scissors - Take in a argument "move" from the command line. Apply that to the play. The play has a move in it from the player and the computer. The play for the computer
is based on a randomly generated number between 1 and 3 to select Rock, Paper, Scissors respectively

The moveType class contains a constructor thatcreates the moves and what other move it beats. The user moveType class will be added to the move class to be paired up with a
randomly generated move for the computer
The Play class has the evalMove() function to see who wins... Rock beats scissors, Scissors beats paper, and Paper beats rock


*/


var argv = require('yargs/yargs')(process.argv.slice(2)).argv;

moveTypes = {
    'rock' : 'scissors',
    'paper' : 'rock',
    'scissors' : 'paper'
}


//console.log("args: ",argv.move)

class Move  {
    constructor(){}

    whoWon(computerMove,userMove){
        
        //console.log("Computer's move "+computerMove+" beats "+userMove )
        
        if(computerMove === userMove){
            console.log("~TIE!~")
        }
        
        else if(moveTypes[userMove] !== computerMove)  {
            console.log("~Computer Wins.~")
        }
        
        else { 
            console.log("~Player Wins.~")
        }
      
     
        
        
    }
     
    
    generateComputerMove(){
        
            switch(Math.floor(Math.random() * (3 - 1) ) + 1) {
            
                case 1: return 'rock'
                case 2: return 'paper'
                case 3: return 'scissor'
          }
        }
    
    
}

class Game  {
    
    constructor(userMove){
      
        console.log("Playing a game of Roshambo against the computer.")
        this.game = new Move()
        this.computersMove = this.game.generateComputerMove()
        console.log(`Player plays ${argv.move}!\nComputer plays ${this.computersMove}!`)
        
        this.game.whoWon(this.computersMove,argv.move)
           
    }
}

if (moveTypes[argv.move]){
          
    var game = new Game(argv.move)
    
 }
else {
               
   console.log("Please play the game right....Moves: "+Object.keys(moveTypes))
   return;
}



//console.log(game.computerMove())