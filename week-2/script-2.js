// 1. დაწერეთ პროგრამა, რათა შეამოწმოთ რიცხვი ლუწია თუ კენტი.

/*
let x = Number(prompt('Enter the number'));

if (x < 0) {
  console.log('Wrong Input');
} else if (x % 2 === 0) {
  console.log('Even');
} else {
  console.log('Odd');
}
*/

// 2. დაწერეთ პროგრამა, რათა შეამოწმოთ სტრიქონი ცარიელია თუ არა.
/*
let str = '    temo   ';
if (str.trim().length === 0) {
  console.log('Empty');
} else {
  console.log('Not Empty');
}
*/

// 3. დაწერეთ პროგრამა, რომელიც შეეკითხება მომხმარებელს ქულას და გამოიტანს შესაბამის შეფასებას. 91-100 -> A; 81-90 -> B, 71 -> 80: C, 61-70 -> D, 51-60 -> E, 0-50 -> ჩაიჭრა. გამოიყენეთ ორივე - if/else if/else და switch.
/*
let score = Number(prompt('Enter your score'));

if (score > 100 || score < 0) {
  console.log('Invalid score');
} else if (score >= 91 && score <= 100) {
  console.log('A');
} else if (score >= 81) {
  console.log('B');
} else if (score >= 71) {
  console.log('C');
} else if (score >= 61) {
  console.log('D');
} else if (score >= 51) {
  console.log('E');
} else {
  console.log('Failed');
}

switch (true) {
  case score > 100 || score < 0:
    console.log('Invalid score');
    break;
  case score >= 91 && score <= 100:
    console.log('A');
    break;
  case score >= 81:
    console.log('B');
    break;
  case score >= 71:
    console.log('C');
    break;
  case score >= 61:
    console.log('D');
    break;
  case score >= 51:
    console.log('E');
    break;
  default:
    console.log('Failed');
}
*/

// 4. დაწერეთ პროგრამა, რომელიც ინფუთის სახით მიიღებს თვის რიცხვს (1 იანვრისთვის, 2 თებერვლისთვის და ა.შ.) და ამობეჭდავს დღეების რაოდენობას ამ თვეში switch/case-ის გამოყენებით.

// 4. დაწერეთ პროგრამა, რომელიც ინფუთის სახით მიიღებს თვის რიცხვს (1 იანვრისთვის, 2 თებერვლისთვის და ა.შ.) და ამობეჭდავს დღეების რაოდენობას ამ თვეში switch/case-ის გამოყენებით.

/*
let monthNumber = Number(prompt('Enter the month number'));

switch (monthNumber) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log(31);
    break;
  case 2:
    console.log('28 or 29');
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log(30);
    break;
  default:
    console.log('Wrong month number');
}
*/
