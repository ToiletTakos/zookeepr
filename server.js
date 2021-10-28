// these two allows us to read the two index.js files in each directory indicated.
//index.js files are default read if no other file is provided
const apiroutes = require('./routes/apiroutes');
const htmlRoutes = require('./routes/htmlRoutes');
const fs = require('fs');
const path = require('path');

const { animals } = require('./data/animals.json');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

//middleware to allow for the browser to get any necessary files saved in the public folder
//in this case all the frontend files are here so the css and js can now display in the browser file
app.use(express.static('public'));
//parse incoming string or array data
app.use(express.urlencoded({ extended:true }));
//pasre incoming JSON data
app.use(express.json());

// our way of telling the server that any time a client navigates to localhost:3001/api the app will use the router we set up in apiroutes.
app.use('/api', apiroutes);
//if / is the endpoint then the router will serve back our HTML routes
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});