// require packages
const express = require('express');
const exphbs = require('express-handlebars');

// sequelize
const sequelize = require('./config/connection');

// express app
const app = express();
const PORT = process.env.PORT || 3001;

// handlebars
const hbs = exphbs.create();
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// home route
app.get('/', (req, res) => {
    res.render('home');
})

// start listening
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
})
