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
let bossMessage = false;
let login = false;
let left1deskCode = false;
let left2deskCode = false;
let wall2deskCode = false;
let wall1deskCode = false;
let otherdeskCode = false;
let other2Code = false;
let binary1 = false;
let binary2 = false;
let binary3 = false;
let binaryKey = false;

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
  createStory();
  current = intro;
  testtext = false;
  starting = true;
}

function getArea(a, b, c) {
  return abs(
    (a[0] * (b[1] - c[1]) + b[0] * (c[1] - a[1]) + c[0] * (a[1] - b[1])) / 2
  );
}
//if (mouseX > 1 && mouseX < 400 && mouseY > 350 && mouseY < 400)
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

function draw() {
  background(current.backImage);
  maps(current.dotx, current.doty);

  if (current == intro) {
    rect(400, 350, 600, 200);
    textSize(30);
    if (starting) {
      text(
        "Welcome to our game demo. This is a point and click style adventure where you work in an office trying to finish a project while everyone has already left. Try clicking in his box to continue. :D",
        400,
        350,
        600,
        200
      );
    }
    if (start2) {
      //rect(400, 350, 600, 200);
      text(
        "You're a natural! All text and dailogue will appear in a box like this. In some cases you can type to interact with the world and it will appear here. Please type Hello then hit enter: " +
          contents,
        400,
        350,
        600,
        200
      );
    }
    if (start3) {
      fill(0);
      //rect(400, 350, 600, 200);
      text(
        "Great! There will be Blue Arrows to click on to move around the office. You will also need to click around to interact with objects. To start the game try clicking on the computer monitor. Good luck and have fun",
        400,
        350,
        600,
        200
      );
      fill(255);
      //rect(400, 350, 600, 200);
    }
  }

  if (testtext && !login) {
    fill(255);
    rect(400, 350, 600, 200);
    fill(0);
    textSize(30);
    text("Please Enter Password:", 400, 350, 600, 200);
    text(contents, 400, 400, 600, 200);
  }
  if (login) {
    fill(255);
    rect(400, 350, 600, 200);
    fill(0);
    textSize(30);
    text("Nice thats the demo :D", 400, 350, 600, 200);
  }
  /*
  let left2deskCode = false; im
  left1deskCode po
let wall2deskCode = false; s
let wall1deskCode = false;t
let otherdeskCode = false;
let other2Code 
  */
  if (left2deskCode) {
    fill(255);
    rect(400, 350, 600, 200);
    fill(0);
    textSize(30);
    text("19-9-15", 400, 350, 600, 200);
  }
  if (left1deskCode) {
    fill(255);
    rect(400, 350, 600, 200);
    fill(0);
    textSize(30);
    text("12-25-_", 400, 350, 600, 200);
  }
  if (wall2deskCode) {
    fill(255);
    rect(400, 350, 600, 200);
    fill(0);
    textSize(30);
    text("21-_", 400, 350, 600, 200);
  }
  if (otherdeskCode) {
    fill(255);
    rect(400, 350, 600, 200);
    fill(0);
    textSize(30);
    text("3-6-15", 400, 350, 600, 200);
  }
  if (other2Code) {
    fill(255);
    rect(400, 350, 600, 200);
    fill(0);
    textSize(30);
    text("12-25", 400, 350, 600, 200);
  }
  if (wall1deskCode) {
    fill(255);
    rect(400, 350, 600, 200);
    fill(0);
    textSize(30);
    text("26-21", 400, 350, 600, 200);
  }

  if (bossMessage) {
    fill(255);
    rect(400, 350, 600, 200);
    fill(0);
    textSize(30);
    text(
      "Take the Numbers from the computers in the office and convert them to letters and unscramble the words to find your password. F=26 G=1 H=2 an underscore is a space",
      400,
      350,
      600,
      200
    );
  }

  if (binary1) {
    fill(255);
    rect(400, 350, 600, 200);
    fill(0);
    textSize(30);
    text("Digit 1: 01000100", 400, 350, 600, 200);
  }

  if (binary2) {
    fill(255);
    rect(400, 350, 600, 200);
    fill(0);
    textSize(30);
    text("Digit 2: 01000110", 400, 350, 600, 200);
  }

  if (binary3) {
    fill(255);
    rect(400, 350, 600, 200);
    fill(0);
    textSize(30);
    text("Digit 3: 01010011", 400, 350, 600, 200);
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
  left1deskCode = false;
  bossMessage = false;
  testtext = false;
  left2deskCode = false;
  left1deskCode = false;
  wall2deskCode = false;
  wall1deskCode = false;
  otherdeskCode = false;
  other2Code = false;
  binary1 = false;
  binary2 = false;
  binary3 = false;
  binaryKey = false;

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
    bossMessage = true;
  }
  if (current == left2Desks && inArea(665, 800, 175, 255)) {
    left1deskCode = true;
  }
  if (current == leftDesk && inArea(610, 750, 255, 335)) {
    left2deskCode = true;
  }
  if (current == wallDesks && inArea(800, 980, 185, 290)) {
    wall2deskCode = true;
  }
  if (current == wallDesks && inArea(0, 200, 190, 290)) {
    wall1deskCode = true;
  }
  if (current == othersideDesk && inArea(700, 820, 170, 245)) {
    otherdeskCode = true;
  }
  if (current == oppoDesk && inArea(780, 970, 220, 325)) {
    other2Code = true;
  }
  if (current == right1 && inArea(1200, 1500, 290, 400)) {
    binary1 = true;
  }
  if (current == cabinet1 && inArea(215, 955, 200, 690)) {
    binary2 = true;
  }
  if (current == printer && inArea(562, 683, 437, 537)) {
    binary3 = true;
  }
  if (current == right2 && inArea(780, 840, 222, 240)) {
    binaryKey = true;
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
      if (entered == "youre a failure") {
        testtext = false;
        login = true;
      }
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
//start,left1,right1,shelf1,cabinet1,left2,leftDesk,left2Desks,wallDesks,clock,bossCorner,cabinet2,shelf2,bossDesk,loungeCorner,otherside1,othersideDesk,coffeeTable,lounge,door,printer,oppoDesk,otherside2,right2;
function createStory() {
  intro = new Scene(image7, null, null, null, null, null, null);
  start = new Scene(image7, "left1", "right1", null, null, 240, 137);
  right1 = new Scene(image9, "right2", "shelf1", null, "start", 240, 137);
  left1 = new Scene(image8, "cabinet1", "start", "left2", null, 230, 167);
  right2 = new Scene(
    image55,
    "oppoDesk",
    "printer",
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
