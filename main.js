/**
 * Created by User on 07.05.2017.
 */

const express = require('express');
const requestHandlers = require('./routes/mainRoute');

const app = express();
app.use(express.static(__dirname + '/public'));
//app.use(express.bodyDecoder());
app.set('views engine', 'ejs');

app.listen(8080, function () {
    console.log('Express server listening on port 8080');
});

app.use(requestHandlers);