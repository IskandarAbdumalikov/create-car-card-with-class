class Car {
  constructor( model, createData, img, color,maxSpeed) {
    this.model = model;
    this.img = img;
    this.createData = createData;
    this.color = color;
    this.maxSpeed = maxSpeed
  }
}

export class Bmw extends Car {
  constructor( model, createData, img, color,maxSpeed,price, horsePower) {
    super( model, createData, img, color,maxSpeed);
    this.brand = "BMW"
    this.price = price
    this.horsePower = horsePower;
  }
}

