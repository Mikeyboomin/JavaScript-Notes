//the process of representing something in different forms
class Cars{

    constructor(name){
        this.name = name;
    }

    gas(){
        console.log(this.name +' needs gas')
    }
}

let benz = new Cars('Mercedes');
benz.gas();

class Limo extends Cars{
    gas(){
        super.gas();
        console.log(this.name +' needs premium gas');
    }
}

let hummer = new Limo('Hummer-Limo');

hummer.gas();