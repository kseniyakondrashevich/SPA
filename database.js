/**
 * Created by User on 07.05.2017.
 */

const database = require('./db-init');

let db = function () {
    const allCarColumns = ['id_car', 'brand', 'model', 'year', 'mileage', 'cost', 'typeOfFuel', 'volume', 'popularity'];
    const carColumns = ['brand', 'model', 'year', 'mileage', 'cost', 'typeOfFuel', 'volume'];
    const allImageColumns = ['id_image', 'photo', 'id_car'];
    let sql;

    function select25(callback) {
        sql = "SELECT " +
            "car.id_car, " +
            carColumns.join(', ') + ", " +
            allImageColumns[1] +" " +
            "FROM car INNER JOIN image " +
            "ON car.id_car=image.id_car " +
            "ORDER BY popularity DESC " +
            "limit 25;";

        database.get().query(sql, function (err, result) {
            if(err)
                throw err;
            callback (result);
        });
    }

    function selectCar(id, callback) {
        sql = "UPDATE car SET popularity = popularity+1 WHERE id_car=" + id["id"] + ";";
        database.get().query(sql);

        sql = "SELECT " +
            carColumns.join(', ') + ",transmission, " + allImageColumns[1] + " "+
            "FROM car INNER JOIN image " +
            "ON car.id_car=image.id_car " +
            "WHERE car.id_car= "+ id["id"] +";";

        database.get().query(sql, function (err, result) {
            if(err)
                throw err;
            callback (result);
        });
    }

    function search(searchEl, callback) {
        sql = "SELECT " +
            carColumns.join(', ') + ", transmission, " +allImageColumns[1] +" "+
            "FROM car INNER JOIN image " +
            "ON car.id_car=image.id_car " +
            "WHERE " +
            "brand='"+searchEl.toLowerCase()+"' OR " +
            "model='"+searchEl.toLowerCase()+"' OR " +
            "typeOfFuel='"+searchEl.toLowerCase()+"' OR " +
            "transmission='"+searchEl.toLowerCase()+"'";

            const number = parseInt(searchEl);
            if(!isNaN(number)) {
                sql += " OR year=" + parseInt(searchEl) + " OR " +
                    "mileage=" + parseInt(searchEl) + " OR " +
                    "cost=" + parseInt(searchEl) + " OR " +
                    "volume=" + parseInt(searchEl) + ";";
            }

        database.get().query(sql, function (err, result) {
            if(err)
                throw err;
            callback (result);
        });
    }
    
    function getUniqueArray(array) {
        let result = [];
        array.forEach(function (elem) {
            for(key in elem)
                result.push(elem[key]);
        });
        return result;
    }

    function filtr(callback) {
        res={};
        sql = "SELECT DISTINCT brand from coursesdb.car";
        database.get().query(sql, function (err, result) {
            if(err) throw err;
            res["brand"]=getUniqueArray(result);
        });
        sql = "SELECT DISTINCT model from coursesdb.car";
        database.get().query(sql, function (err, result) {
            if(err) throw err;
            res["model"]=getUniqueArray(result);
        });
        sql = "SELECT DISTINCT year from coursesdb.car";
        database.get().query(sql, function (err, result) {
            if(err) throw err;
            res["year"]=getUniqueArray(result);
        });
        sql = "SELECT DISTINCT mileage from coursesdb.car";
        database.get().query(sql, function (err, result) {
            if(err) throw err;
            res["mileage"]=getUniqueArray(result);
        });
        sql = "SELECT DISTINCT cost from coursesdb.car";
        database.get().query(sql, function (err, result) {
            if(err) throw err;
            res["cost"]=getUniqueArray(result);
        });
        sql = "SELECT DISTINCT typeOfFuel from coursesdb.car";
        database.get().query(sql, function (err, result) {
            if(err) throw err;
            res["typeOfFuel"]=getUniqueArray(result);
        });
        sql = "SELECT DISTINCT volume from coursesdb.car";
        database.get().query(sql, function (err, result) {
            if(err) throw err;
            res["volume"]=getUniqueArray(result);
        });
        sql = "SELECT DISTINCT transmission from coursesdb.car";
        database.get().query(sql, function (err, result) {
            if(err) throw err;
            res["transmission"]=getUniqueArray(result);
            callback(res);
        })
    }

    function admin(callback) {
        sql = "SELECT *" +
            "from coursesdb.car inner join coursesdb.image " +
            "on coursesdb.car.id_car=coursesdb.image.id_car;";

        database.get().query(sql, function (err, result) {
            if(err)
                throw err;
            callback (result);
        });
    }

    return{
        select25 : select25,
        selectCar : selectCar,
        search : search,
        filtr : filtr,
        admin, admin
    }
}();

module.exports = db;


