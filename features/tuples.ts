// In a tuple we put our values in a specific order to represent one thing
// If this is a drink we are thinking color, carbonated, sugar content
// we have to memorize the order and not screw it up
const drink = ['brown', true, 40];

// This is the drink represented in a class
const drinkObj = {
  color: 'brown',
  carbonated: true,
  sugar: 40
}

//Annotated tuple
// Now we have some protection from having the wrong value in the wrong spot
const pepsi: [string, boolean, number] = ['brown', true, 40];

// If we have multiple things we want to fit this we can
// make a type annotation for the array like so:
// Now we can make multiple drinks of this type
type Drink1 = [string, boolean, number];
const sprite: Drink1 = ['clear', true, 50];

// The most common time to use a tuple is representing a single
// row of a CSV file
// However we don't use tuples often because they're very unclear
const carSpecs: [number, number]= [400, 3354];
// This is much more obvious at a glance of what we're talking about
const carStats = {
  horsepower: 400,
  weight: 3354
}
