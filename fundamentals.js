const aCar = {
    owner: "Joe Bloggs",
    type: {
        make: "Toyota",
        model: "Corolla",
        cc: 1.8
    },
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