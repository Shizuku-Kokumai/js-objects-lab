const aCar = {
    owner: "Joe Bloggs",
    address: "3 Wakers Lane",
    previous_owner: [
        { name: "Pat Smith", address: "Main Street" },
        {name: "Sheila Dwyer", address: "High Street"}
    ],

    type: {
        make: "Toyota",
        model: "Corolla",
        cc: 1.8
    },
    features: ['Parking assist', 'Alarm', 'Tow-bar'],
    registration: '201WD1058'
};

aCar.milage = 10000;
aCar.color = {
    exterior: "red",
    interior: {
        texture: "leather",
        shade: "cream"
    }
};

console.log(aCar.owner + 'drives a ' + aCar.type.make);
console.log('It is a ' + aCar.color.exterior + 'color,' + aCar.milage + ' milage, with ' + aCar.color.interior.texture + 'interior.');
console.log('First onwer : ' + aCar.previous_owner[0].name);
for (let i = 0; i < aCar.features.length; i += 1) {
    console.log(aCar.features[i]);
}
for (let i = 0; i < aCar.previous_owner.length; i += 1){
    console.log(aCar.previous_owner[i].name);
}
for (let p in aCar.type) {
    console.log(p.toUpperCase() + ' = ' + aCar.type[p]);
}