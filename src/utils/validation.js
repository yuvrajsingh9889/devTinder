const validator = require('validator');

const validateSignupData = (req)=>{

    const {firstName, lastName, emailId, password} = req.body;

    if(!firstName || !lastName){
        throw new Error('Plese Enter your name First')
    }
    else if(!emailId || !validator.isEmail(emailId)){
        throw new Error("Please Enter a valid email address");
    }
    else if(!password || !validator.isStrongPassword(password)){
        throw new Error('Please Enter a strong Password');
    }
}

module.exports = {
    validateSignupData
}