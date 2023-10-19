const express = require('express');

// create an instance of the Express router

const router = express.Router();

// this sends a json string. instead of just a html string
router.get("/", (request, response) => {
     response.json ({
          message:"Hello world from a router!"
     });
});

// GET /pokemon/25
router.get("/:numberOfLePokemon", async (request, response) => {
     let pokemonId = request.params.numberOfLePokemon;

     let result = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonId);
     let data = await result.json();

     response.json({
          name: data.name    
     });
});

// POST /pokemon/25
// Body: {username:"alex", pokemonId:someNumber}
router.post("/:numberOfLePokemon", async (request, response) => {
     // let pokemonId = request.params.numberOfLePokemon;

     if (request.body.username != "alex"){
		response.json({
			message:"You are not authorised!"
		});
	}

     let result = await fetch("https://pokeapi.co/api/v2/pokemon/" + request.body.pokemonId);
     let data = await result.json();

     response.json({
          name: data.name,  
          username: request.body.username,
		pokemonId: request.body.pokemonId  

     });
});


//async needs to be called before the await command
router.get("/bananas", async (request, response) => {


// the structure is await fetch, await result.json then the data response
     let result = await fetch("https://pokeapi.co/api/v2/pokemon/25")
     let data = await result.json();

	response.json({
		message: "bananas!",
          pokemonName: data.name
	});
});

// Create out of CRUD
router.post("/", (request, response) => {
     response.json({
          message:"POST request received!"
     })
});

module.exports = router;

// can also be the following, but preferable syntax is above

// module.exports = {
//      PokemonRouter: router
// }
