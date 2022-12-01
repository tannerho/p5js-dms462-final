let current;
let stage;
let start,left1,right1,shelf1,cabinet1,left2,leftDesk,left2Desks,wallDesks,clock,bossCorner,cabinet2,shelf2,bossDesk,loungeCorner,otherside1,othersideDesk,coffeeTable,lounge,doors,printer,oppoDesk,otherside2,right2;
var fade = 0;
var fadeSpeed = 50;
let testtext;
let contents="";
let entered="";

function preload(){
  image7=loadImage('assets/start.png');
  image8=loadImage('assets/left1.png');
  image9=loadImage('assets/right1.png');
  image11=loadImage('assets/shelf1.png');
  image13=loadImage('assets/cabinet1.png');
  image16=loadImage('assets/left2.png');
  image17=loadImage('assets/leftDesk.png');
  image21=loadImage('assets/left2Desks.png');
  image22=loadImage('assets/wallDesks.png');
  image23=loadImage('assets/clock.png');
  image26=loadImage('assets/bossCorner.png');
  image28=loadImage('assets/cabinet2.png');
  image32=loadImage('assets/shelf2.png');
  image33=loadImage('assets/bossDesk.png');
  image34=loadImage('assets/loungeCorner.png');
  image37=loadImage('assets/otherside1.png');
  image39=loadImage('assets/othersideDesk.png');
  image42=loadImage('assets/coffeeTable.png');
  image45=loadImage('assets/lounge.png');
  image46=loadImage('assets/doors.png');
  image49=loadImage('assets/printer.png');
  image50=loadImage('assets/oppoDesk.png');
  image51=loadImage('assets/otherside2.png');
  image55=loadImage('assets/right2.png');
}

function setup() {
  createCanvas(1500, 700);
  createStory();
  current = start;
  testtext=false;
}

function getArea(a, b, c) {
    return abs((a[0]*(b[1]-c[1]) + b[0]*(c[1]-a[1])+ c[0]*(a[1]-b[1]))/2);
}
//if (mouseX > 1 && mouseX < 400 && mouseY > 350 && mouseY < 400)
function mouseInTriangle(x1, y1, x2, y2, x3, y3){
    let point = [mouseX, mouseY];
    let area = getArea([x1, y1], [x2, y2], [x3, y3]);
    let areaA = getArea([x1, y1], [x2, y2], point);
    let areaB = getArea(point, [x2, y2], [x3, y3]);
    let areaC = getArea([x1, y1], point, [x3, y3]);
    return abs(areaA + areaB + areaC - area) < 0.001;
}

