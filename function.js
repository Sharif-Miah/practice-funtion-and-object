

function add(a, b, c) {
    const sum = (a + b + c)
    return sum;
}

let result1 = add(10, 30, 20)
let result2 = add(510, 300, 820)
let result3 = add(120, 350, 270)

console.log(result1);
console.log(result2);
console.log(result3);

function start() {
    console.log('Please practice function');
}

start()
start()
start()

function bringSomthing(money) {
    console.log('Please Bring some goods.' + money);
}
bringSomthing(200)


function takeSomthing(taka, money) {
    console.log(taka, 'take this take.', money);
}
takeSomthing(20, 51)

function number(num1, num2) {
    console.log(num1, num2);
    const sum = num1 + num2
    return sum;
}

let addNum = number(15, 30)

console.log('total =', addNum);


function priceSingara(moneys) {
    console.log(moneys);
    const totalQun = moneys / 5;
    return totalQun;
}

// const showdata1 = priceSingara(50);
// console.log(showdata1);

// const showdata2 = priceSingara(150);
// console.log(showdata2);

let myTaka = 800;

const showdata3 = priceSingara(myTaka);
console.log(showdata3);

function showName(name) {
    console.log('My name is', name);
    const myName = name;
    return myName;
}

const nameIs = showName('Farhan Sharif')
console.log(nameIs);