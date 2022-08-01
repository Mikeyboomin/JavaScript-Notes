// let iPhones = ['iPhone X', 'iPhone XS', 'iPhone XS Max'];
// console.log(iPhones);

// let consoles = new Array('steam deck', 'playstation 5', 'xbox series x');
// console.log(consoles);

// console.log(consoles[2]);

// consoles[2] = 'xbox series s';
// console.log(consoles[2]);
// console.log(consoles);

// iPhones.push('iPhone 11');
// console.log(iPhones);

// console.log(iPhones.length);

// let x;
// for(x in iPhones){
//     console.log(iPhones[x]);
// }

// let y;
// for(y of consoles){
//     console.log(y);
// }






// Useful ARRAY METHODS
// array.pop()  //removes the last item of the array

let fruits = ['Grapes', 'Apples', 'Watermelon', 'Peach'];
fruits.pop();
console.log(fruits);

// array.shift()  //removes the first element of the array
let cars = ['Honda', 'Toyota', 'Mercedes', 'BMW', 'Ferrari'];
console.log(cars);
cars.shift()
console.log(cars);

// array.push()  // adds new elements to the end of the array
cars.push('Lamborghini');
console.log(cars);

// array.unshift()  // adds new elements to the beginning of the array

cars.unshift('Volkswagen');
console.log(cars);

// delete array[];  // deletes elements of the array by specific index
delete cars[0];
console.log(cars);

cars[0] = 'Aston Martin';
console.log(cars);

// array.splice();  // removes elements of the array from specified start element to end element
cars.splice(0,2);
console.log(cars);

// array.slice()  // can be use to cut out some part of an array

let superCars = cars.slice(2,5);
console.log(superCars);

// how to concatenate arrays
let oddNumbers = [1,3,5,7];
let evenNumbers = [2,4,6,8];

let numbers;

// you can also concatenate more than two arrays
let primeNumbers = [2, 3, 5];
numbers = oddNumbers.concat(evenNumbers, primeNumbers);
console.log(numbers);

