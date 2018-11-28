const Users = require('./../models/users');
const bcrypt = require('bcrypt');


exports.getMainPage = (req, res) => {
    res.render(`index.html`);
}

exports.ValidationEnteredData = (req, res) => {
    const Phone = req.body.phone;
    const password = req.body.password;
    const repeatPassword = req.body.repeatPassword;
    var dbCursor=db.users.find({phone:Phone})
    console.log(dbCursor);
    if (dbCursor!=null&&password!=repeatPassword) {
      return true;
    }
    return false;
}

exports.addNewUser = (req, res) => {

    const login = req.body.login;
    const password = req.body.password;
    const phone = req.body.phone;
    const repeatPassword = req.body.repeatPassword;

    
    var cursorPhone=dataBase.users.find({'phone':phone});
    var cursorLogin=dataBase.users.find({'login':login});
    console.log(cursorPhone);
    if (cursorPhone.phone!=phone&&cursorLogin.login!=login&&password==repeatPassword){
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