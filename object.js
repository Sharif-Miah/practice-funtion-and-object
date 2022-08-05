
let myProfile = {
    name: 'Farhan Sharif',
    age: 22,
    profesiton: 'Javascript Developer',
    add: {
        home: 'Bonaid',
        postOffice: 'Amdiya',
        district: 'Narsingdi',
        country: 'Bangladesh'
    }
}

// console.log(myProfile);
// console.log(myProfile.age);
// console.log(myProfile.name);
// console.log(myProfile.profesiton);
// console.log(myProfile.add);
// console.log(myProfile.add.home);
// console.log(myProfile.add.district);
// console.log(myProfile.add.country);

// let key = Object.keys(myProfile)
// console.log(key);

// let addKey = Object.keys(myProfile.add)
// console.log(addKey);

// let value = Object.values(myProfile)
// console.log(value)


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

var itemsValeu = 'keybord';
itemMan = shopingCard[itemsValeu];
// console.log(itemsValeu, itemMan);

// var buysItems = shopingCard;
// console.log(buysItems);

// var buysItems1 = shopingCard.mobileUse;
// console.log(buysItems1);

// var buysItems2 = shopingCard['keybord'];
// console.log(buysItems2);

// var buysItems3 = shopingCard['keybord'];
// console.log(buysItems3);

var buysItems4 = Object.keys(shopingCard)
// console.log(buysItems4);
// var buysItems5 = Object.values(shopingCard)
// console.log(buysItems5);

// for (let i = 0; i < buysItems4.length; i++) {
//     let getItems = buysItems4[i];
//     return getItems;
// }

// let items = buysItems4[i];
// console.log(items);


// set Property value 

// shopingCard.mouse = 40;
// console.log(shopingCard);

// shopingCard["mobileUse"] = 8;
// console.log(shopingCard);


let tabileItems = {
    noteBook: 4,
    book: 2,
    charger: 3,
    monitor: 1,
    keybord: 1,
    cp: 1,
    mouse: 1
}

// console.log(tabileItems);
tabileItems.book = 10;
tabileItems['charger'] = 5;
tabileItems.cp = 'computer'
console.log(tabileItems);

let propertyValues = 'charger';

let propertyItem = tabileItems[propertyValues]
console.log(propertyItem);
