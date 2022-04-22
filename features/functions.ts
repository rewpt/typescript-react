
//we declare the types of the parameters and then the return type
const add = (a: number, b: number): number => {
  return a + b;
}

// We should always specify our return type to avoid errors like
// not returning anything in our function;
// for example this function won't throw any error because
// it's not returning anything and we haven't specified a return type
const subtract = (a:number, b:number) => {
  a - b;
}

//for anonymous functions the syntax is very similar
function divide(a: number, b:number): number {
  return a/b;
}

// we can also assign this anonymous function
const multiply = function(a:number, b:number): number {
  return a * b;
}

// If we know there is no return type we can use 'void' type
// This can return: nothing, null or undefined
const logger = (message: string): void => {
  console.log(message);
}

// If we're throwing an error we can use the 'never' type
const throwError = (message: string): never => {
  throw new Error(message);
}

const forecast = {
  date: new Date(),
  weather: 'sunny',
}

const logWeather = (forecast: {date: Date, weather: string}): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
}

// This is how we would destructure this argument with es2015 syntax
// Here we destructure and annotate in two separate statements
const logWeather1 = ({date, weather}: {date: Date, weather: string}) => {
  // advantage of the destructuring is we can just use vars date and weather
  console.log(date);
  console.log(weather);
}

logWeather(forecast);