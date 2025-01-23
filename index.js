var hasValue = true; //hasValueはtrueかfalseのどちらかの値を持つ
var count = 10;
var single = 'hello';
var hello;
hello = 'hello';
var person = {
    name: {
        first: 'Jack',
        last: 'Smith'
    },
    age: 21
};
var fruits = ['Apple', 'Banana', 'Grape', 1];
var book = ['business', 1500, false];
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 100] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
coffee.size = 100;
//console.log(CoffeeSize.SHORT);
var unionType = 10;
unionType = 'hello';
var unionTypes = [21, 'hello'];
var apple = 'apple';
var clothSize = 'large';
var cloth = {
    color: 'white',
    size: 'medium'
};
function add(num1, num2) {
    return num1 + num2;
}
add(1, 3);
function sayHello() {
    //console.log('Hello');
}
//console.log(sayHello());
var anotherAdd = function (num1, num2) {
    return num1 + num2;
};
var doubleNumber = function (num) { return num * 2; };
function doubleAndHandle(num, cd) {
    var doubleNum = cd(num * 2);
    //console.log(doubleNum);
}
doubleAndHandle(21, function (doubleNum) {
    return doubleNum;
});
var unknownInput;
var anyInput;
var text;
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;
text = anyInput;
if (typeof unknownInput === 'string') {
    text = unknownInput;
}
function error(message) {
    throw new Error(message);
}
console.log(error('This is an error'));
