/**
 * Created by User on 07.05.2017.
 */

function home(db) {

    function getHomePage(req, res) {
        const html = '<!DOCTYPE html>' +
        '<html lang="ru">' +
            '<head>' +
            '<title>infocar</title>' +
            '<meta charset="utf-8">' +
            '<meta name="viewport" content="width=device-width, initial-scale=1">' +
            '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">' +
            '<link rel="stylesheet" href="/views/css/my.css">' +
            '<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js" defer></script>' +
            '<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" defer></script>' +
            '<script data-main="/views/js/app" src="/views/js/require.js" defer></script>' +
            '</head>' +
            '<body>' +
            '</body>' +
            '</html>';
        res.write(html);
        res.end();
    }
    
    function getMainTable(req, res) {
        const json = [
            {"brand": "Folksvagen", "model": "Golf", "mileage": "30000", "byn": "5000", "usd": "500", "euro": "400"},
            {"brand": "Folksvagen", "model": "Golf", "mileage": "30000", "byn": "5000", "usd": "500", "euro": "400"},
            {"brand": "Folksvagen", "model": "Golf", "mileage": "30000", "byn": "5000", "usd": "500", "euro": "400"},
            {"brand": "Folksvagen", "model": "Golf", "mileage": "30000", "byn": "5000", "usd": "500", "euro": "400"},
            {"brand": "Folksvagen", "model": "Golf", "mileage": "30000", "byn": "5000", "usd": "500", "euro": "400"},
            {"brand": "Folksvagen", "model": "Golf", "mileage": "30000", "byn": "5000", "usd": "500", "euro": "400"},
            {"brand": "Folksvagen", "model": "Golf", "mileage": "30000", "byn": "5000", "usd": "500", "euro": "400"},
            {"brand": "Folksvagen", "model": "Golf", "mileage": "30000", "byn": "5000", "usd": "500", "euro": "400"},
            {"brand": "Folksvagen", "model": "Golf", "mileage": "30000", "byn": "5000", "usd": "500", "euro": "400"},
            {"brand": "Folksvagen", "model": "Golf", "mileage": "30000", "byn": "5000", "usd": "500", "euro": "400"},
            {"brand": "Mazda", "model": "Golf", "mileage": "30000", "byn": "5000", "usd": "500", "euro": "400"},
            {"brand": "Folksvagen", "model": "Golf", "mileage": "30000", "byn": "5000", "usd": "500", "euro": "400"},
            {"brand": "Folksvagen", "model": "Golf", "mileage": "30000", "byn": "5000", "usd": "500", "euro": "400"},
            {"brand": "Folksvagen", "model": "Golf", "mileage": "30000", "byn": "5000", "usd": "500", "euro": "400"},
            {"brand": "Folksvagen", "model": "Golf", "mileage": "30000", "byn": "5000", "usd": "500", "euro": "400"},
            {"brand": "Folksvagen", "model": "Golf", "mileage": "30000", "byn": "5000", "usd": "500", "euro": "400"},
            {"brand": "Folksvagen", "model": "Golf", "mileage": "30000", "byn": "5000", "usd": "500", "euro": "400"},
            {"brand": "Folksvagen", "model": "Golf", "mileage": "30000", "byn": "5000", "usd": "500", "euro": "400"},
            {"brand": "Folksvagen", "model": "Golf", "mileage": "30000", "byn": "5000", "usd": "500", "euro": "400"},
            {"brand": "Folksvagen", "model": "Golf", "mileage": "30000", "byn": "5000", "usd": "500", "euro": "400"},
            {"brand": "Folksvagen", "model": "Golf", "mileage": "30000", "byn": "5000", "usd": "500", "euro": "400"},
            {"brand": "Nissan", "model": "Golf", "mileage": "30000", "byn": "5000", "usd": "500", "euro": "400"},
            {"brand": "Folksvagen", "model": "Golf", "mileage": "30000", "byn": "5000", "usd": "500", "euro": "400"},
            {"brand": "Folksvagen", "model": "Golf", "mileage": "30000", "byn": "5000", "usd": "500", "euro": "400"},
            {"brand": "Folksvagen", "model": "Golf", "mileage": "30000", "byn": "5000", "usd": "500", "euro": "400"},
        ];
        res.send(JSON.stringify(json));
    }


    return{
        getHomePage : getHomePage,
        getMainTable : getMainTable,
    }
}

module.exports = home;
