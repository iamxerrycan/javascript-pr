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

// 2 change , delete, checking  variable  2===================================2

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

// 4 computed properties ==================================

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

//5  getter and setter method =====================

// class Client {
//   constructor(name, age) {
//     this._name = name;
//     this._age = age;
//   }
//   get name() {
//     if (user === "Lawyer") {
//       return this._name;
//     } else {
//       return "You are not authorized to view this information";
//     }
//   }
// }

// let user = "dancer";
// const peron = new Client("raj" , 24)
// console.log(peron.name);

// 6 settter method ==================================================

//==some code issue check later 

// class Client {
//   constructor(name, age) {
//     this._name = name;
//     this._age = age;
//   }
//   set name(newName) {
//     if (userType === "Lawyer" && verifiedData === true) {
//       this._name = newName;
//     } else {
//       console.log("You are not authorized to change this information");
//     }
//   }
// }
// let userType = "Lawyer";
// let verifiedData = true;
// let client = new Client("Benjamin Adeleye", 30);
// client.name = "Adeleye Benjamin";
// console.log(client.name); // yaha tak 



// Object
// As I already mentioned above, Objects are like real-life entities. They have their properties and methods.

// Consider a car as an object. The car has so many characteristics like colour, company name, modal name and price, etc. On a car, we can perform actions like start, break, and stop. Here characteristics of a car are properties, and actions are methods.

// If you are using javascript for a while, you may use objects many times in your code but maybe not in an OOP way.

// Let me create one user object here.

// const user = {
//   name: 'Nehal Mahida',
//   userName: 'nehal_mahida',
//   password: 'password:)',
//   login: function(userName, password) {
//     if (userName === this.userName && password === this.password) {
//       console.log('Login Successfully');
//     } else {
//       console.log('Authentication Failed!!');
//     }
//   },
// };


// user.login('nehal', 'nehal');
// user.login('nehal_mahida', 'password:)');

// Authentication Failed!!
// Login Successfully
// The above code is pretty self-explanatory. I am creating one user object having some properties and actions that he can perform.

// Nothing new, right??

// Let's understand some more OOP concepts.

// Class
// Class is a blueprint of a real-life entity. It describes how the object will look alike, what characteristics it holds and what kind of actions we can perform on it.

// Class is just a template. You can't perform any actions on it. Consider class is your website UX Design(wireframes). You create it to get an idea of how your website UI will look alike at the end. Users can't do interactions with your wireframes as they will do on an actual website.

// We instantiate the object from a class. We can create many instances of a class.

// Let's take an example.
// class User {
//   #password;
//   constructor(name, userName, password) {
//     this.name = name;
//     this.userName = userName;
//     this.#password = password;
//   }

//   login(userName, password) {
//     if (userName === this.userName && password === this.#password) {
//       console.log('Login Successfully');
//     } else {
//       console.log('Authentication Failed!!');
//     }
//   }

//   setPassword(newPassword) {
//     this.#password = newPassword;
//   }
// };

// const raj = new User('Nehal Mahida', 'nehal_mahida', 'password:)');
// const js = new User('JavaScript', 'js', 'python:)');


// nehal.login('nehal_mahida', 'password:)'); // Login Successfully
// js.login('js', 'python:)'); // Login Successfully

// console.log(nehal.name); // Nehal Mahida
// console.log(nehal.password); // undefined
// //console.log(nehal.#password); // Syntax Error

// nehal.setPassword('new_password:)');
// nehal.login('nehal_mahida', 'password:)'); // Authentication Failed!!
// nehal.login('nehal_mahida', 'new_password:)'); // Login Successfully


// Here I have created a class named User, which has some properties and methods. Then I am creating instances of the class using new User() and passing the values of required properties.

// Did you see one constructor method which we never called in our code??

// Actually, The method has been called 🙄

// When we create an object from a class using the new keyword javascript internally calls the constructor method which initialised the public and private properties of a class. The object here can access all the public properties and methods of a class.

// What is public and private properties??

// By default, all the properties declared in the class are public means you can call and modify them from outside the class. You can declare public properties in or out of the constructor. Here name and userName are public properties.

// What about private?

// Again look at the code. Did you notice the password is written outside of the constructor method prefixed with #?

// Hash(#) indicates that this property is private to the class and only methods that are declared inside the class can access it. Private properties should be declared before they were used.

// When I tried to print the password, I got undefined as I don't have any member named as 'password', then I tried it with '#password' that gave me a syntax error because the '#password' is private.

