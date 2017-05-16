/**
 * Created by User on 15.05.2017.
 */

let eventsHandlers = function () {

    function trigger(url){
        history.pushState(null, null, url);
        $(window).trigger('hashchange');
    }

    return{
        trigger : trigger
    }
}();



$(document).ready(function () {

    $('#signIn').on('click', function (event) {
        event.preventDefault();
        let url= '#signIn';
        eventsHandlers.trigger(url);
    });

    $('#signUp').on('click', function (event) {
        event.preventDefault();
        let url= '#signUp';
        eventsHandlers.trigger(url);
    });

    $('#avatarInput').on('change', function () {
        $('#avatar').attr('src', $(this).val());
    });

    $('#saveProfile').on('click', function (event) {
        event.preventDefault();
        let url= '/save';
        eventsHandlers.trigger(location.hash+url);
    });

    $('#continue').on('click', function (event) {
        event.preventDefault();
        let url= '/#main';
        eventsHandlers.trigger(location.pathname+url);
    });
});



