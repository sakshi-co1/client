const mongoose = require("mongoose")

const infoSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    education: {
        type: String,
        required: true
    },
    speciality: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    pincode: {
        type: Number,
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
      },
    cloudinary_id: {
    type: String,
    }
    

})

const Info = mongoose.model('query',infoSchema);
module.exports = Info;