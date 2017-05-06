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




$('#admin-table').on({
    mouseenter: showCell,
    mouseleave: hideCell
},
'tr');

function showCell() {
    let content = $('#control-buttons').clone().show();
    $(this).find('td:last').html(content);
}

function hideCell() {
    $(this).find('td:last').empty();
}

