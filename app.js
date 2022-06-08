const dotenv = require("dotenv")
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cookieparser=require("cookie-parser");
// const Booking = require("./models/bookingSchema");
app.use(cookieparser());

dotenv.config({ path: './config.env' });
require('./db/conn')
app.use(express.json());
app.use(require('./routes/auth'))

// const DB = 'mongodb+srv://sakshi:Sakshi123@cluster0.bc0nm.mongodb.net/BloodDonation?retryWrites=true&w=majority'
const PORT = process.env.PORT;


// connection file


// middelware
const middelware = (req, res, next) => {
    console.log("middleware");
    next();
}
app.get('/login', (req, res) => {
    res.send(" hi /");
});

// middelware();

app.get('/userinfo', (req, res) => {
    res.send(" hi /");
});

app.get('/about', middelware, (req, res) => {
    res.send(" about");
});
app.get('/booking', middelware, (req, res) => {
    res.send(" booking");
});

const deleteDoc = async(_id)=>{
   const res = await Booking.deleteOne({_id :_id});
}

app.use('/userinfo',require('./routes/auth'))


app.listen(PORT, () => {
    console.log(`server is running at port no. ${PORT}`);
})