class User {
    #creditNumber; //ანუ ჯერ აქ ვქმნი ძიეზის ნიშნით და ქვევით ვიყენებ ძიეზის ნიშნით
    constructor(name, creditNumber) {
        this.name = name;
        this.#creditNumber = creditNumber; // privet property: დაფარული ფროფერთი,
                                          // ანუ აქ ვიყენებ იმ შექმნილს და გარედან ამ
                                         // პროფერთის ვერ მივწვდები
    }

    sayHi() {
        console.log(this.name);
    }

    get creditNumber() {
        return this.#creditNumber;  // ამის მეშვეობით შიგნიდან მივწვდებით.
    }

    set creditNumber(newCreditNumber) {
        this.#creditNumber = newCreditNumber;
    }
}

const user = new User("Alice", "123");
console.log(user.creditNumber);

user.name = "Tako";
user.creditNumber = "456";
console.log(user.creditNumber);