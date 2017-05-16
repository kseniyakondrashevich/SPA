/**
 * Created by User on 15.05.2017.
 */

define(['render'], function (render) {
    return{
        setAuthorizationPage : function (html) {
            $('#main-container').html(html);
        },

        setProfilePage : function () {
            render.renderFile('./authorization/view/profile', {login: this.login}, 'insert', $('#main-container'));
        },

        setError : function () {
            render.renderFile('./partials/info', {title: 'Произошла ошибка', text: 'Попробуйте еще раз'}, 'prepend', $('#main-container'));
        },

        setData : function (obj) {
            setTimeout(function () {
                $('#avatarInput').val(obj.avatar);
                $('#avatarInput').trigger('change');
                $('#nickname').val(obj.nickname);
                $('#age').val(obj.age);
                $('#country').val(obj.country);
                $('#city').val(obj.city);
                $('#contacts').val(obj.contacts);

                $('#login').text(obj.login);
            }, 100);
        },

        pickUpData : function () {
            let obj = {};
            obj.login = $('#email').val();
            obj.password = $('#password').val();

            this.login = obj.login;
            this.password = obj.password;

            return obj;
        },

        pickUpDataProfile : function () {
            let obj = {};
            obj.login = $('#login').text();
            obj.avatar = $('#avatarInput').val();
            obj.nickname = $('#nickname').val();
            obj.age = $('#age').val();
            obj.country = $('#country').val();
            obj.city = $('#city').val();
            obj.contacts = $('#contacts').val();

            alert(JSON.stringify(obj));

            return obj;
        },

        redirect : function () {
            let url = '#main';
            history.pushState(null, null, location.pathname+url);
            $(window).trigger('hashchange');
        },

        redirectAdm : function () {
            let url = '#admin';
            history.pushState(null, null, location.pathname+url);
            $(window).trigger('hashchange');
        }
    }
});