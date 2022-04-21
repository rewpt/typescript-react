
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