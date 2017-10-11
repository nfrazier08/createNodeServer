// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var goodPort = 7000;
var badPort = 7500;




// Create a generic function to handle requests and responses
function handleGoodRequest(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("Oh Wow! You look fantastic " + request.url);
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server = http.createServer(handleGoodRequest);

// Start our server so that it can begin listening to client requests.
server.listen(goodPort, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + goodPort);
});

//**************

// Create a generic function to handle requests and responses
function handleBadRequest(request, response) {
    
      // Send the below string to the client when the user visits the PORT URL
      response.end("Oh Wow! You look like a trash bag" + request.url);
    }
    
    // Use the Node HTTP package to create our server.
    // Pass the handleRequest function to empower it with functionality.
    var server = http.createServer(handleBadRequest);
    
    // Start our server so that it can begin listening to client requests.
    server.listen(badPort, function() {
    
      // Log (server-side) when our server has started
      console.log("Server listening on: http://localhost:" + badPort);
    });