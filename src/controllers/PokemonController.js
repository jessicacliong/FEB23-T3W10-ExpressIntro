const express = require('express');

// create an instance of the Express router

const router = express.Router();

// this sends a json string. instead of just a html string
router.get("/", (request, response) => {
     response.json ({
          message:"Hello world from a router!"
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
