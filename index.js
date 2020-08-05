const express = require('express');
const app = express();



app.get('/', function(req, res) {
    res.sendFile(__dirname+'/views/index.html');
    // res.send('My main page');
});
app.get('/about', function(req, res) {
    res.sendFile(__dirname+'/views/about.html');
    // res.send("I am Nick and I am a Software Engineer")

});
app.get('/blog', function(req, res) {
    res.sendFile(__dirname+'/views/blog-directory.html');
    // res.send("A directory of all my blogs will go here")
});

app.listen(8000);