const Users = require('./../models/users');
const bcrypt = require('bcrypt');


exports.getMainPage = (req, res) => {
    res.render(`index.html`);
}

ValidationEnteredData = (phone,login,password,repeatPassword) => {
    var cursorPhone=Users.find({"phone":"1"});
    var cursorLogin=Users.find({"login":"1"});
    console.log(cursorPhone.phone);
    console.log(cursorLogin.login);  
    if (cursorPhone.phone!=phone&&cursorLogin.login!=login&&password==repeatPassword) {
      return true;
    }
    return false;
}

exports.addNewUser = (req, res) => {

    const login = req.body.login;
    const password = req.body.password;
    const phone = req.body.phone;
    const repeatPassword = req.body.repeatPassword; 
    if (ValidationEnteredData(phone,login,password,repeatPassword)){
        const newUser = new Users ({
         login: login,
         phone: phone,
         password: password
        });

        Users.createUser(newUser);

        res.redirect('/');
    }
    //console.log(req.body);  

   
}