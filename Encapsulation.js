// In every OOP there are 4 basic concepts
/*
encapsulation
inheritance
polymorphism
abstraction
*/

// 

class Student{


    setDetails(name, matricno, age){
        this.name = name;
        this.matricno = matricno;
        this.age = age;
    }

    getStuName(){
        return (this.name);
    }
    
    getStuMatric(){
        return (this.matricno);
    }
    getStuAge(){
        return (this.age);
    }
}



 let stu1 = new Student();

stu1.setDetails('Michael', 62609, 22);

console.log(stu1.getStuName());

let stu2 = new Student();

stu2.setDetails('John', 63407, 25);

console.log(stu2.getStuName());

class Employee{

    setDetails(name, age, address){
        this.name = name;
        this.age = age;
        this.address = address;
    }

    getEmpName(){
        return(this.name);
    }

    getEmpAge(){
        return(this.age);
    }

    getEmpAddress(){
        return(this.address);
    }
}

let emp1 = new Employee;
emp1.setDetails('Peter', 25, 'No 5 Sinco Avenue');
console.log(emp1.getEmpAge());

