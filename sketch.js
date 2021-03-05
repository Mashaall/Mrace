var database
var gameState = 0
var player,game,form,playerCount
var players, distance = 0
var car1,car2,car3,car4,cars

function setup(){
    createCanvas(displayWidth-20,displayHeight-130);
    //creating database
    database = firebase.database()
    game = new Game()
    game.getState()
    game.start()
}

function draw(){
   if(playerCount===4){
       game.updateState(1)
   }
   if(gameState===1){
       clear()
       game.play()
   }
}

