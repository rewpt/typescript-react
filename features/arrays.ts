const carMakers = ['ford', 'toyota', 'chevy'];
// The type annotation is string[][], which we would have to put
// in if we did no explicitly state what the values are in the strings
const carsByMake = [
  ['f150'],
  ['corolla'],
  ['corvette'],
]

// This gives us the same type annotation for the array

const carsByMake1: string[][] = [];

// corner cases Help
// Help with inference when extracting values
// Here we know these will be type string already
const car1 = carMakers[0];
const myCar = carMakers.pop;

// Prevent incompatible values
// carMakers.push(100); this does not work

// Help with 'map'
// Knows car will be a string so gives us autocomplete on car for strings
carMakers.map((car: string): string => {
  return car.toUpperCase();
} ); 