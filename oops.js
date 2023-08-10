//honeybadger-help

// class peron{
//  constructor(name , age , ...props){
//     this.name = name;
//     this.age = age;
//  }
//     getname(){
//         return this.name
//     }

//     getAge(){
//         return this.age
//     }

// }

// let newPerson =  new peron("raj" , 12)
// newp = newPerson.getAge()
// console.log(newp);

//1 javascript object ============================ 1

// const car = {
//     name: "thar",
//     year: 2044,
//     colour: "black",

//     details: function(){
//         return `its ${this.colour} ${this.name} of ${this.year} `
//     }
// }

// let res = car.details()
// console.log(res);
// console.log(car.colour);

// change , delete, checking  variable  2===================================2

// const car = {
//     name: "thar",
//     'year': 2044,
//     colour: "black",
//     contry: "india" ,

//     details: function(){
//         return `its ${this.colour} ${this.name} of ${this.year} `
//     }
// }

// car.len = "24m"
// car.contry = "nepal"
// delete car.len;
// console.log(car.contry , car.len);
// console.log('name'  in car);

// 3 creating class-method in javascript  / add method ====================================

// class job {
//     constructor(name , sallary ,isRemote ){
//         this.name = name,
//         this.sallary = sallary,
//         this.isRemote = isRemote

//     }

//     working(){
//         return "yes working now ";
//     }

//     leave(){
//         return "they leave at 6 pm"
//     }

// }

// let job1 = new job('software ', 200000 , true)
// let job2 = new job("QA" , 30000, false)

// console.log( job1 , job2 );
// console.log(job1.working());

// computed properties ==================================

// let applythrough = "applythroughnaukari"; // check later some issue

// class job {
//     constructor(name , sallary ,isRemote ){
//         this.name = name,
//         this.sallary = sallary,
//         this.isRemote = isRemote;

//     }
//     [applythrough](){
//         if (applythrough === 'apply through naukari'){
//             return 'apply throuh naukari ';
//         }else if(applythrough === "linkdin"){
//             return 'apply through linkdin';

//         }
//     }

// }

// let job1 = new job( "software", 20000 ,true)
// console.log(job1.applythroughnaukari());

//4  getter and setter method =====================

class Client {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }
  get name() {
    if (user === "Lawyer") {
      return this._name;
    } else {
      return "You are not authorized to view this information";
    }
  }
}

let user = "dancer";
const peron = new Client("raj" , 24)
console.log(peron.name);