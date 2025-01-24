"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    incrementAge() {
        this.age += 1;
    }
    greeting() {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
    }
}
class Teacher extends Person {
}
const teacher = new Teacher('Bob', 40);
teacher.incrementAge();
teacher.greeting();
