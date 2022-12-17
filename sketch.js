let current;
let stage;
let start,
  left1,
  right1,
  shelf1,
  cabinet1,
  left2,
  leftDesk,
  left2Desks,
  wallDesks,
  clock,
  bossCorner,
  cabinet2,
  shelf2,
  bossDesk,
  loungeCorner,
  otherside1,
  othersideDesk,
  coffeeTable,
  lounge,
  doors,
  printer,
  oppoDesk,
  otherside2,
  right2;
var fade = 0;
var fadeSpeed = 50;
let testtext;
let contents = "";
let entered = "";
let starting;
let start2;
let start3;
let login = false;
let left1deskCode = false;
let left2deskCode = false;
let wall2deskCode = false;
let wall1deskCode = false;
let otherdeskCode = false;
let other2Code = false;
let binaryKey = false;
let strings = [
  " The work week was long.",
  " Your coworkers have all left. \n",
  " The boss said your report was due by end of the week. \n",
  " It is the end of week. \n",
  " You were recently hired here and still have no idea what is going on. \n",
  " You can barely even remember your password half the time.\n ",
  " You need to search around the office to figure out your work before you leave. \n",
  " People leave notes on clip boards and in the cabinets from what you've seen. \n",
  " That'd be a good place to start. \n",
  " Try and not get fired this time.",
];
let stringsInt = 0;
let currentString = "";
let stringsInt2 = 0;
let currentString2 = "";
let strings2 = [
  "That's it. \n",
  " You finished the job. \n",
  " Your boss might be mad it took you so long. \n",
  " You don't belong here. Everyone else finished their work with ease. \n",
  " NO",
  ",you did it. The others are used to it here, but that doesn't mean they're better. \n",
  " Growing and learning is a process and sometimes a struggle. \n \n",
  " Thank you for playing. We hope you enjoyed your time. You did it WOOOOO!",
];

let errorColor = false;
let errorNumber = false;
let errorLetter = false;
let error1 = false;
let error2 = false;
let error3 = false;

let foundColor = false;
let favoriteColor = false;
let basicMess = false;
let basicText = "";
let printTime = false;

