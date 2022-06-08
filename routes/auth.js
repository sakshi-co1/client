const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs')
require('../db/conn');
const Login = require('../models/login')
const Userinfo = require('../models/userinfo');
const upload = require("../utlies/multer")
const cloud = require("../utlies/cloud");
// const ulpload = require("..//middleware/upload")

// login
var userEmail ;
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        
        if (!email || !password) {
            return res.status(400).json({ error: 'Plz fill require filled' })
        }
        const userLogin = await Login.findOne({ email: email });
        console.log(userLogin);
        if (userLogin) {
            let isMatch;
            // const isMatch = await bcrypt.compare(password, userLogin.password);
            if(userLogin.email == email){
                 isMatch = true;
            }else{
                isMatch = false;
            }

            if (!isMatch) {
                res.status(400).json({ error: "Invalid Credientials !" })
            } else {
                userEmail = email;
                res.json({ message: "user signin successfully" })
                
            }
        } else {
            res.status(400).json({ error: "Invalid Credientials" })
        }

    } catch (err) {
        console.log(err);
    }
})



// router.post("/userinfo", upload.single("image"), async (req, res)
 router.post("/userinfo", upload.single("image"), async (req, res)=> {
    try {
        // Upload image to cloudinary
        const result = await cloud.uploader.upload(req.file.path);
        console.log(result)
    
        // Create new user
        let user = new Userinfo({
            fullname: req.body.name,
            dob : req.body.dob,
            mobile: req.body.mobile,
            education: req.body.education,
            speciality: req.body.speciality,
            company: req.body.company,
            pincode : req.body.pincode,
            bio : req.body.bio,
            avatar: result.secure_url,
            cloudinary_id: result.public_id,
        });
        // Save user
        await user.save();
        res.json(user);
      } catch (err) {
        console.log(err);
      }
    });

module.exports = router;
