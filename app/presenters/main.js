const Users = require('./../models/users');
const bcrypt = require('bcrypt');


exports.getMainPage = (req, res) => {
    res.render(`index.html`);
}

exports.addNewUser = async (req, res) => {

    const login = req.body.login;
    const password = req.body.password;
    const phone = req.body.phone;
    const repeatPassword = req.body.repeatPassword; 
    if (!await validateEnteredData(phone, login, password, repeatPassword)) {
        res.redirect('back');

        return;
    }

    const newUser = new Users ({
        login: login,
        phone: phone,
        password: password
    });

    Users.createUser(newUser);

    res.redirect('/');    
}

async function validateEnteredData(phone, login, password, repeatPassword) {
    const cursorPhone = await Users.findOne( { phone } );
    const cursorLogin = await Users.findOne( { login } );
    
    if (!cursorPhone && !cursorLogin && password == repeatPassword) {
      return true;
    }
    return false;
}