/*
// Session And Tokens

Sure! Here are the differences between session-based authentication and token-based authentication in simple words and points:

Session-Based Authentication:
1. The server creates a session for the user upon successful login.
2. The session is typically stored on the server and associated with the user's session ID.
3. The session ID is sent to the client (usually through a cookie) and included in subsequent requests to identify the session.
4. The server validates the session ID with each request to ensure the user is authenticated.
5. Sessions are often managed and maintained on the server-side, requiring server resources to store session data.
6. Logout usually involves destroying the session on the server, requiring explicit server-side action.

Token-Based Authentication:
1. Upon successful login, the server generates a unique token for the user.
2. The token is typically a string of characters and is sent to the client, which stores it (e.g., in local storage or a cookie).
3. The client includes the token in subsequent requests, usually in the request headers (e.g., Authorization header).
4. The server verifies the token's validity and authenticity with each request, usually by checking a digital signature or decoding the token.
5. Tokens are often self-contained and store user authentication information, reducing the need for server-side storage and database lookups.
6. Logout generally involves deleting the token on the client-side, as tokens are typically stateless and managed on the client.

In summary, session-based authentication relies on server-side sessions and session IDs,
while token-based authentication uses tokens that are generated and managed by the server and stored on the client.
Tokens are self-contained, reducing the need for server-side storage and allowing for stateless authentication.

*/

//To generate Random Value
// const crypto = require("crypto");
// const randomString = crypto.randomBytes(32).toString('hex');
// console.log(`RANDOM_STRING : ${randomString}`);

const express = require("express");
const app = express();
const path = require("path")
// const bodyParser = require("body-parser")

// Serve static files from the build directory
app.use(express.static(path.join(__dirname, 'dist')));

//To accept the form data
app.use(express.urlencoded({extended: true}))

//ejs
app.set('view engine', "ejs");

//Import Modularity Components
const sessionMiddleware = require('./sessions/sessions')
const routes = require('./controllers/userController')
require('./db/connectdb')
     
//Using Session Middleware
app.use(sessionMiddleware);

//Use Routes
app.use(routes);


const port = process.env.PORT || 4000;
app.listen(port, () =>
    console.log(`Server running at http://localhost:${port}`)
);