function preload() {
  image7 = loadImage("assets/start.png");
  image8 = loadImage("assets/left1.png");
  image9 = loadImage("assets/right1.png");
  image11 = loadImage("assets/shelf1.png");
  image13 = loadImage("assets/cabinet1.png");
  image16 = loadImage("assets/left2.png");
  image17 = loadImage("assets/leftDesk.png");
  image21 = loadImage("assets/left2Desks.png");
  image22 = loadImage("assets/wallDesks.png");
  image23 = loadImage("assets/clock.png");
  image26 = loadImage("assets/bossCorner.png");
  image28 = loadImage("assets/cabinet2.png");
  image32 = loadImage("assets/shelf2.png");
  image33 = loadImage("assets/bossDesk.png");
  image34 = loadImage("assets/loungeCorner.png");
  image37 = loadImage("assets/otherside1.png");
  image39 = loadImage("assets/othersideDesk.png");
  image42 = loadImage("assets/coffeeTable.png");
  image45 = loadImage("assets/lounge.png");
  image46 = loadImage("assets/doors.png");
  image49 = loadImage("assets/printer.png");
  image50 = loadImage("assets/oppoDesk.png");
  image51 = loadImage("assets/otherside2.png");
  image55 = loadImage("assets/right2.png");
}
function setup() {
  createCanvas(1500, 700);
  testtext = false;
  starting = true;
  createStory();
  current = newMaybe; //newMaybe or start
}
function getArea(a, b, c) {
  return abs(
    (a[0] * (b[1] - c[1]) + b[0] * (c[1] - a[1]) + c[0] * (a[1] - b[1])) / 2
  );
}
function mouseInTriangle(x1, y1, x2, y2, x3, y3) {
  let point = [mouseX, mouseY];
  let area = getArea([x1, y1], [x2, y2], [x3, y3]);
  let areaA = getArea([x1, y1], [x2, y2], point);
  let areaB = getArea(point, [x2, y2], [x3, y3]);
  let areaC = getArea([x1, y1], point, [x3, y3]);
  return abs(areaA + areaB + areaC - area) < 0.001;
}
function sceneLoad(x) {
  blackout();

  if (x == "printer") {
    current = printer;
  }
  if (x == "oppoDesk") {
    current = oppoDesk;
  }
  if (x == "otherside2") {
    current = otherside2;
  }
  if (x == "right2") {
    current = right2;
  }
  if (x == "otherside1") {
    current = otherside1;
  }
  if (x == "othersideDesk") {
    current = othersideDesk;
  }
  if (x == "coffeeTable") {
    current = coffeeTable;
  }
  if (x == "lounge") {
    current = lounge;
  }
  if (x == "doors") {
    current = doors;
  }
  if (x == "bossCorner") {
    current = bossCorner;
  }
  if (x == "cabinet2") {
    current = cabinet2;
  }
  if (x == "shelf2") {
    current = shelf2;
  }
  if (x == "bossDesk") {
    current = bossDesk;
  }
  if (x == "loungeCorner") {
    current = loungeCorner;
  }
  if (x == "left2") {
    current = left2;
  }
  if (x == "leftDesk") {
    current = leftDesk;
  }
  if (x == "left2Desks") {
    current = left2Desks;
  }
  if (x == "wallDesks") {
    current = wallDesks;
  }
  if (x == "clock") {
    current = clock;
  }
  if (x == "start") {
    current = start;
  }
  if (x == "left1") {
    current = left1;
  }
  if (x == "right1") {
    current = right1;
  }
  if (x == "shelf1") {
    current = shelf1;
  }
  if (x == "cabinet1") {
    current = cabinet1;
  }
  fadeIn();
}
function blackout() {
  fill(0, fade);
  rect(0, 0, width, height);
  fade = fade + fadeSpeed;
  if (fade > 255) {
    fade = 0;
  }
}
function fadeIn() {
  if (fade < 255) {
    fade = fade + fadeSpeed;
  }
  tint(255, fade);
  press = false;
}
function inArea(x1, x2, y1, y2) {
  if (mouseX > x1 && mouseX < x2 && mouseY > y1 && mouseY < y2) {
    return true;
  }
  return false;
}
function maps(dotx, doty) {
  if (dotx != null) {
    fill(111, 212, 251);
    rect(30, 20, 100, 80);
    rect(30, 50, 250, 150);
    line(175, 125, 250, 125);
    line(75, 125, 150, 125);
    line(225, 150, 225, 100);
    line(200, 150, 200, 100);
    line(100, 150, 100, 100);
    line(125, 150, 125, 100);
    stroke("purple");
    strokeWeight(10);
    point(dotx, doty);
    stroke("black");
    strokeWeight(1);
  }
}
function setText() {
  fill(255);
  rect(400, 350, 600, 200);
  fill(0);
  textSize(30);
}
function gameBox(x, n) {
  basicMess = true;
  basicText = x;
  answer = false;
  if (n != null) {
    answer = true;
  }
}

