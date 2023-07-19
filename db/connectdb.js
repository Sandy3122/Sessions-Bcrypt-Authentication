const mongoose = require("mongoose");

const mongoUri = "mongodb://localhost:27017/sessions";

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).catch((err) => console.error(`Not Connected To MongoDB : ${err}`))
.then(() => console.log("MongoDB Connected Successfully"));

module.exports = mongoose;
