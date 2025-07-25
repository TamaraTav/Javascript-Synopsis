// 1. შექმენით კლასი სახელად "Person". დააგენერირეთ ობიექტი, რომელსაც ექნება "name" და "age"
// ფროფერთები და "sayHello" მეთოდი(ეს ყველაფერი კლასშივე უნდა გაუწეროთ).
// გამოაკონსოლეთ ობიექტის ფროფერთები.
//
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return "hi";
  }
}

const person = new Person("Alice", 25);
console.log(person.name);
console.log(person.age);
console.log(person.sayHello());


// 2. მემკვიდრეობითობა: შექმენით კლასი "Student", რომელიც იქნება "Person"-ის შთამომავალი.
// დაამატეთ ახალი "grade" ფროფერთი.
