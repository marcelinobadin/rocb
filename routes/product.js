/**
 * Created by marcelino.g.badin on 16/12/13.
 */

/*
 CRUD Operations
 */

function connectDB() {

    var urlDB = 'localhost:27017/testdb';
    var mongodb = require('mongoskin');

    return mongodb.db(urlDB, {safe:false});
}

exports.createProduct = function (req, res) {
    var mongo = connectDB();
    var productMeta = {};
    var path = require('path');

    //TODO resize images before store in the database (width 160, height 90)
    //TODO store all the information needed by a Product Centric vision

    productMeta = {

        name: req.param('name'),
        url: req.param('url'),
        store: req.param('store'),
        price: req.param('price'),
        image: path.basename(req.files.image.path)
    };

    mongo.collection('products').insert(productMeta);

    res.send(productMeta);


};

exports.retrieveProduct = function(req, res) {
    var mongo = connectDB();
    var outputHTML = {};

    mongo.collection('products').find().toArray(function (err, products) {
        if (err) throw res.send(err.toString());

        outputHTML = {'products': products};
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.render('ad', outputHTML);
    });

};

exports.updateProduct = function(req, res) {

};

exports.deleteProduct = function(req, res) {

};