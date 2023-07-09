class car{
    constructor(name,np,type){
        this.name = name;
        this.np = np;
        this.type = type;
    }
    getAllData(){

    }

    set setName(nam){
        this.name = nam;
    }

    get getNp(){
        console.log(this.np);
    }

    static getClass(){
        console.log('this is static property')
    }

}

class electricCar extends car{
    constructor(np,name,battery){
        super(np,name);
        this.battery= battery;
    }
}

let vehicle1 = new car('gobde','fhduif32en23iu','petrol')
let vehicle2 = new electricCar('403192','nexon','43')
vehicle1.getAllData;
vehicle1.getNp;
vehicle1.setName= 'maruti';
console.log(vehicle1);
console.log(vehicle2)

