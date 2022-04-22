const profile = { 
  name: 'alex',
  age: 20,
  coords: { 
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }

};

// example of object destructuring and how we specify type
// You mirror the structure because if you were destructuring
// multiple variables it would not make sense without this
const { age }: {age: number} = profile

const { 
  coords: {lat, lng}}: 
{ coords : {lat: number, lng: number}} = profile;
  