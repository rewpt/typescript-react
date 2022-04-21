// We will only have to use these annotation if:
// 1) Declare a var on one line and initialize on another
let declaredVar;
declaredVar = 55;


// 2) When we want a variable to have a type that can't be inferred
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}





let words = ['red', 'green', 'blue'];

// will have an any type unless I you add in some type annotation
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}


// 3) When a function returns the 'any' type and we need to clarify the value

// In this case JSON.parse has no idea what type will be returned so it says we give back the any type
// Any is still a type, it just means TS doesn't know what's going on (which is bad because that's it's job)
const json = '{"x": 10, "y": 20}';
const coordinates: {x: number; y: number} = JSON.parse(json);
console.log(coordinates); 

