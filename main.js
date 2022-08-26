// @ts-check

/*-----------------------------Start super---------------------------------*/
/* class Car {
  // 생성자 전달
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  } // 메소드 선언
  showSpec() {
    console.log(
      `이 차의 브랜드는 ${this.brand}이고 색상은 ${this.color}입니다.`
    );
  }
}
// 상속 선언
class ElecCar extends Car {
  constructor(brand, color, fuel) {
    super(brand, color);
    this.fuel = fuel;
  }
  showSpec() {
    super.showSpec();
    console.log(`그리고 이 차는 ${this.fuel}의 힘으로 움직입니다!`);
  }
}
const hyundai = new Car('hyundai', 'white');
hyundai.showSpec();
const tesla = new ElecCar('tesla', 'red', 'electricity');
tesla.showSpec(); */
/*-----------------------------End super------------------------------*/

/*------------------Start overriding(ES5 ver)--------------------- */
/* function Car(brand, color) {
  this.brand = brand;
  this.color = color;
  this.drive = function () {
    console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다`);
  };
}
function ElecCar(brand, color, fuel) {
  // Car 생성자 함수의 this와 생성자를 가져오기 위한 call 메소드 사용
  Car.call(this, brand, color);
  this.fuel = fuel;
  // 오버라이딩 구현
  this.drive = function () {
    console.log(
      `${brand}의 ${color}색 자동차가 ${this.fuel}의 힘으로 주행 중입니다`
    );
  };
}
// 상속 받을 ElecCar의 프로토 타입을 Object 객체(최상위 개념)를 사용해서 Car 의 프로토 타입과 동일하게 만들어 낸다.
ElecCar.prototype = Object.create(Car.prototype);
// 상속 받을 ElecCar의 생성자는 위에서 선언한 생성자 함수의 것을 따르도록 설정
ElecCar.prototype.constructor = ElecCar;

const tesla = new ElecCar('tesla', 'white', 'electricity');
tesla.drive(); */
/*------------------End overriding(ES5 ver)--------------------- */

/*------------------Start overriding(ES6 ver)--------------------- */
/* class Car {
  // 생성자 전달
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  } // 메소드 선언
  drive() {
    console.log(
      `이 차의 브랜드는 ${this.brand}이고 색상은 ${this.color} 입니다.`
    );
  }
}
// 상속 선언
class ElecCar extends Car {
  constructor(brand, color, fuel) {
    super(brand, color);
    this.fuel = fuel;
  }
  drive() {
    console.log(
      `이 차의 브랜드는 ${this.brand}이고 색상은 ${this.color}이며, ${this.fuel}의 힘으로 움직입니다!`
    );
  }
} */
/*------------------End overriding(ES6 ver)--------------------- */

/*------------------Start Shape area--------------------- */
/* class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}
//상속 선언
class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
}

class Triangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
}
class Circle extends Shape {
  constructor(width, height, radius) {
    super(width, height);
    this.radius = radius;
  }
  getArea() {
    return 3.14 * this.radius ** 2;
  }
}

const shape = new Shape(5, 5);
const rectangle = new Rectangle(4, 4);
const triangle = new Triangle(4, 4);
const circle = new Circle(4, 4, 2);

console.log(
  shape.getArea(),
  rectangle.getArea(),
  triangle.getArea(),
  circle.getArea()
); */
/*------------------End Shape area--------------------- */
