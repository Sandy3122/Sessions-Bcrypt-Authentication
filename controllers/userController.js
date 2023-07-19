const express = require("express")
const router = express.Router()
const userModel = require("../models/User");
const bcrypt = require("bcrypt")
require("dotenv").config();


const sessionMiddleware = require('../sessions/sessions')
//Using Session Middleware
router.use(sessionMiddleware);

//Session Checker
const isAuth = (req, res, next) => {
    req.session.isAuth ? next() : res.redirect('/login')
} 

//Landing Page Route
router.get('/', (req, res) => {
    req.session.isAuth ? res.redirect("/home") : res.render("landing")
});

//Login Route
router.get('/login', (req, res) => {
    // req.session.isAuth ? next(): res.redirect('/login')
    if(req.session.isAuth){
        return res.redirect('/home')
    }
    else{
       return res.render('login')
    }
});

router.post('/login', async(req, res) => {
    const { email, password } = req.body;
    
    try {
      const user = await userModel.findOne({ email });
  
      if (!user) {
        return res.status(404).send(`User Not Found <a href="/login">Go Back To LogIn Page</a>`);
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
  
      if (!isMatch) {
        return res.status(401).send(`<center>Password Did Not Match! <br> Try Again With Correct Password <br> <a href="/login">Go Back To LogIn Page</a></center>`);
      }
  
      req.session.isAuth = true;
      return res.redirect("/home");
    } catch (err) {
      // Handle error here...
      console.error("Error occurred during Login:", err);
      // Handle the error appropriately, such as redirecting to an error page or displaying an error message to the user.
      return res.status(500).send(`Internal Server Error, <a href="/login">Go Back To LogIn Page</a>`);
    }
});

//SignUp Route
router.get('/signup', (req,res) => {
    req.session.isAuth ? res.redirect("/home") : res.render("signup")
});

router.get('/signup', async(req, res) =>{
    const {username, email, password} = req.body;

    let user = await userModel.findOne({email});

    if(user){
        res.send(`User with this email already exists <a href="/login">Go Back To Signup Page</a>`)
        console.log("User with this email already exists")
        return res.redirect("/home")
    }

    try{
    const hashedPassword = await bcrypt.hash(password, 10);

    let newUser = new userModel({
        username,
        email,
        password: hashedPassword,
    })

    await newUser.save();
    // res.status(200).send("User registered successfully");
    res.redirect("/login")
    }
    catch(err){
        //handle error here...
        console.error("Error occurred during password hashing:", err);
        // Handle the error appropriately, such as redirecting to an error page or displaying an error message to the user.
        res.status(500).send(`Internal Server Error,  <a href="/signup">Go Back To Signup Page</a>`);
        // res.redirect("/signup")
    }
});

//Logout Route
router.post('/logout', (req,res) => {
    req.session.destroy((err) => {
        if(!err){
            res.clearCookie('sessionId');
            // res.json({"message": "Logout successfull!" });
            res.send(`Logout Successfully, <a href="/">Go Back To Landing Page</a>`)
            }
        else{
            console.log(err);
            res.status(400).json({'msg': 'Failed to logout'});
        }
    });
});

router.get('/home', isAuth, (req, res) => {
    res.render("home");
});

module.exports = router;