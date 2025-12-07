// ===========================================
// 1.2.3 – 1.2.4: Объекты car1 и car2
// ===========================================

// car1 через new Object()
var car1 = new Object();
car1.color = "red";
car1.maxSpeed = 200;
car1.driver = new Object();
car1.driver.name = "Сергей Б.";
car1.driver.category = "C";
car1.driver.personalLimitations = "No driving at night";
car1.tuning = true;
car1.numberOfAccidents = 0;

// car2 через литерал объекта
var car2 = {
  color: "blue",
  maxSpeed: 220,
  driver: {
    name: "Сергей Б.",
    category: "B",
    personalLimitations: null
  },
  tuning: false,
  numberOfAccidents: 2
};

// ===========================================
// 1.2.5 – 1.2.6: Методы drive
// ===========================================
car1.drive = function() {
  console.log("I am not driving at night");
};
car2.drive = function() {
  console.log("I can drive anytime");
};
car1.drive();
car2.drive();

// ===========================================
// 1.2.7 – 1.2.10: Конструктор Truck + AssignDriver + trip
// ===========================================
function Truck(color, weight, avgSpeed, brand, model) {
  this.color = color;
  this.weight = weight;
  this.avgSpeed = avgSpeed;
  this.brand = brand;
  this.model = model;

  this.trip = function() {
    if (!this.driver) {
      console.log("No driver assigned");
    } else {
      var msg = "Driver " + this.driver.name + " ";
      msg += this.driver.nightDriving ? "drives at night " : "does not drive at night ";
      msg += "and has " + this.driver.experience + " years of experience";
      console.log(msg);
    }
  };
}

Truck.prototype.AssignDriver = function(name, nightDriving, experience) {
  this.driver = {
    name: name,
    nightDriving: nightDriving,
    experience: experience
  };
};

// Создаем два грузовика
var truck1 = new Truck("green", 5000, 80, "Volvo", "FH");
var truck2 = new Truck("yellow", 7000, 75, "Scania", "R500");

// Назначаем водителей
truck1.AssignDriver("Сергей Б.", true, 5);
truck2.AssignDriver("Сергей Б.", false, 3);

// Проверяем trip
truck1.trip();
truck2.trip();

// ===========================================
// 1.2.12 – 1.2.24: Классы Square, Rectangle, Rhombus, Parallelogram
// ===========================================

class Square {
  constructor(a) {
    this.a = a;
  }
  static help() {
    console.log("Square: 4 equal sides, 4 right angles");
  }
  length() {
    console.log("Perimeter:", this.a * 4);
  }
  square() {
    console.log("Area:", this.a * this.a);
  }
  info() {
    console.log(`Square: sides=${[this.a,this.a,this.a,this.a]}, angles=[90,90,90,90], perimeter=${this.a*4}, area=${this.a*this.a}`);
  }
}

class Rectangle extends Square {
  constructor(a, b) {
    super(a);
    this.b = b;
  }
  static help() {
    console.log("Rectangle: opposite sides equal, 4 right angles");
  }
  length() {
    console.log("Perimeter:", 2*(this.a+this.b));
  }
  square() {
    console.log("Area:", this.a*this.b);
  }
  info() {
    console.log(`Rectangle: sides=${[this.a,this.b,this.a,this.b]}, angles=[90,90,90,90], perimeter=${2*(this.a+this.b)}, area=${this.a*this.b}`);
  }
}

class Rhombus extends Square {
  constructor(a, alpha, beta) {
    super(a);
    this.alpha = alpha;
    this.beta = beta;
  }
  static help() {
    console.log("Rhombus: 4 equal sides, opposite angles equal");
  }
  length() {
    console.log("Perimeter:", this.a*4);
  }
  square() {
    console.log("Area:", this.a*this.a*Math.sin(this.alpha*Math.PI/180));
  }
  info() {
    console.log(`Rhombus: sides=${[this.a,this.a,this.a,this.a]}, angles=[${this.alpha},${this.beta},${this.alpha},${this.beta}], perimeter=${this.a*4}, area=${this.a*this.a*Math.sin(this.alpha*Math.PI/180)}`);
  }
}

class Parallelogram extends Rectangle {
  constructor(a,b,alpha,beta) {
    super(a,b);
    this.alpha = alpha;
    this.beta = beta;
  }
  static help() {
    console.log("Parallelogram: opposite sides equal, opposite angles equal");
  }
  length() {
    console.log("Perimeter:", 2*(this.a+this.b));
  }
  square() {
    console.log("Area:", this.a*this.b*Math.sin(this.alpha*Math.PI/180));
  }
  info() {
    console.log(`Parallelogram: sides=${[this.a,this.b,this.a,this.b]}, angles=[${this.alpha},${this.beta},${this.alpha},${this.beta}], perimeter=${2*(this.a+this.b)}, area=${this.a*this.b*Math.sin(this.alpha*Math.PI/180)}`);
  }
}

// Создаем объекты и вызываем info
let sq = new Square(5);
let rect = new Rectangle(4,6);
let rhomb = new Rhombus(5,120,60);
let para = new Parallelogram(4,6,120,60);

Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

sq.info();
rect.info();
rhomb.info();
para.info();

// ===========================================
// 1.2.25 – 1.2.26: Triangular
// ===========================================
function Triangular(a=3,b=4,c=5){
  return {a,b,c};
}

console.log(Triangular());           // {a:3,b:4,c:5}
console.log(Triangular(6,7,8));      // {a:6,b:7,c:8}
console.log(Triangular(1,2,2));      // {a:1,b:2,c:2}

// ===========================================
// 1.2.27 – 1.2.28: PiMultiplier
// ===========================================
function PiMultiplier(x){
  return function(){
    return Math.PI*x;
  };
}

let f1 = PiMultiplier(2);
let f2 = PiMultiplier(2);
let f3 = PiMultiplier(1/2);

console.log(f1()); // π*2
console.log(f2()); // π*2
console.log(f3()); // π/2

// ===========================================
// 1.2.29 – 1.2.31: Painter
// ===========================================
function Painter(color){
  return function(obj){
    let type = obj.type ? obj.type : "No ‘type’ property occurred!";
    console.log(color + " " + type);
  };
}

let PaintBlue = Painter("Blue");
let PaintRed = Painter("Red");
let PaintYellow = Painter("Yellow");

let obj1 = {maxSpeed:280, color:"purple"};
let obj2 = {type:"Truck", maxSpeed:180, color:"magenta"};
let obj3 = {type:"Sportcar", avgSpeed:90, loadCapacity:2400, isCar:true};

PaintBlue(obj1);   // Blue No ‘type’ property occurred!
PaintRed(obj2);    // Red Truck
PaintYellow(obj3); // Yellow Sportcar
