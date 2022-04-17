// We will only have to use these annotation if:
// 1) Declare a var on one line and initialize on another



// 2) When we want a variable to have a type that can't be inferred


// 3) When a function returns the 'any' type and we need to clarify the value

// In this case JSON.parse has no idea what type will be returned so it says we give back the any type
// Any is still a type, it just means TS doesn't know what's going on (which is bad because that's it's job)
const json = '{"x": 10, "y": 20}';
const coordinates: {x: number; y: number} = JSON.parse(json);
console.log(coordinates); 

