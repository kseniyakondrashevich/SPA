/**
 * Created by User on 13.05.2017.
 */

define(['mainTable'], function (mainTable) {
    return{
        homePage : function () {
            $.get('/tableData')
                .done(function (ans) {
                    mainTable.setTableData(JSON.parse(ans));
                    $.get('/partials/searchInput.html')
                        .done(function (html) {
                            mainTable.setSearchInput(html);
                            $.get('/partials/mavBar.html')
                                .done(function (html) {
                                    mainTable.setNavBar(html);
                                })
                                .fail(function () {
                                    mainTable.setError();
                                })
                        })
                        .fail(function () {
                            mainTable.setError();
                        });
                })
                .fail(function () {
                    mainTable.setError();
                });
        },


    }

});