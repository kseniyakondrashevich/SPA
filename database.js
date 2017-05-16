/**
 * Created by User on 07.05.2017.
 */

const database = require('./db-init');

let db = function () {
    const post = ['brand', 'model', 'year', 'mileage', 'cost', 'type_of_fuel', 'volume', 'transmission', 'content'];
    const allCarColumns = ['brand', 'model', 'year', 'mileage', 'cost', 'type_of_fuel', 'volume', 'transmission'];
    const user = ['age' , 'country', 'city', 'contacts', 'nickname', 'avatar'];
    const carColumns = ['brand', 'model', 'year', 'mileage', 'cost', 'type_of_fuel', 'volume'];
    const allImageColumns = ['id_image_post', 'photo', 'id_car'];
    let sql;

    function registr(data, callback) {
        if(!data.login || !data.password)
            callback({success: '', error: 'Ошибка. Пустой логин или пароль'});
        else{
            checkUniqueness(data.login, function (result) {
                if(result.length == 0){
                    sql="INSERT INTO user " +
                        "(" +
                        "login, password" +
                        ")" +
                        " VALUES " +
                        "(" +
                        "'"+data.login+"'," +
                        "'"+data.password+"'" +
                        ");";

                    database.get().query(sql, function (err, result) {
                        if(err)
                            throw err;
                        callback ({success : 'Вы успешно зарегистрированы', error: ''});
                    });
                }
                else{
                    callback({success: '', error: 'Пользователь под таким именем уже зарегистрирован'});
                }
            });
        }
    }

    function authoriz(data, callback) {
        if(!data.login || !data.password)
            callback({success: '', error: 'Ошибка. Пустой логин или пароль'});
        else{
            checkUniquenessAdmin(data.login, data.password, function (result) {
                if(result!=0){
                    callback({success: 'admin', error: '', login: data.login});
                }
                else {
                    checkUniqueness(data.login, function (result) {
                        if (result.length == 0) {
                            callback({success: 'guest', error: 'Неверный логин или пароль'});
                        }
                        else if (result.length != 0) {
                            callback({success: 'user', error: '', data: result});
                        }
                    })
                }
            })
        }
    }

    function checkUniquenessAdmin(login, password, callback) {
        sql = "SELECT * FROM admin WHERE " +
            "admin_login = '"+ login + "' " +
            "AND access_code = '" + password + "';";

        database.get().query(sql, function (err, result) {
            if(err)
                throw err;
            callback(result);
        });
    }

    function checkUniqueness(login, callback) {
        sql = "SELECT * FROM user WHERE login = '"+ login + "';";

        database.get().query(sql, function (err, result) {
            if(err)
                throw err;
            callback(result);
        });
    }

    function insertProfile(data, callback) {
        console.log('here');

        sql = "UPDATE user SET " +
            "age =" + data.age +", " +
            "country ='" + data.country +"', " +
            "city ='" + data.city +"', " +
            "contacts ='" + data.contacts +"', " +
            "nickname ='" + data.nickname +"', " +
            "avatar ='" + data.avatar +"' " +
            "WHERE login='" + data.login + "'; ";

        database.get().query(sql, function (err, result) {
            if(err)
                throw err;
            callback({success: 'Ваш профиль успешно сохранен', error: ''});
        });
    }

    function select25(callback) {
        sql = "SELECT " +
            "post.id_post, " +
            carColumns.join(', ') + ", photo " +
            "FROM post INNER JOIN image " +
            "ON post.id_post=image.id_image_post " +
            "ORDER BY popularity DESC " +
            "limit 25;";

        database.get().query(sql, function (err, result) {
            if(err)
                throw err;
            callback (result);
        });
    }

    function updatePopularity(id) {
        sql = "UPDATE post SET popularity = popularity+1 WHERE id_post=" + id["id"] + ";";
        database.get().query(sql);
    }

    function selectCar(id, callback) {

        updatePopularity();

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
            for(let key in elem)
                result.push(elem[key]);
        });
        return result;
    }

    function filterData(callback) {
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
            callback(res);
        });
    }

    function admin(callback) {
        sql = "SELECT *" +
            "from car inner join image " +
            "on car.id_car=image.id_car;";

        database.get().query(sql, function (err, result) {
            if(err)
                throw err;
            callback (result);
        });
    }

    function filter(params, callback) {
        sql = "SELECT " +
            carColumns.join(', ') + ", transmission, " +allImageColumns[1] +" "+
            "FROM car INNER JOIN image " +
            "ON car.id_car=image.id_car ";

        if (Object.keys(params).length != 0){
            sql+="WHERE ";
            if(params["brand"]!=undefined)
                sql+="brand='"+params["brand"]+"' AND ";
            if(params["model"]!=undefined)
                sql+="model='"+params["model"]+"' AND ";
            if(params["dateFrom"]!=undefined)
                sql+="year>="+params["dateFrom"]+" AND ";
            if(params["dateTo"]!=undefined)
                sql+="year<="+params["dateTo"]+" AND ";
            if(params["costFrom"]!=undefined)
                sql+="cost>="+params["costFrom"]+" AND ";
            if(params["costTo"]!=undefined)
                sql+="cost<="+params["costTo"]+" AND ";
            if(params["volumeFrom"]!=undefined)
                sql+="volume>="+params["volumeFrom"]+" AND ";
            if(params["volumeTo"]!=undefined)
                sql+="volume<="+params["volumeTo"]+" AND ";
            if(params["transmission"]!=undefined)
                sql+="transmission='"+params["transmission"]+"' AND ";
            if(params["typeOfFuel"]!=undefined)
                sql+="typeOfFuel='"+params["typeOfFuel"]+"' AND";

            sql=sql.substr(0, sql.length-4);
        }

        database.get().query(sql, function (err, result) {
            if(err)
                throw err;
            callback (result);
        });
    }

    function getEditCar(id, callback) {
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

    function executeDelete(id, callback) {
        sql= "DELETE FROM car " +
            "WHERE " +
            "id_car="+id["id"];

        database.get().query(sql, function (err, result) {
            if(err)
                throw err;
            callback (result);
        });
    }

    function executeInsert(data, callback) {
        sql="INSERT INTO .car " +
            "("
            + allCarColumns.join(',') +
            ")" +
            " VALUES " +
            "(" +
            "'"+data.brand+"'," +
            "'"+data.model+"'," +
            data.date+"," +
            data.mileage+"," +
            data.cost+"," +
            "'"+data.typeOfFuel+"'," +
            data.volume+"," +
            "'"+data.transmission+"'" +
            ");";

        database.get().query(sql, function (err, result) {
            if(err)
                throw err;
            sql="INSERT INTO .image " +
                "( photo, id_car ) " +
                "VALUES ("
                +"'"+data.image+"'" +
                ", (select last_insert_id() from coursesdb.car limit 1));";

                database.get().query(sql, function (err, result) {
                    if(err)
                        throw err;
                    console.log(result);
                    callback (result);
                });
        });
    }

    function executeUpdate(id, data, callback) {
        sql = "UPDATE car SET " +
            "brand ='" + data.brand +"', " +
            "model ='" + data.model +"', " +
            "year =" + data.date +", " +
            "mileage =" + data.mileage +", " +
            "cost =" + data.cost +", " +
            "typeOfFuel ='" + data.typeOfFuel +"', " +
            "volume =" + data.volume +", " +
            "transmission ='" + data.transmission +"', " +
            "WHERE id_car=" + id["id"] + "; ";

        sql+= "UPDATE image SET " +
            "photo ='" + data.image + "' " +
            "WHERE id_car=" + id["id"] + "; ";

        database.get().query(sql, function (err, result) {
            if(err)
                throw err;
            console.log(result);
            callback (result);
        });
    }

    return{
        select25 : select25,
        selectCar : selectCar,
        search : search,
        filterData : filterData,
        admin: admin,
        filter : filter,
        getEditCar : getEditCar,
        executeDelete : executeDelete,
        executeInsert : executeInsert,
        executeUpdate : executeUpdate,
        registr : registr,
        insertProfile : insertProfile,
        authoriz : authoriz
    }
}();

module.exports = db;


