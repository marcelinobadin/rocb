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
exports.createStore = function(req, res) {
    var mongo = connectDB();
    var document = {};

    document = {

        name: req.param('name'),
        url: req.param('url')
    }

    mongo.collection('stores').insert(document);

    res.send({status: 'ok'});
}

exports.retrieveStore = function(req, res) {
    var mongo = connectDB();

    mongo.collection('stores').find().toArray(function (err, stores) {
        if (err) throw res.send(err.toString());
        res.send(stores);
    });

}

exports.updateStore = function(req, res) {

}

exports.deleteStore = function(req, res) {

}