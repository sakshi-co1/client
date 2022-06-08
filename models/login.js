const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

const loginSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

})
// registerSchema.methods.generateAuthToken = async function() {
//     try {
//         let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
//         this.tokens = this.tokens.concat({ token: token });
//         await this.save();
//         return token;
//     } catch (err) {
//         console.log(err)
//     }
// }
const Login = mongoose.model('login', loginSchema);
module.exports = Login;