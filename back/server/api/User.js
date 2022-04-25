const express = require('express');
const router = express.Router();

// SIGNUP
router.post('/signup', (req, res) => {
    let {fullName, emailAddress, contactNumber, password, confirmPassword} = req.body;
    fullName = fullName.trim();
    emailAddress = emailAddress.trim();
    contactNumber = contactNumber.trim();
    password = password.trim();
    confirmPassword = confirmPassword.trim();
    
    if ( fullName == "" || emailAddress == "" || contactNumber == "" || password == "" || confirmPassword == "" ) {
            res.json({
                status: "FAILED",
                message: "Empty Input Fields!"
            });
      } else if (!/^[a-zA-Z]*$/.test(fullName)) {
            res.json({
                status: "FAILED",
                message: "Invalid Name Entered!"
            })
      } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailAddress)) {
            res.json({
                status: "FAILED",
                message: "Invalid Email Entered!"
            })
      } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(contactNumber)) {
            res.json({
                status: "FAILED",
                message: "Corrupted Number :D"
            })
      } else if (password.length < 8) {
            res.json({
                status: "FAILED",
                message: "Password Must Atleast 8 Characters!"
            })
      } else if (password != confirmPassword) {
            res.json({
                status: "ERROR",
                message:  "Passwords did not match!"
            })
      } else {
            //Pag Check Bangin Member nat name or email
      }
})



// SIGNIN
router.post('/signin', (req, res) => {
    
})


module.exports = router; 