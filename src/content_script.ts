import * as $ from 'jquery';

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg.color) {
        console.log('Receive color = ' + msg.color);
        document.body.style.backgroundColor = msg.color;
        sendResponse('Change color to ' + msg.color);
    } else {
        sendResponse('Color message is none.');
    }
});

$(window).on('load', function () {
    $('table.main a.online').each(function () {
        const href = $(this).attr('href')
        const tmpArr = href.split('/')
        const movieId = tmpArr[tmpArr.length-2]
        console.log('movie id: ', movieId)
        $(this).parent().replaceWith(`<img src="imdb/imdb_${movieId}.gif" border="0" tooltip="IMDB">`)
    })
})