// To print/modify the private properties, we need getter/setter methods. Here I have created one method that set the new password.

// The following concepts are the four pillars of OOP langueage.

// Encapsulation
// Encapsulation is defined as binding the data and methods into a single unit to protect it from outside access. Just like a pill contains medication inside of its coating.

// In the context of class, some properties are not directly accessed from outside of the class. You need to call the responsible method for the properties.

// Sounds familiar?

// Yes, You guess it right. It's like creating a getter/setter method for the private properties we declare in a class.

// In the above example, we already used encapsulation. We bind(logically) private property password with a public method setPassword(). You also have one getter method, which returns the current value of a private property.

// Abstraction
// People often misunderstood encapsulation with abstraction. Abstraction is one step ahead of encapsulation. Abstraction is defined as showing only the essential things and hiding the inner implementation.

// Let's take an example of a car. On a Car, we can perform some actions like start, break and stop. Whenever you call one of these actions, it gives you some result. These actions have certain sub-actions which are hidden from you, but you don't need to care about those sub-actions.

// This is how car company uses an abstraction of functionality to give their customer a smooth experience.

// Let's take another example of abstraction. Suppose you are using some third-party react component for your front-end project. This component provides many props and methods for your customisation. This component is no magic it internally uses the same HTML tags, CSS and javascript. But now you don't need to worry about those things. You just need to set props and call methods based on your requirements. That's an abstraction.

// Let's code 🤩
// class User {
//   name;
//   email;
//   #password;
//   constructor() {}

//   #validateEmail(email) {
//     // check email is valid or not.
//     return true;
//   }

//   #validatePassword(password) {
//     // check password is satisfying the minimum requirements or not.
//     return true;
//   }

//   signUp(name, email, password) {
//     let isValidated = false;
//     isValidated = this.#validateEmail(email);
//     isValidated &&= this.#validatePassword(password);

//     if (isValidated) {
//       this.name = name;
//       this.email = email;
//       this.#password = password;
//       // add user in your db.
//       console.log('User registered successfuly');
//     } else {
//       console.log('Please enter correct Details!!');
//     }
//   }

//   login(email, password) {
//     if (email === this.email && password === this.#password) {
//       console.log('Login Successfully');
//     } else {
//       console.log('Authentication Failed!!');
//     }
//   }

//   #isRegisteredUser(email) {
//     // check user is registered or not.
//     return true;
//   }

//   resetPassword(email, newPassword) {
//     if (this.#isRegisteredUser(email)) {
//         this.#password = newPassword;
//         console.log('Operation performed successfully');
//     }
//     else {
//       console.log('No account found!');
//     }
//   }
// };

// const karan = new User();
// nehal.signUp('Nehal Mahida', 'nm@gmail.com', 'password:)'); // User registered successfuly

// nehal.#validateEmail('nm@gmail.com'); // Syntax Error.

// nehal.login('nm@gmail.com', 'password:)'); // Login Successfully
// nehal.resetPassword('nm@gmail.com', ''); // Operation performed successfully


// In the above example, we have introduced some private methods. The methods are doing some work and they are not exposed to the outside of the class.

// These methods are called by the publically available methods.

// As a developer, I just need to give the details I received from the UI and call the responsible method.

// In OOP languages like Java, we have a concept of abstract classes and interfaces. That's not possible in javascript.

// Otherwise, we can create one abstract class and that class can be used by another class to achieve similar functionality.

// So basically we can say we are using encapsulation to achieve abstraction. 😊

// Inheritance
// When one class derived the properties and methods of another class it is called inheritance in OOP. The class that inherits the property is known as subclass or child class and the class whose properties are inherited is known as a superclass or parent class.

// Why do we need inheritance?

// Inheritance is a very important concept in OOP. The main advantage of inheritance is reusability. When a child class inherits from parent class we don't need to write the same code again. It becomes very reliable when we need to do some change in properties just change it in a parent class and all the child classes will automatically inherit the change. Inheritance also promotes code readability.

// Let's code...
// class User {
//   #password;
//   constructor(email, password) {
//     this.email = email;
//     this.#password = password;
//   }

//   login(email, password) {
//     if (email === this.email && password === this.#password) {
//       console.log('Login Successfully');
//     } else {
//       console.log('Authentication Failed!!');
//     }
//   }

//   resetPassword(newPassword) {
//     this.#password = newPassword;
//   }

