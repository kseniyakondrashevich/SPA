/**
 * Created by User on 07.05.2017.
 */

function home(db) {

    function getHomePage(req, res) {
        res.sendFile(__dirname + '/public/views/index.html');
    }
    
    function getMainTable(req, res) {
        db.select25(function (result) {
            res.send(JSON.stringify(result));
        })
    }

    function getCar(req, res) {
        db.selectCar(req.query, function (result) {
            res.send(JSON.stringify(result));
        });
    }

    function getSearch(req, res) {
        console.log(req.query);
        const searchEl = req.query["id"].split('+').join(' ');
        db.search(searchEl, function (result) {

            res.send(JSON.stringify(result));
        })
    }

    function getFilterData(req, res) {
        db.filterData(function (result) {
            res.send(JSON.stringify(result));
        })
    }

    function getAdminPage(req, res) {
        db.admin(function (result) {
            res.send(JSON.stringify(result));
        })
    }

    function getFilter(req, res) {
        console.log(1);
        db.filter(req.query, function (result) {
            res.send(JSON.stringify(result));
        })
    }

    return{
        getHomePage : getHomePage,
        getMainTable : getMainTable,
        getCar : getCar,
        getSearch : getSearch,
        getFilterData : getFilterData,
        getAdminPage : getAdminPage,
        getFilter : getFilter
    }
}

module.exports = home;
