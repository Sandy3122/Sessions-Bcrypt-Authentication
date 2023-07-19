// const router = require("express").Router();

// // const userController =  require("../controllers/userController");

// //Creacting User Router
// // for handling all the routes related to users.
// // 1) Register - To create a new account for our application and store it in database with encrypted
// // password using bcrypt library
// // 2) Login-To verify if given email id is valid or not, then check password against
// // stored hash value of that particular mailid from DB (using bcryp), If both are correct
// // than login successfull else failed
// // 3) Forgot Password: This route will send an OTP(One Time Passcode)
// // on provided registered Email ID so as to reset the password
// // 4) Reset Password : After receiving otp on entered mobile number this API can be used by
// // client side app to update their passwords
// // 5) Get All Users:-This api returns list of all available users alongwith there details like
// // name ,email etc..
// // 6) Update Profile :- It updates profile information about loggedin user such as name, address,
// // phone no., image upload
// // etc...
// // 7) Delete Account :- Deletes current active session & deletes corresponding record from db

// const express = require("express")
// const app = express();
// const sessionMiddleware = require('../sessions/sessions')
// //Using Session Middleware
// app.use(sessionMiddleware);

// const {
//     landingPage,
//     signupPage,
//     signupRoute,
//     loginPage,
//     loginRoute,
//     logoutRoute,
//     homeRoute
// } = require("../controllers/userController")

// //LandingPage Route Handler
// router.get('/', landingPage);

// //Register Route Handler
// router.get('/signup', signupPage);
// router.post('/signup', signupRoute);

// //Login Route Handler
// router.get('/login', loginPage);
// router.post('/login', loginRoute );

// //Logout Route Handler
// router.post("/logout", logoutRoute);

// //Home Route
// //Session Checker
// const isAuth = (req, res, next) => {
//     req.session.isAuth ? next() : res.redirect('/login')
// } 
// router.get('/home', isAuth, homeRoute);

// module.exports = router;