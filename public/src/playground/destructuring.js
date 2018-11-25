/*
const person = {
    name: 'Kevin',
    age: 46,
    location: {
        city: 'Philadelphia',
        temp: 102
    }
};

//destructuring example
const {name = 'Anonymous', age} = person;
//const name = person.name;
//const age = person.age;

console.log(`${name} is ${age}.`);
const {city, temp:temperture} = person.location;
if(city && temperture) {
    console.log(`it's ${temperture} in ${city}`)
}
*/

const address = ['5123 Autumn Street', 'Grovetown', 'GA', '30813'];

//skip the first item
const [, city, state, zip] = address;

console.log(`You are in ${city} ${state}`);