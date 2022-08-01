//A constructor is a special function that creates and initializes an object instance of a class

//You can create a class object and take values for it without ha ving to create a class first
// syntax
/* let constructorName = function(param1, param2){
this.param1 = param1;
this.param2 = param2;
} */

let stuDetails = function(name, age, matricno){
    this.name = name;
    this.age = age;
    this.matricno = matricno;


};

stuDetails.prototype.getName = function(){
    return this.name;
};

stuDetails.prototype.getAge = function(){
    return this.age;
};

stuDetails.prototype.getMatricno = function(){
    return this.matricno;
};



let emp1 = new stuDetails('Michael', 22, 62609 );
let emp2 = new stuDetails('Peter', 23, 59784);
//or
const emp3 = new stuDetails('Dami', 21, 45637)

console.log(emp1.getAge());
console.log(emp2.getName());
console.log(emp3.getAge());