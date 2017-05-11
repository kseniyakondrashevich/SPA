/**
 * Created by User on 07.05.2017.
 */

require.config({
    baseUrl: '/controllers',
    paths: {
        'just' : './just.min',
        'router' : './router'
    }
});

//page('/', homePage);
//page('/#car')

require(["router", "just"], function (router, just) {

    /*$(window).on('customhashchange', function (event, newUrl, params) {
        alert('localhost:8080/#car/?id='+params["id"]);
        window.location.href='localhost:8080/#car/?id='+params["id"];
    });*/

    $(window).on('hashchange', function () {
        let pathname = window.location.pathname;
        let search = window.location.search;
        let hash = window.location.hash;
        let url = pathname+hash;

        if(/^\/$/.test(url)){
            homePage();
        }
        else if(/^\/#car\/\?id=.*/.test(url)){
            getCarProfile(hash.substr(9, hash.length));
        }
        else if(/^\/#search\/\?id=.*/.test(url)){
            getSearchPage(hash.substr(12, hash.length));
        }
        else if(/^\/#admin.*$/.test(url)){
            alert(hash);
            getAdminPage();
        }
        else if(/^\/#filter\/\?.*/.test(url)){
            getFilterPage(hash.substr(9, hash.length));
        }

    });

    $(window).trigger('hashchange');

    function homePage() {
        $('#main-container').load('/views/partials/mavBar.html');

        $.get('/views/partials/searchInput.html')
            .done(function (html) {
                appendToDOM($('#main-container'), html);
            })
            .fail(function () {
                err('Контейнер потерялся', appendToDOM, $('#main-container'));
            });
        
        $.get('/tableData')
            .done(function (ans) {
                renderFile('mainTable', {mas: JSON.parse(ans)}, appendToDOM, $('#main-container'));
            })
            .fail(function () {
                err('Ошибка получения данных', appendToDOM, $('#main-container'));
            });
    }

    function getCarProfile(param) {

        $.ajax({
            type: "GET",
            url: "/car/?id="+param,
            success: function (ans) {
                if(JSON.parse(ans).length ==0){
                    err('Машина с данным номером не найдена :(', insertInDOM, $('#main-container'));
                }
                else
                    renderFile('car', {obj: JSON.parse(ans)}, insertInDOM, $('#main-container'));
            },
            error: function(){
                err('Что-то пошло не так...', insertInDOM, $('#main-container'));
            }
        })
    }

    function getSearchPage(param) {
        $.ajax({
            type: "GET",
            url: "/search/?id="+param,
            success: function (ans) {
                if(JSON.parse(ans).length ==0){
                    err('Поиск по заданным параметрам ничего не дал :(', insertInDOM, $('#main-container'));
                }
                else{
                    renderFile('search', {mas: JSON.parse(ans)}, insertInDOM, $('#main-container'));
                    $.ajax({
                        type: "GET",
                        url: "/filterData",
                        success: function (ans) {
                            if(JSON.parse(ans).length ==0){
                                err('Недостаточно данных для фильтрации :(', appendToDOM, $('#main-container'));
                            }
                            else{
                                alert(JSON.parse(ans)["brand"][0]);
                                renderFile('filtr', {mas: JSON.parse(ans)}, appendToDOM, $('#main-container'));
                            }
                        },
                        error: function(){
                            err('Что-то пошло не так...', appendToDOM, $('#main-container'));
                        }
                    })
                }
            },
            error: function(){
                err('Что-то пошло не так...', insertInDOM, $('#main-container'));
            }
        })
    }

    function getAdminPage() {
        $.ajax({
            type: "GET",
            url: "/admin",
            success: function (ans) {
                if(JSON.parse(ans).length ==0){
                    err('Страница не найдена :(', insertInDOM, $('#main-container'));
                }
                else
                    renderFile('admin', {obj: JSON.parse(ans)}, insertInDOM, $('#main-container'));
            },
            error: function(){
                err('Что-то пошло не так...', insertInDOM, $('#main-container'));
            }
        })
    }

    function getFilterPage(params) {
        $.ajax({
            type: "GET",
            url: "/filter/?"+params,
            success: function (ans) {
                $('#search-results').empty();
                if(JSON.parse(ans).length ==0)
                    err('По вашему запросу ничего не найдено', prependToDOM, $('#main-container'));
                else
                    renderFile('search', {mas: JSON.parse(ans)}, prependToDOM, $('#main-container'));
            }
        })
    }


    function renderFile(fileName, params, callback, $container) {
        let html = new JUST({root: '/views/partials', ext: '.html'});
        html.render(fileName, params, function (err, html) {
            if(err)
                console.log(err);
            else{
                callback($container, html);
            }
        })
    }

    function insertInDOM($container, html) {
        $container.html(html);
    }

    function appendToDOM($container, html) {
        $container.append(html);
    }

    function prependToDOM($container, html) {
        $container.prepend(html);
    }

    function err(title, callback, $container) {
        renderFile('error', {title: title, text: 'Попробуйте еще раз'}, callback, $container);
    }
});
