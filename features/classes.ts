class Vehicle {
  color: string = 'red';

  constructor(color: string) {
    this.color = color;
  }

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle {
  private drive(): void {
    console.log('vroom');
  }

  constructor(public wheels: number, color: string) {
    super(color);
    this.wheels = wheels;
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, '');
car.startDrivingProcess();
