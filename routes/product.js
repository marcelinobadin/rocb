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
exports.createProduct = function(req, res) {
    var mongo = connectDB();
    var document = {};

    document = {

        name: req.param('name'),
        url: req.param('url'),
        store: req.param('store'),
        price: req.param('price')
    }

    mongo.collection('products').insert(document);

    res.send({status: 'ok'});
}

exports.retrieveProduct = function(req, res) {
    var mongo = connectDB();
    var outputHTML = {}

    mongo.collection('products').find().toArray(function (err, products) {
        if (err) throw res.send(err.toString());

        outputHTML = {'products': products};
        res.render('ad', outputHTML);
    });

}

exports.updateProduct = function(req, res) {

}

exports.deleteProduct = function(req, res) {

}