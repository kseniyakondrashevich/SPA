/**
 * Created by User on 04.05.2017.
 */

/*define(['../models/user', './publisher'], function () {
    $('#auth-button').on('click', function () {
        let authArray = $('#auth-form').find('input');
        let auth = new User(authArray[0].value, authArray[1].value);
        console.log(auth.login)
    });

    let navBar = function () {
        this.update = new Observable();

    }
});*/

/*require(['ejs'], function (ejs) {
    alert(1);
    let people = ['geddy', 'neil', 'alex'];
    let html = ejs.render('<%= people.join(", "); %>', {'people': people});
});*/




/*define(['ejs'], function () {
    ejs = require('ejs');
    ejs.renderFile('../views/mainTable.html');
    /!*$.ajax({
        type: "GET",
        url: "/table",
        data: data,
        success: function (ans) {
            let html = ejs.
        }
    })*!/
});*/


/*$('body').load('../views/search.html');
$.ajax({
    type: "POST",
    url: "/data/question.php",
    dataType: "json",
    data: data,
    success: function(ans){
        let html = new EJS({url: ' /templates/question.ejs'}).render(ans);
    }
});*/


$('#table-ins').on({
    mouseenter: showBlock,
    mousemove : moveBlock,
    mouseleave : hideBlock},
    'td');

function showBlock() {
    let content = $(this).clone();
    $(content).find('h6').css({'font-size': '20px', 'margin': '10px'});
    $('#more').html(content);
}

function moveBlock(pos) {
    $('#more').show().
    css('left',(pos.pageX+10)+'px').
    css('top',(pos.pageY+10)+'px');
}

function hideBlock() {
    $('#more').hide();
}






