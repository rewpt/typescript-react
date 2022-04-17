// All of these are explicit type annotations
// If we did not assign these types, they would be assigned by default in TS

let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// JS built in objects
let now: Date = new Date();

// Array -> the left side indicated type and the right side is the array assigned to the var
let colors: string[] = ['red', 'green', 'blue']
let myNums: number[] = [1,2,3];
let myBools: boolean[] = [true, false, true];

// Classes
class Car {

}

let car: Car = new Car();

// Object literal, show what you are assigning and then the type of that assignment
let point: { x: number; y: number} = {
  x: 10,
  y: 20,
}

//Function, showing the input type and then after the arrow the return type which is void, which means nothing
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
}
