// initialize express app
// setup static files
// setup static files
// setup storage middleware
// set main route handler(controller actions)

const express = require('express');
const hbs = require('express-handlebars');
const {catalog} = require('./controllers/catalog')

const port = 3000;
const app = express();

app.engine('hbs',hbs({
    extname: '.hbs'
}));

app.set('view engine', 'hbs');
app.use('/static',express.static('static'));

app.get('/', catalog);
app.listen(port, ()=>console.log(`Server is listening on port ${port}`));