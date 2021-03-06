/**
 * Created by User on 14.05.2017.
 */

let eventsHandlers = function () {
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

    function btnClick(event) {
        event.preventDefault();
        let str = $('#search-input').val();
        let searchStr = str.split(' ').join('+');
        history.pushState(null, null, location.href+'#search/?id='+searchStr);
        $(window).trigger('hashchange');
    }

    function trigger() {
        let id = $(this).find('.hidden').html();
        history.pushState(null, null, '#car/?id='+id);
        $(window).trigger('hashchange');
    }

    return{
        showBlock : showBlock,
        moveBlock : moveBlock,
        hideBlock : hideBlock,
        btnClick : btnClick,
        trigger : trigger
    }
}();

$('#table-ins').on({
        mouseenter: eventsHandlers.showBlock,
        mousemove : eventsHandlers.moveBlock,
        mouseleave : eventsHandlers.hideBlock,
        click : eventsHandlers.trigger
    },
    'td');

$('#searchBtn').on('click', eventsHandlers.btnClick);
