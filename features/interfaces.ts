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
  year: Date;
  broken: boolean;
  //This indicates a function that will return a string

}
interface Reportable {
  summary(): string;
}

const oldCivic2 = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }

};
const myDrink = {
  color: 'brown',
  carbonated: true,
  sugar: 50,
  summary(): string {return `I have ${this.sugar}% sugar`}
}
// We can keep in mind that to satisfy an interface it just needs to include
// what is included in the interface but we can also add more to the object
const printSummary = (vehicle: Reportable, drink: Reportable): void => {
  console.log('new', vehicle.summary());
  console.log('drink', drink.summary());
}

// We get no warning because it satisfies the interface
printSummary(oldCivic2, myDrink);