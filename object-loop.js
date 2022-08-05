

let shopingCard = {
    books: 5,
    pen: 6,
    khata: 3,
    mouse: 1,
    keybord: 2,
    monitor: 1,
    pc: 1,
    mobileUse: 4
}

// let keys = Object.keys(shopingCard);
// console.log(keys);
// let vlaues = Object.values(shopingCard)
// console.log(vlaues)

// for (let i = 0; i < keys.length; i++) {
//     let shopingName = keys[i];
//     let shopingValue = shopingCard[shopingName];
//     console.log(shopingName, shopingValue);
// }


let bookPrice = {
    noteBook: 30,
    mathBook: 250,
    englishBook: 500,
    accountingBook: 450,
    markingingBook: 270,
    financeBook: 600
}

let bookKeys = Object.keys(bookPrice);
console.log(bookKeys);

let bookValue = Object.values(bookPrice)
console.log(bookValue);


// let keys = [ 'noteBook', 'mathBook','englishBook','accountingBook','markingingBook','financeBook']

for (let i = 0; i < bookKeys.length; i++) {
    let bookName = bookKeys[i];
    let bookValue = bookPrice[bookName]
    console.log(bookName, bookValue);
}
