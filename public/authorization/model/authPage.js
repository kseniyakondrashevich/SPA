/**
 * Created by User on 15.05.2017.
 */

define(['auth'], function (auth) {
    return{
        getAuthorizationPage : function () {
            $.get('/authorization/view/auth.html')
                .done(function (html) {
                    auth.setAuthorizationPage(html);
                })
                .fail(function () {
                    auth.setError();
                });
        },

        signIn : function () {
            let data = auth.pickUpData();
            $.post('/signIn', data, function (ans) {
                ans = JSON.parse(ans);
                switch(ans.success){
                    case 'guest':
                        alert(ans.error);
                        history.back();
                        break;
                    case 'user':
                        auth.setProfilePage();
                        auth.setData(ans.data[0]);
                        break;
                    case 'admin':
                        auth.redirectAdm();
                        break;
                }
            });

        },
        
        signUp : function () {
            let data = auth.pickUpData();
            $.post('/signUp', data, function (ans){
                ans = JSON.parse(ans);
                if(!ans.error){
                    alert(ans.success);
                    auth.setProfilePage();
                }
                else{
                    alert(ans.error);
                    history.back();
                }
            })
        },

        signInSave : function () {
            let data = auth.pickUpDataProfile();
            $.post('/signIn/save', data, function (ans) {
                ans = JSON.parse(ans);
                alert(ans.success);
                auth.redirect();
            });
        },

        signUpSave : function () {
            let data = auth.pickUpDataProfile();
            $.post('/signUp/save', data, function (ans) {
                ans = JSON.parse(ans);
                alert(ans.success);
                auth.redirect();
            });
        }


    }
});