// const express = require("express")
// const app = express()
// const bodyParser = require("body-parser")
// const cookieParser = require("cookie-parser")
// const session = require("express-session")
// const morgan = require("morgan")
// const dotenv = require("dotenv")

// dotenv.config()

// if (app.get("env") === "production") {
//     app.set("trust proxy", 1); // trust first proxy
//     session.cookie.secure = true; // serve secure cookies
// } else {
//     app.set("trust proxy", false); //Don't trust proxies for development enviro
// }

// app.use(bodyParser.urlencoded({extended:true}));

// app.use(cookieParser())

// app.use(
//     session({
//         key:"sandeepSeeram",
//         secret: process.env.SESSION_SECRET,
//         resave: true,
//         saveUninitialized: false,
//         cookie: {
//             expires:600000
//         }
//     })
// )

// app.use((req,res, next) => {
//     if(req.session.user && req.cookies.sandeepSeeram){
//         res.redirect("/home")
//     }
//     next()
// })
// const sessionChecker = app.use((req,res, next) => {
//     if(req.session.user && req.cookies.sandeepSeeram){
//         res.redirect("/home")
//     }
//     else{
//         next()
//     }
// })



// app.set("port", 8080)
// app.listen(app.get("port"), () => console.log(`Server running at http://localhost:8080`))