/**
 * Created by User on 09.05.2017.
 */

define(function (require) {


    function mainHandler(newUrl, paramString) {
        alert(newUrl+paramString);
        let url = newUrl+paramString;
       switch (newUrl+paramString){
           case /\// :
               getHomePage();
               break;
           case /^#car\?id=.*/ :
               alert(111);
               getCarProfile(url);
               break;
       }
    }

    function getHomePage() {
        $.ajax({
            type: "GET",
            url: "/tableData",
            success: function (ans) {
                renderFile('mainTable', {mas: JSON.parse(ans)}, insertInDOM, $('body'));
            },
            error: err
        });
    }

    function getCarProfile(url) {
        $.ajax({
            type: "GET",
            url: url,
            success: function (ans) {
                renderFile('car', {mas: JSON.parse(ans)}, insertInDOM, $('body'));
            },
            error: err
        })
    }

//}


    function renderFile(fileName, params, callback, $container) {
        let html = new JUST({root: '/views', ext: '.html'});
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

    function err(err) {
        console.log(err);
        renderFile('error', {title: 'Упс, что-то пошло не так :(', text: (err.status + " " + err.message)}, insertInDOM, $('body'));
    }


    return{
        mainHandler : mainHandler
    }
});