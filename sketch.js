const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var apple1;
var apple;
var money = 100;
var applep = 20;
var apples = 30;
var stateop = "seed";
var m = money;
var button;
var state = "intro";
var statepo = "seed";
var display1;
var button;
var buttons;
var buttona;
var buttonb;
let timer;

function preload() {
  bg = loadImage("Plants/background.svg");
  a = loadImage("Plants/apple.png");
}

function setup() {
  var canvas = createCanvas(1440, 800);
  timer = 5000;
  engine = Engine.create();
  world = engine.world;
  log1 = new Dirt(1300, 358.5, 150, 150);
  log2 = new Dirt(1164, 294, 150, 150);
  log3 = new Dirt(1435, 420, 150, 150);
  log4 = new Dirt(1300, 358.5, 150, 150);
  log5 = new Dirt(1164, 294, 150, 150);
  log6 = new Dirt(1435, 420, 150, 150);
  log7 = new Dirt(1300, 358.5, 150, 150);
  log8 = new Dirt(1164, 294, 150, 150);
  log9 = new Dirt(1435, 420, 150, 150);
  log10 = new Dirt(1300, 358.5, 150, 150);
  log11 = new Dirt(1164, 294, 150, 150);
  log12 = new Dirt(1435, 420, 150, 150);
  apple1 = new Plant(1200, 400, 150, 150);
  apple1.depth = log12.depth + 100;
  apple2 = new Plant(100, 200, 150, 150);
  apple2.depth = log12.depth + 100;
  apple3 = new Plant(1000, 400, 150, 150);
  apple3.depth = log12.depth + 100;
  apple4 = new Plant(935, 520, 500, 500);
  apple4.depth = log12.depth + 100;
  apple5 = new Plant(835, 520, 500, 500);
  apple5.depth = log12.depth + 100;
  apple6 = new Plant(735, 520, 500, 500);
  apple6.depth = log12.depth + 100;
  apple7 = new Plant(635, 520, 500, 500);
  apple7.depth = log12.depth + 100;
  apple8 = new Plant(535, 520, 500, 500);
  apple8.depth = log12.depth + 100;
  apple9 = new Plant(435, 520, 500, 500);
  apple9.depth = log12.depth + 100;
  main = new Plant(1100, 358.5, 500, 500);
  main.image = loadImage("Plants/logo.png");
  button = createButton("Start");
  button.mousePressed(change);
  button.position(88, 56);
  buttons = createButton("Shop");
  buttons.mousePressed(changes);
  buttonb = createButton("Back");
  buttonb.mousePressed(change);
  buttona = createButton("Apples");
  display1 = createSprite(50, 125, 40, 40);
  display1.addimage = a;
  grocer = new Plant(700, 50, 70, 70);
  grocer.image = loadImage("Plants/grocery.svg");
  title = new Plant(500, 300, 700, 100);
  title.image = loadImage("Plants/name.png");
}

function draw() {
  if (state === "intro") {
    background("white");
    textSize(50);
    button.show();
    buttons.hide();
    buttonb.hide();

    main.display();
    title.display();
  }
  if (state === "play") {
    background(bg);
    Engine.update(engine);
    if (millis() > timer) {
      timer = timer + 5000;
    }
    console.log(timer);
    if (timer <= 5000) {
      image = loadImage("Plants/apple_seed.png");
    }
    if (timer > 5000 && timer <= 10000) {
      image = loadImage("Plants/apple_grow.png");
    }
    if (timer > 10000) {
      image = loadImage("Plants/apple_harvest.png");
    }

    if (money >= applep) {
      console.log("this");
      apple1.display();
      var money1 = money - applep;
      var m = money1;
    }

    if (money1 >= applep) {
      apple2.display();
      var money2 = money1 - applep;
      var m = money2;
    }
    if (money2 >= applep) {
      apple3.display();
      var money3 = money2 - applep;
      var m = money3;
    }
    if (money3 >= applep) {
      apple4.display();
      var money4 = money3 - applep;
      var m = money4;
    }
    if (money4 >= applep) {
      apple5.display();
      var money5 = money4 - applep;
      var m = money5;
    }
    if (money5 >= applep) {
      apple6.display();
      var money6 = money5 - applep;
      var m = money6;
    }
    if (money6 >= applep) {
      apple7.display();
      var money7 = money6 - applep;
      var m = money7;
    }
    if (money7 >= applep) {
      apple8.display();
      var money8 = money7 - applep;
      var m = money8;
    }
    if (money8 >= applep) {
      apple9.display();
      var money9 = money8 - applep;
      var m = money9;
    }

    log1.display();
    log2.display();
    log3.display();
    log4.display();
    log5.display();
    log6.display();
    log7.display();
    log8.display();
    log9.display();
    log10.display();
    log11.display();
    log12.display();
    button.hide();
    buttons.show();
    buttonb.hide();
  }
  if (state == "shopping") {
    if (mousePressedOver(display1)) {
      state = "play";
    }
    background("white");
    textSize(70);
    text("SHOP", 450, 70);
    textSize(15);
    text("Price:20\nRevenue:30", 80, 125);
    grocer.display();
    display1.display();
    button.hide();
    buttons.hide();
    buttonb.show();
  }
  drawSprites();
}

function change() {
  state = "play";
}
function changes() {
  state = "shopping";
}
