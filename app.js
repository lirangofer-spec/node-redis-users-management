const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const redis = require('redis');
const nconf = require('nconf');

// Create Redis Client for local usage

let client = redis.createClient();

client.on('connect', function () {
    console.log('connected to redis');
})


// Create Redis Cloud Client
/*
nconf.argv().env().file('keys.json');

const client = redis.createClient(
    nconf.get('redisPort'),
    nconf.get('redisHost'),
    {
      'auth_pass': nconf.get('redisKey'),
      'return_buffers': true
    }
  ).on('error', (err) => console.error('ERR:REDIS:', err));
*/

// Set Port
const port = 3000;


// Init app
const app = express();


// View Engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars');


// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Method Override
app.use(methodOverride('_method'));

// Search Page
app.get('/', function (req, res, next) {
    res.render('searchusers');
});

// Search processing
app.post('/user/search', function (req, res, next) {
    const id = req.body.id;

    client.hgetall(id, function (err, obj) {
        if (!obj) {
            res.render('searchusers', {
                error: 'User does not exist'
            })
        } else {
            obj.id = id;
            res.render('details', {
                user: obj
            });
        }
    })
});

// Add Page
app.get('/user/add', function (req, res, next) {
    res.render('adduser');
});

// Add user processing
app.post('/user/add', function (req, res, next) {
    const id = req.body.id;
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const phone = req.body.phone;

    client.hmset(id, [
        'first_name', first_name,
        'last_name', last_name,
        'email', email,
        'phone', phone,
    ], function (err, reply) {
        if (err) {
            console.log(err);
        }
        console.log(reply);
        res.redirect('/');
    })
});

// Delete user processing
app.delete('/user/delete/:id', function (req, res, next) {
    const id = req.params.id;

    client.del(id, function(err, reply) {
        if (err) {
            console.log(err);
        }
        console.log(reply);
        res.redirect('/');
    })
})

app.listen(port, function () {
    console.log('server started on port ' + port);
});



