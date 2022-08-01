// class naming usually starts with a capital letter
// syntax
/*  class ClassName{

} */

class Student{

    setDetails(name, matricno){
        this.name = name;
        this.matricno = matricno;
    }
}

let student1 = new Student();
student1.setDetails('Michael', '2016/1/62609CT');

console.log(student1.name);
console.log(student1.matricno);

// a class always has a constructor even if you do not provide it
// constructor of a class is called when you instantiate a class or create an object of a class