/**
 * Created by User on 09.05.2017.
 */

define(['render'], function (render) {
    return{
        setCarNotFound : function () {
            render.renderFile('./partials/info', {title: 'Машина с данным номером не найдена', text: 'Попробуйте еще раз'}, 'insert', $('#main-container'));
        },

        setError : function () {
            render.renderFile('./partials/info', {title: 'status 403 Forbidden', text: 'К сожалению, У Вас нет доступа к этой странице'}, 'insert', $('#main-container'));
        },

        setCarProfile : function (ans) {
            render.renderFile('./car/view/carProfile', {obj: ans}, 'insert', $('#main-container'));
        }
    }
});
