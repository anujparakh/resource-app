var express = require('express');
var app = express();
var path = require('path');

app.route('/').get(function(req,res)
{
    res.sendFile(path.join(__dirname + '/view/index.html'));
});
app.use(express.static(path.join(__dirname, 'view')));


app.listen(8000);
console.log('App listening at http://localhost:8000')
