var mongoose = require("mongoose")
const bcrypt = require('bcrypt')

var usersSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    userPassword: {
        type: String,
        required: true,
        validate: {
            validator: function (passwordValue) {
                return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/.test(passwordValue);
            },
            message: props => {
                return `Password not Valid`
            }
        }
    },
    userPhone: {
        type: Number,
        required: true,
        unique: true
    },
    userEmail: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (emailValue) {
                return /^[a-zA-Z0-9._%+-]{3,20}(@)(gmail|yahoo|outlook)(.com)$/.test(emailValue);
            },
            message: props => {
                console.log(props);
                return `${props.value} is not a valid email !`
            }
        }
    },
    userAddress: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
    },
    roleId: {
        type: mongoose.SchemaType.ObjectId,
        required: true,
        unique: true,
        ref: 'role'
    }

}, { timestamps: true });

usersSchema.pre('save', function (next) {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(this.userPassword, salt);
    this.password = hashedPassword;
    next();
})

var usersModel = mongoose.model('users', usersSchema)
module.exports = usersModel