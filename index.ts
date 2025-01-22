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