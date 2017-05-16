/**
 * Created by User on 09.05.2017.
 */

define(['render'], function (render) {
    return{
        setSearchInput : function (html) {
            $('#main-container').prepend(html);
        },

        setNavBar : function (html) {
            $('#main-container').prepend(html);
        },

        setError : function () {
            render.renderFile('./partials/info', {title: 'Произошла ошибка', text: 'Попробуйте еще раз'}, 'insert', $('#main-container'));
        },

        setTableData : function (ans) {
            alert(JSON.stringify(ans[0]));
            render.renderFile('/main_table/view/mainTable', {mas: ans}, 'insert', $('#main-container'));
        }
    };
});



