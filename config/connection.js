const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;
// JAWS_DB FOR HEROKU HOSTING
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL)
} else {
    // SET UP FOR LOCAL
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306
        }
    );
}


module.exports = sequelize;