//   logout() {
//     console.log('Logout Successfully');
//   }
// }

// class Author extends User {
//   #numOfPost;

//   constructor(email, password) {
//     super(email, password);
//     this.#numOfPost = 0;
//   }

//   createPost(content) {
//     // add content to your DB. :)
//     this.#numOfPost++;
//   }

//   getNumOfPost() {
//     return this.#numOfPost;
//   }
// }

// class Admin extends User {
//   constructor(email, password) {
//     super(email, password);
//   }

//   removeUser(userId) {
//     // remove this userId from your DB.
//     console.log('User Removed successfully.');
//   }
// }

// const roy = new Author('nm@gmail.com', 'password:)');
// nehal.login('nm@gmail.com', 'password:)');
// nehal.createPost('I hope you are enjoying this article. Don\'t forget to leave your feedback. :)');
// nehal.createPost('I am tired, Do you wanna buy me a coffee? :)');
// console.log(nehal.getNumOfPost()); // 2

// const maanav = new Admin('jason@gmail.com', '[Object] [object]');
// json.login('jason@gmail.com', '[Object] [object]');
// json.resetPassword('{id: 1}');
// json.login('jason@gmail.com', '{id: 1}');
// json.removeUser(12);


// In the above example, the Author and Admin classes inherit the property of the User class using extends and super keywords.

// The extends keyword is used to establish a parent-child relationship between two classes. In the first case, the Author becomes sub-class and the User becomes parent class.

// Sub-class has access to all the public and protected members of a superclass. In addition, It can have its own properties and methods. This is how we can achieve reusability through inheritance.

// The super keyword is a special keyword. Calling super in the child's constructor invokes the parent constructor. That's how we are initialising the properties in the Author and Admin classes.

// The child class can also override the methods of a parent class. This introduces the concept of polymorphism.

// Polymorphism
// Polymorphism means 'more than one form'. Like us, We the software engineers can work on the frontend, backend, DevOps and even testing. 😅

// Polymorphism has two types.

// Compile time Polymorphism
// Runtime Polymorphism
// Function overloading is a type of compile-time polymorphism. Here, we are creating more than one function with the same name and different parameters or types.

// Function overloading is not supported in JavaScript because if you create functions with the same name, Javascript will override the last defined function with former functions.

// Method overriding is a type of runtime polymorphism. Remember I told you that you can override the methods of parent class in the child class? That is method overriding.

// Let's take example.
class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  login(email, password) {
    if (email === this.email && password === this.password) {
      console.log('Login Successfully');
    } else {
      console.log('Authentication Failed!!');
    }
  }
}

class Author extends User {
  #numOfPost;

  constructor(email, password) {
    super(email, password);
    this.#numOfPost = 0;
  }

  createPost(content) {
    // add content to your DB. :)
    this.#numOfPost++;
  }

  getNumOfPost() {
    return this.#numOfPost;
  }
}

class Admin extends User {
  constructor(email, password) {
    super(email, password);
  }

  login(email, password) {
    // add extra layer of security as this is an admin account.
    const isValidAdmin = true; // we can have some 2FA type security check here.
    if (email === this.email && password === this.password && isValidAdmin) {
      console.log('Admin Login Successfully');
    } else {
      console.log('Authentication Failed!!');
    }
  }

  removeUser(userId) {
    // remove this userId from your DB.
    console.log('User Removed successfully.');
  }
}

const nehal = new Author('nm@gmail.com', 'password:)');
nehal.login('nm@gmail.com', 'password:)'); // Login Successfully

const json = new Admin('jason@gmail.com', '[Object] [object]');
json.login('jason@gmail.com', '[Object] [object]'); // Admin Login Successfully


// Here, the Author and Admin both inherit the User class. Both classes have the login method of the User class. Now I need some extra level of verification for the admin account, so I have created a login method in the Admin class. It will override the parent's login method.

// When an object of the Admin class calls the login method, it will invoke a function call to the login method of the Admin class.

// This is how we have achieved polymorphism using method overriding.

// That's it. We have covered all the concepts of OOP with JavaScript. 🤩

// Note: All the information above is based on my knowlege and research. If you find anything wrong here, please correct me in the comment section. Happy Learning 🙂

// If you like this article like share and mark 🔖 this article!

// If you are on Twitter, give a follow, I share amazing resources to learn web development. 🙏🏻

// The feedbacks are appreciated. 🤗

// 🏃‍♂️ Let's Connect 👇