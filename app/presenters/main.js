const Users = require('./../models/users');
const bcrypt = require('bcrypt');

exports.getMainPage = (req, res) => {
    res.render(`index.html`);
}

exports.addNewUser = (req, res) => {
    const login = req.body.login;
    const password = req.body.password;
    const phone = req.body.phone;

    console.log(req.body);  

   const newUser = new Users ({
       login: login,
       phone: phone,
       password: password
   });

   Users.createUser(newUser);

    res.redirect('/');
}