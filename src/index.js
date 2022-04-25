const express = require('express');
const db = require('../models');
const morgan = require('morgan');
const exphbs = require("express-handlebars");
const path = require('path');
const flash = require('connect-flash');
const session = require('express-session');
const mysqlSession = require('express-mysql-session');
const {database} = require('./keys');
const passport = require('passport');

//Başlangıç
const app = express();
require('./lib/passport');

//Konfigurasyonlar
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}))
app.set('view engine', '.hbs');

//Ara katman 
app.use(session({
    secret: 'bayramsecret',
    resave: false,
    saveUninitialized: false,
    store: new mysqlSession(database)
}))
app.use(flash());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());


//Global Variables
app.use((req, res, next) => {
    app.locals.success = req.flash('success');
    app.locals.message = req.flash('message');
    app.locals.error = req.flash('error');
    app.locals.user = req.user;
    next();
})

//Routes
app.use('/', require('./routes/auth/auth'));
app.use('/contacts', require('./routes/contacts/contacts'));


//Public
app.use(express.static(path.join(__dirname, 'public')));

//Conexión a la base de datos
db.sequelize.authenticate().then(() => {
    console.log('connect');
})
.catch(err => {
    console.log(err)
})


//starting the server
app.listen(app.get('port'), () => {
    console.log("server on port", app.get('port'));
});