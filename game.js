/**************************************************/
/* GAMEPLAY
/**************************************************/
function gameplay() {
  collision();
  statusBar();
  myKeyReleased();
  shadows();
  
  loadbgY = 0;
  
  for (var i = 0; i<activePlayers; i++) { 

    activePlayFn(activePlayers);

      if (isJumping[i]){
          myPlayers[i].jumpDisplay();
      }else{
          myPlayers[i].display();
      }
  }

  for (var i = 0; i<activePlayers; i++) {
    myEnemies[i].display();
    myEnemies[i].move();
  }

  if ( lives==0 ) { gamemode = "endLevel"; }
    
    score++;
    showScore();
}

function showScore(){    
    context.fillStyle="rgba(215,0,0,0.65)";
    context.font = "13px Arial Black";
    context.fillText("SCORE: "+parseInt(score/4),17,50);
}

//sets x positions of players
//x is int
function activePlayFn(x) {
  for (var j=0; j<x; j++) {
    if (x==5) { myPlayers[j].xPos = 145+j*42; } 
    else { myPlayers[j].xPos = 182+j*50; }
  }
}


/**************************************************/
/* MECHANICS
/**************************************************/
function reset() {
  lives = 3;
    score=0;
  for (var i=0; i<activePlayers; i++) {
    myEnemies[i].xPos = parseInt(Math.random()*(1000-550)+550);
      myEnemies[i].hasHit=false;
      myPlayers[i].currentImg=myPlayers[i].playerImg[myPlayers[i].id];
      isJumping[i]=false;
  }
  timerStarted = 0; gameOverTimerStarted = 0;
  activePlayFn(activePlayers);
}

var jumpDelay=0; //should be 4 when the thing takes off
var jumpDelayTarget=4;

function myKeyReleased() {
  for (var i=0; i<activePlayers; i++) {
    if (isJumping[i] && jumpDelay>jumpDelayTarget){
      //is at top, needs to go down
      if ( jumpDirection[i]==0 && currentHeight[i] < currentY[i]-jumpHeight ) {
        jumpDirection[i] = 1;
      }
        //is at the bottom, needs to stop
      if (jumpDirection[i]==1 && myPlayers[i].yPos >= startY)
      {  
          isJumping[i]=false;
          jumpDirection[i]=0;
          jumpDelay=0;
      }

      //is going up
      if ( jumpDirection[i] == 0 ) { 
        currentHeight[i]-=2;
      } 

      //is going down
      if ( jumpDirection[i] == 1) { 
        currentHeight[i]+=2;
      }

      myPlayers[i].yPos = currentHeight[i];
    }else if (isJumping[i] && jumpDelay<=jumpDelayTarget)
    {   jumpDelay++;
    }
  }
}

function collision() {
  for (var i=0; i<activePlayers; i++) {
      if(inRange(myEnemies[i].xPos,(myPlayers[i].xPos+0.75*myPlayers[i].currentImg.width)) && 
         myPlayers[i].yPos >= startY-3 &&
         !myEnemies[i].hasHit){
          lives--;
          myEnemies[i].hasHit=true;
          myPlayers[i].collision();
      }
  }
}

//checks if object is in target range
function inRange(object, target){
    if (object < target-2 && object > target-7)
        return true;
    else
        return false;
}

function shadows() {
  if (activePlayers==3) { 
//    image(shadowsImg, 180, 202);
        context.drawImage(allimgs["shadowsImg"],180,200);
  } else { 
//    image(shadowsImg5, 150, 202);
        context.drawImage(allimgs["shadowsImg5"],150,200);
  }
}
