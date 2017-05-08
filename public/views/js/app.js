/**
 * Created by User on 07.05.2017.
 */

require.config({
    baseUrl: '/views/js',
    paths: {
        'just' : './just.min',
    }
});

require(["just"], function (just) {
    $.ajax({
        type: "GET",
        url: "/table",
        data: "json",
        success: function (ans) {
            let html = new JUST({root: '/views', ext: '.html'});
            html.render('mainTable', {mas : JSON.parse(ans)}, function (err, html) {
                if(err)
                    console.log(err);
                else{
                    $('body').html(html);
                }
            });
        },
        error: function () {
            alert('error');
        }
    });

    function success(data) {
        let html = new JUST({root: '/views', ext: '.html'});


    }
});
