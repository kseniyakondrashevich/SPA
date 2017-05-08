/**
 * Created by User on 07.05.2017.
 */

let mysql = require('mysql');
let async = require('async');

let db = function() {

    let connection = null;

    function get(done) {
        if(!connection){
            connection = mysql.createConnection({
                host : 'localhost',
                user: 'root',
                password: 'root',
                database: 'coursesdb'
            });

            done();
        }
        else {
            return connection;
        }
    }

    function fixtures(data, done) {
        if (!connection) return done(new Error('Missing database connection.'));

        let names = Object.keys(data.tables);
        async.each(names, function(name, cb) {
            async.each(data.tables[name], function(row, cb) {
                let keys = Object.keys(row);
                let values = keys.map(function(key) { return "'" + row[key] + "'" });

                connection.query('INSERT INTO ' + name + ' (' + keys.join(',') + ') VALUES (' + values.join(',') + ')', cb)
            }, cb)
        }, done)
    }

    return{
        get : get,
        fixtures : fixtures
    }

}();

module.exports = db;

/*
module.exports = {
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'coursesdb'
};



exports.connect = function (done) {
    connection = mysql.createConnection({
        host : 'localhost',
        user: 'root',
        password: 'root',
        database: 'coursesdb'
    });

    done();
};

exports.get = function () {
    return connection;
};

exports.fixtures = function(data) {
    if (!connection) return done(new Error('Missing database connection.'));

    let names = Object.keys(data.tables);
    async.each(names, function(name, cb) {
        async.each(data.tables[name], function(row, cb) {
            let keys = Object.keys(row);
            let values = keys.map(function(key) { return "'" + row[key] + "'" });

            connection.query('INSERT INTO ' + name + ' (' + keys.join(',') + ') VALUES (' + values.join(',') + ')', cb)
        }, cb)
    }, done)
};*/
