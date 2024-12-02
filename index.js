// Завдання 1
function Account({ login, email }) {
    this.login = login;
    this.email = email;
}

Account.prototype.getInfo = function() {
    console.log(`Login: ${this.login}, Email: ${this.email}`);
};

const mangoAccount = new Account({
    login: 'Mangozedog',
    email: 'mango@dog.woof',
});

mangoAccount.getInfo();

const polyAccount = new Account({
    login: 'Poly',
    email: 'poly@mail.com',
});

polyAccount.getInfo();

// Завдання 2
class User {
    constructor({ name, age, followers }) {
        this.name = name;
        this.age = age;
        this.followers = followers;
    }

    getInfo() {
        console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
    }
}

const mangoUser = new User({
    name: 'Mango',
    age: 2,
    followers: 20,
});

mangoUser.getInfo();

const polyUser = new User({
    name: 'Poly',
    age: 3,
    followers: 17,
});

polyUser.getInfo();

// Завдання 3
class Storage {
    constructor(items) {
        this.items = items;
    }

    getItems() {
        return this.items;
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(item) {
        this.items = this.items.filter(i => i !== item);
    }
}

const storage = new Storage([
    'Нанітоіди',
    'Пролонгер',
    'Залізні жупи',
    'Антигравітатор',
]);

console.table(storage.getItems());

storage.addItem('Дроїд');
console.table(storage.items);

storage.removeItem('Пролонгер');
console.table(storage.items);

// Завдання 4
class StringBuilder {
    constructor(value) {
        this._value = value;
    }

    get value() {
        return this._value;
    }

    append(str) {
        this._value += str;
    }

    prepend(str) {
        this._value = str + this._value;
    }

    pad(str) {
        this._value = str + this._value + str;
    }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value);

builder.prepend('^');
console.log(builder.value);

builder.pad('=');
console.log(builder.value);

// Завдання 5
class Car {
    constructor({ maxSpeed, price }) {
        this.speed = 0;
        this._price = price;
        this.maxSpeed = maxSpeed;
        this.isOn = false;
        this.distance = 0;
    }

    static getSpecs(car) {
        console.log(`maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car._price}`);
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    turnOn() {
        this.isOn = true;
    }

    turnOff() {
        this.isOn = false;
        this.speed = 0;
    }

    accelerate(value) {
        this.speed = Math.min(this.speed + value, this.maxSpeed);
    }

    decelerate(value) {
        this.speed = Math.max(this.speed - value, 0);
    }

    drive(hours) {
        if (this.isOn) {
            this.distance += hours * this.speed;
        }
    }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);

console.log(mustang.price);
mustang.price = 4000;
console.log(mustang.price);
