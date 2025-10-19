const mongoose = require('mongoose'); 

//load config from env file
require('dotenv').config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then( () => console.log('Connection with database is established.'))
    .catch( (error) => {
        console.log('Error in connection with database.')
        console.error(error.message);
        process.exit(1);
    }) 
}

module.exports = dbConnect;