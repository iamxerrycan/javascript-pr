let person ={
    name:"raju",
    age: 25
}

let person2 = {
    name: "saomething",
    age: 33
}

function employedetails(state  , dist ) {
    return state + this.name + dist + this.age 
}

const res = employedetails.call(person  , "kol" , "ko")  
console.log(res);

const res2 = employedetails.apply(person2,["kol" , "west"])
console.log(res2);

const res3 = employedetails.bind(person2)
console.log(res3("jamanagar" ,"jamuna "));
