/**************************************************/
/* MAIN FUNCTIONS
/**************************************************/
function setup() {
  myPlayers[0] = new Player(200, startY, 0);
  myPlayers[1] = new Player(250, startY, 1);
  myPlayers[2] = new Player(300, startY, 2);
  myPlayers[3] = new Player(300, startY, 3);
  myPlayers[4] = new Player(300, startY, 4);

  myEnemies[0] = new Enemy(600, startYEnemy, 0);
  myEnemies[1] = new Enemy(parseInt(Math.random()*(800-550)+550), startYEnemy, 1);
  myEnemies[2] = new Enemy(parseInt(Math.random()*(1100-850)+850), startYEnemy, 2);
  myEnemies[3] = new Enemy(parseInt(Math.random()*(1300-1150)+1150), startYEnemy, 3);
  myEnemies[4] = new Enemy(parseInt(Math.random()*(1600-1350)+1350), startYEnemy, 4);
    
    for (var i=0; i< isJumping.length; i++)
    {
        isJumping[i]=false;
    }

  for (var i=0; i<25; i++) { 
    myStripes[i] = new Stripe(-10+(i*20), 40);
  }
  for (var i=25; i<myStripes.length; i++) { 
    myStripes[i] = new Stripe(-10+((i-25)*20), 340);
  }

  keyChar[0] = 'A'; 
  keyChar[1] = 'B'; 
  keyChar[2] = 'C';
  keyChar[3] = 'D'; 
  keyChar[4] = 'E';

    score=0; 
    lives=3;
  timer = new Timer(); gameOverTimer = new Timer();
  timer.startTime(); gameOverTimer.startTime();
}

function draw() {

  if ( gamemode == "title" ) { title(); } 
  else if ( gamemode == "loading" ) { loading(); } 
  else if ( gamemode == "gameplay" ) { gameplay(); } 
  else if ( gamemode == "levelSelect" ) { levelSelect(); } 
  else if ( gamemode == "endLevel" ) { endLevel(); } 
  else if ( gamemode == "instructions") { instructions(); }
}

function keyPressed(key) {
  for (var i = 0; i<myPlayers.length; i++) {
    if (key == keyChar[i] ) { 
//      keyDown[i] = 2;

      if (isJumping[i] == false && myPlayers[i].hitTime >= 30) {
          myPlayers[i].currentJumpFrame=0;
          myPlayers[i].currentFrame=0;
        jumpDirection[i] = 0;
        isJumping[i]=true;
        currentY[i] = myPlayers[i].yPos;
        currentHeight[i] = currentY[i];
      }
    }
  }

  if ( key=='B' && gamemode=="title" ) { 
      keyPush = 1; gamemode = "levelSelect"; }
  if ( key=='A' && gamemode=="levelSelect" && keyPush == 0) { 
      activePlayers = 3; gamemode = "gameplay";}//loading"; }
  if ( key=='B' && gamemode=="levelSelect" && keyPush == 0) { 
      activePlayers = 5; gamemode = "gameplay";}//"loading"; }
  if ( key=='M' && (gamemode=="gameplay" || gamemode=="endLevel")) { 
      reset(); gamemode = "title"; }
  if ( key=='R' && (gamemode=="gameplay" || gamemode=="endLevel")) { 
      reset(); gamemode = "gameplay"; }

//    console.log(gamemode);
    
//  if (key=='0') { reset(); }
//  if (key=='1') { gamemode = "title"; }
//  if (key=='2') { gamemode = "gameplay"; }
//  if (key=='3') { gamemode = "levelSelect"; }
//  if (key=='4') { gamemode = "endLevel"; }
//  if (key=='5') { gamemode = "instructions"; }
}