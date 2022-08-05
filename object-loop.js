

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

let keys = Object.keys(shopingCard);
console.log(keys);
let vlaues = Object.values(shopingCard)
console.log(vlaues)

for (let i = 0; i < keys.length; i++) {
    let shopingName = keys[i];
    let shopingValue = shopingCard[shopingName];
    console.log(shopingName, shopingValue);
}