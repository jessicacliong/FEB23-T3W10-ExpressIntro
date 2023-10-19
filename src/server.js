// import the server package 
const bananas = require('express');
// make an instance of the server that we can customise and run 
const app = bananas();

// this is an instance of the server as well, but not recommended to write this 
// const express = require('express')(); 

// const HOST = 'localhost';
// const PORT = 3000

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;
// Ports can only be a integer between 1001 - 65536

// instance.routes(controllers or middleware)
// instance.use(middleware)
// instance.use(router) needs to use (express) on all of the routes
// instance.get(express.json())
// app.get(bananas.json()) telling the instance of the server that for every route we just want our get request to have json data  
app.use(bananas.json()); // use is for anything
app.use(bananas.urlencoded({extended: true}));

// some comment heree to trigger nodemon into restarting

// GET localhost:3000/
// app.get(route path, callback_function)
app.get("/", (request, response) => {

     response.send("Hello world, this server is bananas!")
});

const someImportedRouterYay = require('./controllers/PokemonController');
app.use("/pokemon", someImportedRouterYay);

module.exports = {
     app,
     HOST,
     PORT
}

// Configure the server -- happens all above this line ^^^^^^