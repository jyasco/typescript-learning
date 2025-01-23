let hasValue = true; //hasValueはtrueかfalseのどちらかの値を持つ
let count: number = 10;
let single: string = 'hello'

let hello: string;
hello = 'hello'

const person = {
  name: {
    first: 'Jack',
    last: 'Smith'
  },
  age: 21
}

const fruits = ['Apple', 'Banana', 'Grape', 1]

const book: [string, number, boolean] = ['business', 1500, false];

enum CoffeeSize {
  SHORT = 100,
  TALL = 'TALL',
  GRANDE = 'GRANDE',
  VENTI = 'VENTI'
}

const coffee = {
  hot: true,
  size: CoffeeSize.TALL
}
coffee.size = 100
console.log(CoffeeSize.SHORT);

let unionType: number | string = 10;
unionType = 'hello';

let unionTypes: (number | string)[] = [21, 'hello']

const apple = 'apple';


type ClothSize = 'small' | 'medium' | 'large';


let clothSize: ClothSize = 'large';
const cloth: {
  color: string;
  size: ClothSize;
} = {
  color: 'white',
  size: 'medium'
}


function add(num1: number, num2: number): number{
  return num1 + num2;
}

add(1, 3);


function sayHello(): undefined {
  console.log('Hello');
}

console.log(sayHello());

const anotherAdd: (n1: number, n2: number) => number = function(num1, num2){
  return num1 + num2;
};

const doubleNumber: (num: number) => number = num => num * 2;

function doubleAndHandle(num: number, cd: (num: number) => number): void{
  const doubleNum = cd(num * 2)
  console.log(doubleNum);
}

doubleAndHandle(21, doubleNum => {
  return doubleNum
});

let unknownInput: unknown;
let anyInput: any;
let text: string;
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;
text = anyInput;

if(typeof unknownInput === 'string'){
  text = unknownInput;
}