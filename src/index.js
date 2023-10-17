const { app, HOST, PORT } = require('./server');

// Activate the server -- happens all below this line vvvvvv

// not good to hardcode to port 3000, so we can write PORT instead
app.listen(PORT, HOST, () => {
     console.log("Server is running on port: " + PORT);
});