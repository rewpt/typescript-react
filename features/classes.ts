class Vehicle {
  drive(): void {
    console.log('chug chug');
  }
  honk(): void {
    console.log('beep');
  }
}

class Auto extends Vehicle  {
  drive(): void {
    console.log('vroom')
  }
}

const car3 = new Auto();
car3.drive();