function draw() {
  background(current.backImage);
  maps(current.dotx, current.doty);
  if (current == newMaybe) {
    textSize(30);
    fill(255);
    text(currentString, 40, 35, 1200, 700);
  }
  if (current == ending) {
    textSize(30);
    fill(255);
    text(currentString2, 40, 35, 1200, 700);
  }

  if (current == intro) {
    if (starting) {
      gameBox(
        "This is a point and click style adventure where you work in an office trying to finish a project while everyone has already left. We recommend grabbing some paper. Try clicking in his box to start."
      );
    }
    if (start2) {
      gameBox(
        "Great! All text and dailogue will appear in a box like this. In some cases you can type to interact with the world and it will appear here. Please type Hello then hit enter: " +
          contents
      );
    }
    if (start3) {
      gameBox(
        "Great! There will be Blue Arrows to click on to move around the office. You will also need to click around to interact with objects. To start the game click on the computer monitor. Your first task is to login."
      );
    }
  }

  if (testtext && !login) {
    gameBox("Employee 261, Please Enter Password: \n" + contents);
  }
  if (login) {
    gameBox(
      "Login Success \n Machine Error Code Blue1A Please Fix \n " + contents
    );
  }
  if (error1) {
    gameBox(
      "Error 1 Resolved \n Machine Error Code Yellow2F Please Fix \n" + contents
    );
  }
  if (error2) {
    gameBox(
      "Error 2 Resolved \n Machine Error Code Green9T Please Fix \n" + contents
    );
  }
  if (error3) {
    printTime = true;
    gameBox(
      "Error 3 Resolved: All Errors Resolved \n Please Fix Issue at Printer"
    );
  }
  if (basicMess) {
    setText();
    if (answer) {
      text(basicText + "\n" + contents, 400, 350, 600, 200);
    } else {
      text(basicText, 400, 350, 600, 200);
    }
  }
  if (binaryKey) {
    fill(255);
    rect(400, 350, 600, 200);
    fill(0);
    textSize(23);
    text(
      "A:01000001 B:01000010 C:01000011 D:01000100 E:01000101 F:01000110 G:01000111 H:01001000 I:01001001 J:01001010 K:01001011 L:01001100 M:01001101 N:01001110 O:01001111 P:01010000 Q:01010001 R:01010010 S:01010011 T:01010100 U:01010101 V:01010110 W:01010111 X:01011000 Y:01011001 Z:01011010",
      400,
      350,
      600,
      200
    );
  }

  if (current.left != null) {
    if (mouseInTriangle(20, 350, 70, 250, 70, 450)) {
      fill(255);
      triangle(20, 350, 70, 250, 70, 450);
    } else {
      fill(111, 212, 251);
      triangle(20, 350, 70, 250, 70, 450);
    }
  }
  if (current.right != null) {
    if (mouseInTriangle(1480, 350, 1430, 250, 1430, 450)) {
      fill(255);
      triangle(1480, 350, 1430, 250, 1430, 450);
    } else {
      fill(111, 212, 251);
      triangle(1480, 350, 1430, 250, 1430, 450);
    }
  }
  if (current.bottom != null) {
    if (mouseInTriangle(750, 680, 650, 630, 850, 630)) {
      fill(255);
      triangle(750, 680, 650, 630, 850, 630);
    } else {
      fill(111, 212, 251);
      triangle(750, 680, 650, 630, 850, 630);
    }
  }
  if (current.top != null) {
    if (mouseInTriangle(750, 20, 650, 70, 850, 70)) {
      fill(255);
      triangle(750, 20, 650, 70, 850, 70);
    } else {
      fill(111, 212, 251);
      triangle(750, 20, 650, 70, 850, 70);
    }
  }
}

