/**
 * Created by User on 12.05.2017.
 */

define(['render'], function (render) {
    return{
        setCarNotFound : function () {
            render.renderFile('./partials/info', {title: 'Машина с данным номером не найдена', text: 'Попробуйте еще раз'}, 'insert', $('#main-container'));
        },

        setError : function () {
            render.renderFile('./partials/info', {title: 'status 403 Forbidden', text: 'К сожалению, У Вас нет доступа к этой странице'}, 'insert', $('#main-container'));
        },

        setEditPage : function (ans) {
            render.renderFile('./car/view/editCar', {title: 'Редактирование'/*, obj: ans[0]*/}, 'insert', $('#main-container'));
        },

        setNewPage : function () {
            render.renderFile('./car/view/editCar', {title: 'Добавление'}, 'insert', $('#main-container'));
        },

        setEditData : function (ans) {
            render.renderFile('./partials/options', {obj: ans["brand"]}, 'append', $('#editBrand'));
            render.renderFile('./partials/options', {obj: ans['model']}, 'append', $('#editModel'));
        },

        setDeletePage : function () {
            render.renderFile('./partials/info', {title: 'Удаление прошло успешно', text:''}, 'insert', $('#main-container'));
        },

        setSavePage : function () {
            render.renderFile('./partials/info', {title: 'Запись успешно добавлена', text:''}, 'insert', $('#main-container'));
        },

        pickUp: function () {
            event.preventDefault();
            let obj = {};
            obj.brand = $('#editBrand option:selected').text();
            obj.model = $('#editModel option:selected').text();
            obj.date = $('#editDate').val();
            obj.cost = $('#editCost').val();
            obj.mileage = $('#editMileage').val();
            obj.transmission = $('input[name="transmission"]:checked').val();
            obj.typeOfFuel = $('input[name="typeOfFuel"]:checked').val();
            obj.volume = $('#editVolume').val();
            obj.image = $('#image').attr('src');

            alert(JSON.stringify(obj));
            return obj;
        }
    }
});

