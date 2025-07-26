// 1. შექმენით კლასი სახელად "Person". დააგენერირეთ ობიექტი, რომელსაც ექნება "name" და "age"
// ფროფერთები და "sayHello" მეთოდი(ეს ყველაფერი კლასშივე უნდა გაუწეროთ).
// გამოაკონსოლეთ ობიექტის ფროფერთები.
//
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//
//   sayHello() {
//     return "hi";
//   }
// }
//
// const person = new Person("Alice", 25);
// console.log(person.name);
// console.log(person.age);
// console.log(person.sayHello());


// 2. მემკვიდრეობითობა: შექმენით კლასი "Student", რომელიც იქნება "Person"-ის შთამომავალი.
// დაამატეთ ახალი "grade" ფროფერთი.

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//
//     sayHello() {
//         return "hi";
//     }
// }
//
// class Student extends Person {
//   constructor(name, age, grade) {
//     super(name, age); // ამ სუპერ ჩაშენებული ფუნქციით ვიძახებთ მშობელს და მემკვიდრეობით მისგან მოგვაქვს
//     this.grade = grade;
//   }
// }
//
// const student = new Student("Alice", 25, 90);
// console.log(student.grade);


// 3. სტატიკური მეთოდი: შექმენით კლასი "Calculator" სტატიკური მეთოდით,
// რომელიც პარამეტრად მიიღებს ორ რიცხვს და დააბრუნებს მათ ჯამს.

// class Calculator {
//     //ეს ქქვედა მეთოდი გამოვა სტატიკური, რადგან ვიყებენ სიტყვას static
//   static sum(a, b) {
//     return a + b;
//   }
// }
// console.log(Calculator.sum(5, 10));

// 4. Getter and Setter: შექმენით კლასი "Temperature" private ფორფერთით - "celsius".
// დაამატეთ getter და setter მეთოდები. getter მეთოდი უნდა აბრუნებდეს celsius ფროფერთის.
// setter მეთოდი პარამეტრად უნდა იღებდეს ფარენჰეიტს, გადაჰყავდეს ცელსიუსში და ანიჭებდეს მიღებულ
// მნიშვნელობას celsius ფროფერთის.

class Temperature {
  #celsius;
  constructor(celsius) {
    this.#celsius = celsius;
  }

  get celsius() {
    return this.#celsius;
  }

  set celsius(fahrenheit) {
    this.#celsius = ((fahrenheit - 32) * 5) / 9;
  }
}

const temperature = new Temperature(25);
console.log(temperature.celsius);
temperature.celsius = 77;
console.log(temperature.celsius);