function mousePressed() {
  print("(" + mouseX + ", " + mouseY + ")");
  login = false;
  testtext = false;
  left2deskCode = false;
  left1deskCode = false;
  wall2deskCode = false;
  wall1deskCode = false;
  otherdeskCode = false;
  other2Code = false;
  binaryKey = false;
  clipBoss = false;

  errorColor = false;
  errorNumber = false;
  errorLetter = false;

  error1 = false;
  error2 = false;
  error3 = false;
  basicMess = false;

  favoriteColor = false;

  if (current == newMaybe) {
    if (stringsInt >= strings.length) {
      starting = true;
      current = intro;
    }
    currentString += strings[stringsInt];
    stringsInt++;
  }
  if (current == ending) {
    if (stringsInt2 < strings2.length) {
      currentString2 += strings2[stringsInt2];
      stringsInt2++;
    }
  }
  if (current == start && inArea(625, 835, 130, 250)) {
    testtext = true;
  }
  if (current == intro && inArea(400, 1000, 350, 550)) {
    starting = false;
    start2 = true;
  }
  if (current == intro && start3 && inArea(625, 835, 130, 250)) {
    start3 = false;
    current = start;
  }

  if (current == bossDesk && inArea(560, 735, 95, 235)) {
    gameBox(
      "Employee Encrypted Codes: 026-a=16,b=17  050-a=e,b=f  087-a=8,b=9  131-a=m,b=n  209-a=r,b=s  259-a=v,b=w  261-a=21,b=22"
    );
  }
  if (current == left2Desks && inArea(665, 800, 175, 255)) {
    left1deskCode = true;
    gameBox("Employee 087, Please Enter Password:", 1);
  }
  if (current == leftDesk && inArea(610, 750, 255, 335)) {
    left2deskCode = true;
    gameBox("Employee 209, Please Enter Password:", 1);
  }
  if (current == wallDesks && inArea(800, 980, 185, 290)) {
    wall2deskCode = true;
    gameBox("Employee 131, Please Enter Password:", 1);
  }
  if (current == wallDesks && inArea(0, 200, 190, 290)) {
    wall1deskCode = true;
    gameBox("Employee 026, Please Enter Password:", 1);
  }
  if (current == othersideDesk && inArea(700, 820, 170, 245)) {
    otherdeskCode = true;
    gameBox("Employee 050, Please Enter Password:", 1);
  }
  if (current == oppoDesk && inArea(780, 970, 220, 325)) {
    other2Code = true;
    gameBox("Employee 259, Please Enter Password:", 1);
  }
  if (current == printer && inArea(562, 683, 437, 537)) {
    binaryKey = true;
  }
  if (current == wallDesks && inArea(1365, 1500, 300, 355)) {
    gameBox("026 code: 22-7-16-19-20   050 code: gvyqf");
  }
  if (current == shelf2 && inArea(420, 550, 425, 490)) {
    gameBox("087 code: 23-25-12-26-26   131 code: oayyqzf");
  }
  if (current == bossDesk && inArea(990, 1090, 260, 325)) {
    gameBox(
      "Colors and their hex values: \nCopper: d86e10 \tMagenta: d8106e Green-cyan: 10d86e \nBright purple: 6e10d8 \nLime green: 6ed810"
    );
  }
  if (current == oppoDesk && inArea(635, 725, 360, 430)) {
    gameBox("209 code: wziv   259 code: wvb   261 code: 26-21-3-6-15-12-25");
  }
  if (current == cabinet2 && inArea(480, 1080, 160, 575)) {
    errorNumber = true;
    gameBox("What number error do you have?", 1);
  }
  if (current == cabinet1 && inArea(215, 955, 200, 590)) {
    errorColor = true;
    gameBox("What color error do you have?", 1);
  }
  if (current == printer && inArea(970, 1400, 190, 660)) {
    errorLetter = true;
    gameBox("What letter error do you have?", 1);
  }
  if (current == bossDesk && inArea(300, 520, 580, 700)) {
    gameBox(
      "HEX- only 2 digits at a time \n 8=8 9=9 10=a 11=b 12=c 13=d 14=e 15=f \n example: 2c04 or 2c4-> (2*16)+(c->12) and (0*16)+(1*4)= 32+12 and 0+4 = 44 and 4 or just 444"
    );
  }
  if (
    current == printer &&
    printTime &&
    (inArea(217, 500, 324, 515) || inArea(735, 940, 317, 500))
  ) {
    gameBox(
      "To fix printer please answer: What is the boss's favorite color?",
      1
    );
    favoriteColor = true;
  }
  if (current == doors && !foundColor && inArea(600, 825, 117, 366)) {
    gameBox(
      "I can't leave yet, I have to finish up my work and print that flyer for the boss."
    );
  }
  if (current == doors && foundColor && inArea(600, 825, 117, 366)) {
    current = ending;
  }
  if (current == cabinet2 && !foundColor && inArea(1250, 1425, 90, 700)) {
    gameBox(
      "I can't leave yet, I have to finish up my work and print that flyer for the boss."
    );
  }
  if (current == cabinet2 && foundColor && inArea(1250, 1425, 90, 700)) {
    current = ending;
  }
  if (current == clock && inArea(600, 850, 200, 375)) {
    gameBox("It's 11 past 10");
  }

  if (current.left != null) {
    if (mouseInTriangle(20, 350, 70, 250, 70, 450)) {
      sceneLoad(current.left);
    }
  }
  if (current.right != null) {
    if (mouseInTriangle(1480, 350, 1430, 250, 1430, 450)) {
      sceneLoad(current.right);
    }
  }
  if (current.bottom != null) {
    if (mouseInTriangle(750, 680, 650, 630, 850, 630)) {
      sceneLoad(current.bottom);
    }
  }
  if (current.top != null) {
    if (mouseInTriangle(750, 20, 650, 70, 850, 70)) {
      sceneLoad(current.top);
    }
  }
}
function keyTyped() {
  if (keyCode != ENTER) {
    contents += key;
  }
}
function keyReleased() {
  if (keyCode == BACKSPACE) {
    contents = contents.substring(0, contents.length - 1);
  }
  if (keyCode == ENTER) {
    entered = contents;
    contents = "";
    if (start2) {
      if (entered == "Hello") {
        start2 = false;
        start3 = true;
      }
    }
    if (testtext) {
      if (entered == "failure") {
        testtext = false;
        login = true;
      }
    }
    if (login && entered == "626110") {
      login = false;
      error1 = true;
    }
    if (error1 && entered.toUpperCase() == "8RGB5BA") {
      error1 = false;
      error2 = true;
    }
    if (error2 && entered == "3051861377") {
      error2 = false;
      error3 = true;
    }

    if (left2deskCode && entered == "fire") {
      // employee 209
      gameBox(
        "The new employee 261 is terrible. They barely even know binary or how hex colors work. 01101100 01101111 01101100"
      );
    }
    if (left1deskCode && entered == "press") {
      // employee 087
      gameBox(
        "The green value of the boss's favorite color is equal to the number of coffee mugs in the office cubed."
      );
    }
    if (wall2deskCode && entered == "comment") {
      // employee 131
      gameBox(
        " The red value for the boss's favorite color is the number of red chairs in the office plus all binders on his desk all multiplied by the number of red couches."
      );
    }
    if (wall1deskCode && entered == "grade") {
      // employee 026
      gameBox(
        "In order to find the blue value of the boss's favorite color take the time and times the time by the other time in time"
      );
    }
    if (otherdeskCode && entered == "crumb") {
      // employee 050
      gameBox(
        "I can't let anyone know but I'm stuck. I have to covert 91 and 10 into hex but I'm terrible at it."
      );
    }
    if (other2Code && entered == "bag") {
      // employee 259
      gameBox(
        "I hate this job but a least I'm not the newbie anymore. 01001101 01101001 01101110: 01110101 01110100 01100101"
      );
    }
    if (errorColor) {
      if (entered == "Blue" || entered == "blue") {
        //6
        gameBox("Water Bottles Number");
        errorColor = false;
      }
      if (entered == "Red" || entered == "red") {
        //22
        gameBox("Potted Plants Number");
        errorColor = false;
      }
      if (entered == "Yellow" || entered == "yellow") {
        //8
        gameBox("Black Binders Number");
        errorColor = false;
      }
      if (entered == "Green" || entered == "green") {
        //30
        gameBox("Error Yellow + Error Red");
        errorColor = false;
      }
      if (entered == "Purple" || entered == "purple") {
        //7
        gameBox("Red Binders Number");
        errorColor = false;
      }
    }
    if (errorNumber) {
      if (entered == "1") {
        //261
        gameBox("Employee #");
        errorNumber = false;
      }
      if (entered == "2") {
        //RGB
        gameBox("Employee 209 Binary");
        errorNumber = false;
      }
      if (entered == "4") {
        //5
        gameBox("Blue Binders Number");
        errorNumber = false;
      }
      if (entered == "9") {
        //??
        gameBox("Error 4 and Error M");
        errorNumber = false;
      }
    }
    if (errorLetter) {
      if (entered == "A" || entered == "a") {
        //10
        gameBox("Hour");
        errorLetter = false;
      }
      if (entered == "B" || entered == "b") {
        //11
        gameBox("01001101 01101001 01101110 01110101 01110100 01100101");
        errorLetter = false;
      }
      if (entered == "F" || entered == "f") {
        //91 and 10 turn into 5b and a
        gameBox("Employee 050 Hex");
        errorLetter = false;
      }
      if (entered == "M" || entered == "m") {
        //hex: bad ba=187 d=13  18713
        gameBox("Employee 259 Binary Hex");
        errorLetter = false;
      }
      if (entered == "T" || entered == "t") {
        //77
        gameBox("Error B * Error Purple");
        errorLetter = false;
      }
    }
    if (favoriteColor && entered.toUpperCase() == "GREEN-CYAN") {
      foundColor = true;
      gameBox("Finally, I'm done I have to get out of this place!");
    }
  }
}
class Scene {
  //text options for text game
  constructor(_backImage, _left, _right, _top, _bottom, _dotx, _doty) {
    this.backImage = _backImage;
    this.left = _left;
    this.right = _right;
    this.top = _top;
    this.bottom = _bottom;
    this.dotx = _dotx;
    this.doty = _doty;
  }
}
function createStory() {
  ending = new Scene(51, null, null, null, null, null, null);
  newMaybe = new Scene(51, null, null, null, null, null, null);
  intro = new Scene(image7, null, null, null, null, null, null);
  start = new Scene(image7, "left1", "right1", null, null, 240, 137);
  right1 = new Scene(image9, "right2", "shelf1", null, "start", 240, 137);
  left1 = new Scene(image8, "cabinet1", "start", "left2", null, 230, 167);
  right2 = new Scene(
    image55,
    "oppoDesk",
    null,
    "otherside2",
    "right1",
    266,
    120
  );
  shelf1 = new Scene(image11, null, "cabinet1", null, "right1", 259, 173);
  cabinet1 = new Scene(image13, null, null, null, "left1", 219, 173);
  left2 = new Scene(
    image16,
    "wallDesks",
    "left2Desks",
    "bossCorner",
    "left1",
    130,
    173
  );
  wallDesks = new Scene(image22, null, null, "clock", "left2", 114, 178);
  clock = new Scene(image23, null, null, null, "wallDesks", 114, 178);
  left2Desks = new Scene(image21, null, "leftDesk", null, "left2", 114, 154);
  leftDesk = new Scene(image17, "left2Desks", null, null, "left2", 141, 147);
  bossCorner = new Scene(
    image26,
    "cabinet2",
    "bossDesk",
    "shelf2",
    "left2",
    83,
    154
  );
  cabinet2 = new Scene(image28, null, "shelf2", null, "bossCorner", 54, 178);
  shelf2 = new Scene(
    image32,
    "cabinet2",
    "bossDesk",
    null,
    "bossCorner",
    38,
    163
  );
  bossDesk = new Scene(
    image33,
    "shelf2",
    "bossCorner",
    "loungeCorner",
    null,
    48,
    129
  );
  loungeCorner = new Scene(
    image34,
    "lounge",
    null,
    "otherside1",
    "bossDesk",
    64,
    98
  );
  lounge = new Scene(image45, null, "doors", null, "otherside1", 55, 46);
  doors = new Scene(image46, null, "coffeeTable", null, "lounge", 107, 34);
  otherside1 = new Scene(
    image37,
    "coffeeTable",
    "othersideDesk",
    "otherside2",
    "loungeCorner",
    109,
    70
  );
  othersideDesk = new Scene(image39, null, null, null, "otherside1", 110, 92);
  coffeeTable = new Scene(
    image42,
    "otherside1",
    "otherside2",
    null,
    null,
    155,
    63
  );
  otherside2 = new Scene(
    image51,
    "oppoDesk",
    "printer",
    "otherside1",
    "right2",
    237,
    77
  );
  printer = new Scene(
    image49,
    "coffeeTable",
    "otherside2",
    null,
    "oppoDesk",
    201,
    65
  );
  oppoDesk = new Scene(
    image50,
    "right2",
    "printer",
    null,
    "otherside2",
    238,
    98
  );
}
