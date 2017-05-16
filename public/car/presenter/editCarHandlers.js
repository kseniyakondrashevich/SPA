/**
 * Created by User on 14.05.2017.
 */


let eventsHandlers = function () {
    function validate() {
        let brand = $('#editBrand option:selected').text();
        $('#editBrand option').each(function () {
            alert($(this).text());
            if($(this).text()==brand);
                $(this).remove();
        });

        let model = $('#editModel option:selected').text();
        $('#editModel option:not(":selected")').each(function () {
            alert($(this));
            if($(this).text()==model)
                $(this).remove();
        });
    }

    return{
        validate : validate,
        //pickUpData : pickUpData
    }
}();

    $(document).ready(function () {
        eventsHandlers.validate();

        $('#cancel').on('click', function (event) {
            event.preventDefault();
            let url = location.pathname+'#admin';
            history.pushState(null, null, url);
            $(window).trigger('hashchange');
        });
    });



    $('#save').on('click', function (event) {
        event.preventDefault();
        const type = $('legend').text();
        let url;
        switch (type){
            case 'Редактирование':
                url = '#admin/edit/save';
                break;
            case 'Добавление':
                url = '#admin/new/save';
                break;
        }
        history.pushState(null, null, url);
        $(window).trigger('hashchange');
    });

    $('#imgInput').on('change', function () {
       $('#image').attr('src', $(this).val());
    });


