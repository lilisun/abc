/**************************************************/
/* TITLE SCREEN
/**************************************************/
function title() {
  activePlayers = 3; 
  activePlayFn(activePlayers);
    for (var i=0; i<activePlayers; i++)
    {
        myPlayers[i].yPos = startY;
    }
//  image(shadowsImg, 180, 202);
    context.drawImage(allimgs["shadowsImg"],180,202);

  if (titleY > 50) { titleTest = 0; } //test if y needs to go down
  else if (titleY < 40) { titleTest = 1; } //test if y needs to go up
  if (titleTest == 1) { titleY += .3; } //increase y
  else if (titleTest == 0) { titleY -= .3; } //decrease y

//  image(pressToStartImg, 150, titleY);
    context.drawImage(allimgs["pressToStartImg"],150,titleY);

  for (var i = 0; i < 3; i++) { 
      myPlayers[i].display();
  }
    
  myKeyReleased();
  
  levelbgY = -500;
}

/**************************************************/
/* LEVEL SELECT
/**************************************************/
var lvlSelectFrame=1; //current level select frame
var lvlSelectCurrentFrame=0; //current game-lvl frame
function levelSelect() {
  if(levelbgY < -25){
    levelbgY+=9;
  }
//  image(levelSelectImg, 0, levelbgY);
    context.drawImage(allimgs["levelSelectImg"+lvlSelectFrame],0,levelbgY);
    
    lvlSelectCurrentFrame++;
    if (lvlSelectCurrentFrame>=30)
    {
        lvlSelectCurrentFrame=0;
        if (lvlSelectFrame==1)
            lvlSelectFrame=2;
        else
            lvlSelectFrame=1;
    }
    
  keyPush = 0;
    for (var i=0; i<myStripes.length; i++) {
      myStripes[i].display();
    }
}

/**************************************************/
/* LOADING
/**************************************************/
function loading() {
  shadows();
  
  
  for (var i = 0; i<activePlayers; i++) {     
    activePlayFn(activePlayers);
    myPlayers[i].display();
  }

  if ( timerStarted == 0) { 
    timer.restart(); 
    timerStarted++;
  }
  timer.displayTime();
//  if ( timer.theTime == 0) { 
//      image(threeImg, width/2-20, 100);
//    context.drawImage(allimgs["levelSelectImg"],0,loadbgY); }
//  if ( timer.theTime == 1) { 
//      image(twoImg, width/2-20, 100);
//    context.drawImage(allimgs["levelSelectImg"],0,loadbgY); }
//  if ( timer.theTime == 2) { 
//      image(oneImg, width/2-20, 100);
//    context.drawImage(allimgs["levelSelectImg"],0,loadbgY); }
  if ( timer.theTime == 0){//3) { 
      gamemode = "gameplay"; }
  
  //animation from levelSelect screen
  if(loadbgY > -500){
    loadbgY-=9;
  }
//  image(levelSelectImg, 0, loadbgY);
    context.drawImage(allimgs["levelSelectImg"],0,loadbgY);
}


/**************************************************/
/* STATUS BAR
/**************************************************/

function statusBar() {
//  image(livesTextImg, 15, 15);
    context.drawImage(allimgs["livesTextImg"],15,15);
//  image(menuTextImg, 400, 15);
    context.drawImage(allimgs["menuTextImg"],400,15);
    for (var i=0; i<maxLives; i++){
        if (i < lives){
            context.drawImage(allimgs["lifeFullImg"],65+ i*20,17);
        }else{
            context.drawImage(allimgs["lifeEmptyImg"],65+ i*20,17);
        }
    }

//  if (mouseX > 400 && mouseX < 485 &&
//    mouseY > 15 && mouseY < 35) { 
//    handCursor = true; 
////    image(menuTextHoverImg, 400, 15);
//    context.drawImage(allimgs["menuTextHoverImg"],400,15);
//    if (mousePressed) { 
//      handCursor = false; 
//      reset(); 
//      gamemode = "title";
//    }
//  } else handCursor = false;
}

/**************************************************/
/* INSTRUCTIONS
/**************************************************/
function instructions() {
//  imageMode(CORNER);
//  image(instructBGimg, 0, 0);
    context.drawImage(allimgs["instructBGimg"],0,0);
}

/**************************************************/
/* END LEVEL
/**************************************************/
function endLevel() {
//  imageMode(CORNER);
  shadows();
  statusBar();
    showScore();
  for (var i=0; i<activePlayers; i++) { 
    myPlayers[i].yPos = startY; 
//    myPlayers[i].display();
    context.drawImage(myPlayers[i].currentImg,myPlayers[i].xPos,myPlayers[i].yPos);
  }
  
  
//  if ( gameOverTimerStarted == 0) { 
//    gameOverTimer.restart(); 
//    gameOverTimerStarted++;
//  }
//  gameOverTimer.displayTime();
  
  if ( true){//gameOverTimer.theTime >= 1) { 
//    imageMode(CENTER);
//    image(gameOverImg, width/2, 150);
    context.drawImage(allimgs["gameOverImg"],canvas.width/2-allimgs["gameOverImg"].width/2,120);
    
    //reset button
//    noFill();
//    stroke(235, 125, 125);
//    rectMode(CENTER);
//    rect(width/2, 260, 80, 25);
//    image(resetImg, width/2+7, 260);
    context.drawImage(allimgs["resetImg"],canvas.width/2-allimgs["resetImg"].width/2,240);
//    if (mouseX > 210 && mouseX < 290 &&
//      mouseY > 247 && mouseY < 272) { 
//      handCursor = true; 
//      image(resetHoverImg, width/2+7, 260);
//      stroke(235, 2, 2);
//      rect(width/2, 260, 80, 25);
//      if (mousePressed) { 
//        handCursor = false; 
//        reset(); gameOverTimerStarted = 0;
//        gamemode="gameplay";
//      }
//    }
  }
  
}