function sceneLoad(x){
  blackout();

  if(x=="printer"){
    current=printer;
  }
  if(x=="oppoDesk"){
    current=oppoDesk;
  }
  if(x=="otherside2"){
    current=otherside2;
  }
  if(x=="right2"){
    current=right2;
  }
  if(x=="otherside1"){
    current=otherside1;
  }
  if(x=="othersideDesk"){
    current=othersideDesk;
  }
  if(x=="coffeeTable"){
    current=coffeeTable;
  }
  if(x=="lounge"){
    current=lounge;
  }
  if(x=="doors"){
    current=doors;
  }
  if(x=="bossCorner"){
    current=bossCorner;
  }
  if(x=="cabinet2"){
    current=cabinet2;
  }
  if(x=="shelf2"){
    current=shelf2;
  }
  if(x=="bossDesk"){
    current=bossDesk;
  }
  if(x=="loungeCorner"){
    current=loungeCorner;
  }
  if(x=="left2"){
    current=left2;
  }
  if(x=="leftDesk"){
    current=leftDesk;
  }
  if(x=="left2Desks"){
    current=left2Desks;
  }
  if(x=="wallDesks"){
    current=wallDesks;
  }
  if(x=="clock"){
    current=clock;
  }
  if(x=="start"){
    current=start;
  }
  if(x=="left1"){
    current=left1;
  }
  if(x=="right1"){
    current=right1;
  }
  if(x=="shelf1"){
    current=shelf1;
  }
  if(x=="cabinet1"){
    current=cabinet1;
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
function fadeIn(){
  if (fade < 255) {
    fade = fade + fadeSpeed; 
  }
  tint(255, fade);
  press=false
}

function draw() {
  background(current.backImage);
  
  
  if(testtext){
    fill(0)
    rect(600,550,300,100)
    fill(255)
    textSize(32)
    text("PLz Enter Password",600,600);
    text(contents,600,650);
  }
  
  
  if(current.left!=null){
    if(mouseInTriangle(20, 350, 70, 250, 70, 450)){
      fill(255);
      triangle(20, 350, 70, 250, 70, 450);
    }
    else{
      fill(111,212,251);
      triangle(20, 350, 70, 250, 70, 450);
    }
  }
  if(current.right!=null){
    if(mouseInTriangle(1480, 350, 1430, 250, 1430, 450)){
      fill(255);
      triangle(1480, 350, 1430, 250, 1430, 450);      
    }
    else{
      fill(111,212,251);
      triangle(1480, 350, 1430, 250, 1430, 450);
    }
  }
  if(current.bottom!=null){
    if(mouseInTriangle(750, 680, 650, 630, 850, 630)){
      fill(255);
      triangle(750, 680, 650, 630, 850, 630);
    }
    else{
      fill(111,212,251);
      triangle(750, 680, 650, 630, 850, 630);
    }
  }
  if(current.top!=null){
    if(mouseInTriangle(750, 20, 650, 70, 850, 70)){
      fill(255);
      triangle(750, 20, 650, 70, 850, 70);
    }
    else{
      fill(111,212,251);
      triangle(750, 20, 650, 70, 850, 70);
    }
  }
}
function mousePressed(){
  print("(" + mouseX + ", " + mouseY + ")")
  
  if(current==start && (mouseX > 600 && mouseX < 900 && mouseY > 200 && mouseY < 500) ){
    testtext=true
  }
  else{
    testtext=false
  }
  
  
  if(current.left!=null){
    if(mouseInTriangle(20, 350, 70, 250, 70, 450)){
      sceneLoad(current.left);
    }
  }
  if(current.right!=null){
    if(mouseInTriangle(1480, 350, 1430, 250, 1430, 450)){
      sceneLoad(current.right);
    }
  }
  if(current.bottom!=null){
    if(mouseInTriangle(750, 680, 650, 630, 850, 630)){
      sceneLoad(current.bottom);
    }
  }
  if(current.top!=null){
    if(mouseInTriangle(750, 20, 650, 70, 850, 70)){
      sceneLoad(current.top);
    }
  }
}
function keyTyped(){
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
  }
}
class Scene { //text options for text game
  constructor(_backImage, _left, _right, _top, _bottom) {
    this.backImage = _backImage;
    this.left = _left;
    this.right = _right;
    this.top = _top;
    this.bottom = _bottom;
  }
}
//start,left1,right1,shelf1,cabinet1,left2,leftDesk,left2Desks,wallDesks,clock,bossCorner,cabinet2,shelf2,bossDesk,loungeCorner,otherside1,othersideDesk,coffeeTable,lounge,door,printer,oppoDesk,otherside2,right2;
function createStory() {
  start= new Scene(
    image7,
    "left1",
    "right1",
    null,
    null
  )
  right1= new Scene(
    image9,
    "right2",
    "shelf1",
    null,
    "start"
  )
  left1= new Scene(
    image8,
    "cabinet1",
    "start",
    "left2",
    null
  )
  right2= new Scene(
    image55,
    "oppoDesk",
    "printer",
    "otherside2",
    null
  )
  shelf1= new Scene(
    image11,
    null,
    "cabinet1",
    null,
    "right1"
  )
  cabinet1= new Scene(
    image13,
    null,
    null,
    null,
    "left1"
  )
  left2= new Scene(
    image16,
    "wallDesks",
    "left2Desks",
    "bossCorner",
    "left1"
  )
  wallDesks= new Scene(
    image22,
    null,
    null,
    "clock",
    "left2"
  )
  clock= new Scene(
    image23,
    null,
    null,
    null,
    "wallDesks"
  )
  left2Desks= new Scene(
    image21,
    null,
    "leftDesk",
    null,
    "left2"
  )
  bossCorner= new Scene(
    image26,
    "cabinet2",
    "bossDesk",
    "shelf2",
    "left2"
  )
  cabinet2= new Scene(
    image28,
    null,
    "shelf2",
    null,
    "bossCorner"
  )
  shelf2= new Scene(
    image32,
    "cabinet2",
    "bossDesk",
    null,
    "bossCorner"
  )
  bossDesk= new Scene(
    image33,
    "shelf2",
    "bossCorner",
    "loungeCorner",
    null
  )
  loungeCorner= new Scene(
    image34,
    "lounge",
    null,
    "otherside1",
    "bossDesk"
  )
  lounge= new Scene(
    image45,
    null,
    "doors",
    null,
    "otherside1"
  )
  doors= new Scene(
    image46,
    null,
    "coffeeTable",
    null,
    "lounge"
  )
  otherside1= new Scene(
    image37,
    "coffeeTable",
    "othersideDesk",
    "otherside2",
    "loungeCorner"
  )
  othersideDesk= new Scene(
    image39,
    null,
    null,
    null,
    "otherside1"
  )
  coffeeTable= new Scene(
    image42,
    "otherside1",
    "otherside2",
    null,
    null
  )
  otherside2= new Scene(
    image51,
    "oppoDesk",
    "printer",
    "otherside1",
    "right2"
  )
  printer= new Scene(
    image49,
    "coffeeTable",
    "otherside2",
    null,
    "oppoDesk"
  )
  oppoDesk= new Scene(
    image50,
    "right2",
    "printer",
    null,
    "otherside2"
  )
  
}
