// type addFunc = (num1: number, num2: number) => number;
interface addFunc{
  (num1: number, num2: number): number;
}
let addFunc: addFunc;
addFunc = (n1: number, n2: number) => {
  return n1 + n2;
}

interface Nameble {
  name: string;
  nickName?: string
}
const namable: Nameble = {
  name: 'Quill',
  nickName: 'Quilla'
}

interface Human extends Nameble {
  readonly name: string;
  age: number;
  greeting(message: string): void;
}

class Developer implements Human {
  constructor(public name: string, public age: number){}
  greeting(message: string = 'hello') {
    console.log('Hello!');
  }
}

const tmpDeveloper = {
  name: 'Quill',
  age: 38,
  experience: 3,
  greeting(message: string) {
    console.log(message);
  }
}

let user: Human = tmpDeveloper;
user = tmpDeveloper;
