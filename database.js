/**
 * Created by User on 07.05.2017.
 */

let mongoClient = require('mongodb').MongoClient;
let format = require('util').format;

mongoClient.connect('mongodb://127.0.0.1:27017/test', function (err, db) {
    if(err)
        throw err;
    else {
        console.log('successfuly connected to the database');
    }
    db.close();
});