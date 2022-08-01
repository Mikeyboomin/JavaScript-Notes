//Abstraction is a way of hiding implementation details and only showing functionality
// basically it's hide details, show essentials

function student(name, age, pocketMoney){
    this.name = name;
    this.age = age;
    this.pocketMoney = pocketMoney;
    let monthlyBonus = 5000;

    this.calculateFinalPocketMoney = function(){
        let finalSalary = pocketMoney + monthlyBonus;
        console.log('Final Salary is ' +finalSalary);
    }

    this.getStudentDetails = function(){
        console.log('Name: '+this.name+" Age: "+this.age+' Pocket Money: '+this.pocketMoney);
        this.calculateFinalPocketMoney();
    }
}

let emp1 = new student('Michael', 22, 5000);
emp1.getStudentDetails();

/*emp1.monthlyBonus = 10000;
emp1.calculateFinalPocketMoney();*/

