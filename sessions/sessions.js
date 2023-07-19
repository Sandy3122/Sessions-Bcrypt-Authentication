const session = require("express-session");
const mongodbSession = require("connect-mongodb-session")(session);
require("dotenv").config();

const mongoUri = "mongodb://localhost:27017/sessions";

// Create a MongoDB session store:
const store = new mongodbSession({
    uri: mongoUri,
    collection: 'mySessions'
});

const sessionMiddleware = session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    proxy: true,
    store,
    name: "sessionId",
});

module.exports = sessionMiddleware;