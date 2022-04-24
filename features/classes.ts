//Public methods: can be called anywhere any time
// Private methods: Can only be called by other methods in this class
// Protected methods: can be called by other
//                    methods in this class or by other methods in child classes
// Methods are not marked private for security
// Private methods are only used to prevent other developers from calling it
// incorrectly. It may manipulate an object in away that can break something. 


class Vehicle {

  // this public modifier is the same as initializing a color variable and 
  // assigning it to this.color in the constructor. We could also use private or protected
  constructor(public color: string) {
  }

  // honk can be used in Auto because it's protected (not private)
  protected honk(): void {
    console.log('beep');
  }
}

class Auto extends Vehicle  {

  constructor(public wheels: number, color: string) {
    super();
  }
  // a private method must have continuity of modifiers by having it be private in
  // both the parent and child if it exists in parent and is overridden in the child
  private drive(): void {
    console.log('vroom')
    console.log(this.color)
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car3 = new Auto('black');
car3.startDrivingProcess();