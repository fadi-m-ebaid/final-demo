const usersModel = require('../models/users');
const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');


async function login(req, res) {
    var { userEmail, userPassword } = req.body;
    var user = await usersModel.findOne({ userEmail });

    if (user) {
        var validPassword = bcrypt.compareSync(userPassword, user.userPassword);

        if (validPassword) {
            var token = jwt.sign({
                userId: user._id,
                userName: user.userName,
                roleId: user.roleId
            }, process.env.SECRET, { expiresIn: '4h' });
            res.status(200).json(token);
        }
        else {
            res.status(401).json({ message: 'Invalid Email or Password' })
        }
    }
    else {
        res.status(401).end('Email Not Found');
    }
}

module.exports = { login };


