// extends is the keyword used for inheritance
/*syntax 

class Child extends Parent{

}

*/

class Vehicle{

    setName(name){
        this.name = name;
    }

    startEngine(){
        console.log('Engine has started for '+this.name);
    }

    stopEngine(){
        console.log('Engine has stopped for '+this.name);
    }
}

class Honda extends Vehicle{
    topSpeed(speed){
        console.log('Topspeed for '+this.name+ ' is '+speed);
    }
}

let myCar = new Honda;
myCar.setName('Accord');
myCar.startEngine();
myCar.stopEngine();
myCar.topSpeed(200);
