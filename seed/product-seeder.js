var Product = require('./../models/product')
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/shopping')
var products = [
    new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/e/e0/Risen_%28video_game%29_boxart.jpg',
    title: 'Risen',
    description: 'Awesome RPG Game!!!',
    price: 10
    }),

    new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Call_of_Duty_4_Modern_Warfare.jpg',
    title: 'Call of duty: Modern warfare',
    description: 'Hell yeah, i died',
    price: 20
    }),

    new Product({
    imagePath: 'https://media.rockstargames.com/rockstargames/img/global/news/upload/actual_1364906194.jpg',
    title: 'Grand theft auto V',
    description: 'Awesome Games in 2018',
    price: 20
    }),

    new Product({
    imagePath: 'https://images-eu.ssl-images-amazon.com/images/I/512dVKB22QL.png',
    title: 'Minecraft',
    description: 'its minecraft...bruh',
    price: 20
    }),

    new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/55/TorchlightIICoverArt.jpg',
    title: 'Torchlight 2',
    description: 'Another awesome RPG Games yeah!!',
    price: 20
    }),

    new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
    title: 'Gothic',
    description: 'Well never mind',
    price: 20
    })
]
var done = 0
for(var i = 0; i < products.length; i++) {
    products[i].save()
}


