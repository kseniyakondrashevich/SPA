/**
 * Created by User on 07.05.2017.
 */

function home(db) {

    function getHomePage(req, res) {
        console.log(3);
       /* const html = '<!DOCTYPE html>' +
        '<html lang="ru">' +
            '<head>' +
            '<title>infocar</title>' +
            '<meta charset="utf-8">' +
            '<meta name="viewport" content="width=device-width, initial-scale=1">' +
            '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">' +
            '<link rel="stylesheet" href="/views/css/my.css">' +
            '<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js" defer></script>' +
            '<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" defer></script>' +
            '<script data-main="/controllers/app" src="/controllers/require.js" defer></script>' +
            '</head>' +
            '<body>' +
            '<div class="container" id="main-container">'+
            '</div>' +
            '</body>' +
            '</html>';*/
        res.sendFile(__dirname + '/public/views/index.html');
        //res.end();
    }
    
    function getMainTable(req, res) {
        console.log(2);
        db.select25(function (result) {
            res.send(JSON.stringify(result));
        })
    }

    function getCar(req, res) {
        console.log(1);
        db.selectCar(req.query, function (result) {
            res.send(JSON.stringify(result));
        });
    }

    function getSearch(req, res) {
        console.log(4);
        const searchEl = req.query["id"].split('+').join(' ');
        db.search(searchEl, function (result) {

            res.send(JSON.stringify(result));
        })
    }

    function getFiltr(req, res) {
        console.log(5);
        db.filtr(function (result) {
            res.send(JSON.stringify(result));
        })
    }

    function getAdminPage(req, res) {
        console.log(6);
        db.admin(function (result) {
            res.send(JSON.stringify(result));
        })
    }

    return{
        getHomePage : getHomePage,
        getMainTable : getMainTable,
        getCar : getCar,
        getSearch : getSearch,
        getFiltr : getFiltr,
        getAdminPage : getAdminPage
    }
}

module.exports = home;
