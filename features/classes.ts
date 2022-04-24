//Public methods: can be called anywhere any time
// Private methods: Can only be called by other methods in this class
// Protected methods: can be called by other
//                    methods in this class or by other methods in child classes

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