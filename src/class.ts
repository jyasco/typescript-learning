class Person {
  readonly id: number = 32;
  constructor(public readonly name: string, private age: number) {
    this.id = 31;
    this.name = 'hehh'
    this.id = 30;
  }

  incrementAge(){
    this.age += 1;
  }
  greeting(this: Person){
    console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
  }
}

 const quill = new Person('Quill', 38);
 quill.incrementAge();
 quill.greeting();