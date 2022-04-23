// Interfaces create a new type, describing the property
// names and value types of an object

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true
};
// Here we have a type annotation that is getting pretty long
// So we're going to make an interface so we don't have to duplicate
// or make long annotations
const printVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => {
  console.log(`Name: ${vehicle.name}`)
  console.log(`Year: ${vehicle.year}`)
  console.log(`broken: ${vehicle.broken}`)
}

printVehicle(oldCivic);

// Here is an interface, we want them generic like vehicle
// This is like a variable that refers to a type
interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const printVehicle2 = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`)
  console.log(`Year: ${vehicle.year}`)
  console.log(`broken: ${vehicle.broken}`)
}

// We get no warning because it satisfies the interface
printVehicle2(oldCivic);