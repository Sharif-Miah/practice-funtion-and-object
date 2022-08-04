
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

let key = Object.keys(myProfile)
console.log(key);

let addKey = Object.keys(myProfile.add)
console.log(addKey);

let value = Object.values(myProfile)
console.log(value)
