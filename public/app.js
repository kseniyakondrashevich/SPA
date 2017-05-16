/**
 * Created by User on 07.05.2017.
 */

requirejs.config({
    paths: {
        "just" : "./scripts/just.min",
        "render" : "./scripts/rendering",

        "authorization" : "./authorization/model/authPage",
        "auth" : "./authorization/presenter/auth",

        "home" : "./main_table/model/homePage",
        "mainTable" : "./main_table/presenter/mainTable",

        "car" : "./car/model/car",
        "carProfile" : "./car/presenter/carProfile",
        "editCar" : "./car/presenter/editCar",

        "searchF" : "./search/model/searchAndFilter",
        "filter" : "./search/presenter/filter",
        "search" : "./search/presenter/search",

        "admin" : "./admin/model/adminPage",
        "adminTable" : "./admin/presenter/admin"

    }
});

require(['authorization', 'home', 'car', 'searchF', 'admin'], function (authorization, home, car, searchF, admin) {

    $(window).on('hashchange', function () {
        let pathname = window.location.pathname;
        let hash = window.location.hash;
        let url = pathname+hash;

        if(/^\/$/.test(url)){
            authorization.getAuthorizationPage();
        }
        else if(/^\/#signIn\/?$/.test(url)){
            authorization.signIn();
        }
        else if(/^\/#signUp\/?$/.test(url)){
            authorization.signUp();
        }
        else if(/^\/#signIn\/save\/?$/.test(url)){
            authorization.signInSave();
        }
        else if(/^\/#signUp\/save\/?$/.test(url)){
            authorization.signUpSave();
        }
        else if(/^\/#main\/?$/.test(url)){
            home.homePage();
        }
        else if(/^\/#car\/\?id=.*/.test(url)){
            car.getCarProfile(hash.substr(9, hash.length));
        }
        else if(/^\/#search\/\?id=.*/.test(url)){
            searchF.getSearchPage(hash.substr(12, hash.length));
        }
        else if(/^\/#admin\/?$/.test(url)){
            admin.getAdminPage();
        }
        else if(/^\/#filter\/\?.*/.test(url)){
            searchF.getFilterPage(hash.substr(9, hash.length));
        }
        else if(/^\/#admin\/edit\/\?id=.*/.test(url)){
            car.getEditPage(hash.substr(16, hash.length));
        }
        else if(/^\/#admin\/delete\/\?id=.*/.test(url)){
            car.deleteCar(hash.substr(18, hash.length));
        }
        else if(/^\/#admin\/new\/?$/.test(url)){
            car.getNewPage();
        }
        else if(/^\/#admin\/new\/save\/?$/.test(url)){
            car.getSavePage();
        }
        else if(/^\/#admin\/edit\/save\/?$/.test(url)){
            car.getUpdatePage();
        }

    });

    $(window).trigger('hashchange');

});
