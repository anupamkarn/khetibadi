var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping');

var products = [
    new Product({
    imageURL: 'https://3.imimg.com/data3/PI/QO/GLADMIN-21651/agricultural-equipment-250x250.jpg',
    title: 'Farming Tool 1',
    discription: 'a tool for making soil level and removing leaves from the ground, consisting of a long handle with sharp separated points on one end that the soil etc is caught in',
    price: 1500
}),
    new Product({
    imageURL: 'https://3.imimg.com/data3/PI/QO/GLADMIN-21651/agricultural-equipment-250x250.jpg',
    title: 'Farming Tool 2',
    discription: 'a tool for making soil level and removing leaves from the ground, consisting of a long handle with sharp separated points on one end that the soil etc is caught in',
    price: 1500
}),
    new Product({
    imageURL: 'https://3.imimg.com/data3/PI/QO/GLADMIN-21651/agricultural-equipment-250x250.jpg',
    title: 'Farming Tool 3',
    discription: 'a tool for making soil level and removing leaves from the ground, consisting of a long handle with sharp separated points on one end that the soil etc is caught in',
    price: 1500
}),
    new Product({
    imageURL: 'https://3.imimg.com/data3/PI/QO/GLADMIN-21651/agricultural-equipment-250x250.jpg',
    title: 'Farming Tool 4',
    discription: 'a tool for making soil level and removing leaves from the ground, consisting of a long handle with sharp separated points on one end that the soil etc is caught in',
    price: 1500
}),
    new Product({
    imageURL: 'https://3.imimg.com/data3/PI/QO/GLADMIN-21651/agricultural-equipment-250x250.jpg',
    title: 'Farming Tool 5',
    discription: 'a tool for making soil level and removing leaves from the ground, consisting of a long handle with sharp separated points on one end that the soil etc is caught in',
    price: 1500
}),
    new Product({
    imageURL: 'https://3.imimg.com/data3/PI/QO/GLADMIN-21651/agricultural-equipment-250x250.jpg',
    title: 'Farming Tool 6',
    discription: 'a tool for making soil level and removing leaves from the ground, consisting of a long handle with sharp separated points on one end that the soil etc is caught in',
    price: 1500
})
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}