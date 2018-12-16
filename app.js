var express = require('express');

// # set express app
var app = express();

// # setting template engine (let express know we using ejs as template engine and make view folder with .ejs file)
app.set('view engine', 'ejs');

// # set the request
// param_1 : ROUTE endpoint request
// param_2 : function wich fire when request is made
app.get('/', function(req, res) {
    res.send(`hello iam express js in hoome`);
});

app.get('/home', function(req, res) {
    res.sendFile(__dirname+'/home.html');
});

// # get request with dynamic parameters #1
app.get('/posts/:id', function(req, res) {
    res.send(`Hey do you looking for a profile with the post id like this "${req.params.id}"`);
})

// # get request with dynamic parameters #2
app.get('/profile/:name', function(req, res) {
    var data = {
        flName: req.params.name +' subroto', 
        age: 26, 
        job: 'Full stack javascript developer',
        hobbies: ['sleeping', 'eating', 'praying', 'coding']
    };

    // # menggunakan methode render untuk memanggil dan menginjek data ke template engine
    // # param_1 : .ejs file name on folder view
    // # param_2 : data in object where will show on in template engine
    res.render('profile', {person: req.params.name, data: data});
})

// # set listen port
app.listen(3000, () => {
    console.log('Server e es malku dab, cobo mbok tilik i nang localhost:3000');
});



// ### CAUNTION
// # TEMPLATE ENGINE : do embed data in javascrpit code into a html files (kek blade templating di laravel)





