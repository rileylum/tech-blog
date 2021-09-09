// require packages
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const routes = require('./controllers')
require('dotenv').config();

// sequelize
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// express app
const app = express();
const PORT = process.env.PORT || 3001;

// session config
const sess = {
    secret: process.env.SESSION_SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
}
app.use(session(sess));
// middleware to include session in all handlebars renders
app.use(function (req, res, next) {
    res.locals.session = req.session;
    next();
});

// handlebars
const hbs = exphbs.create();
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// server static files
app.use(express.static(path.join(__dirname, 'public')));

// routing
app.use(routes);

// start listening
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
})
