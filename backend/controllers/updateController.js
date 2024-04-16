const User = require('../models/signupModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const validator = require('validator')
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'testemail23mca20049@gmail.com',
      pass: process.env.PASSWORD
    }
  });

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' })
}

const updateUser = async (req, res) => {

    const { email, password } = req.body

    try {
        if (!email || !password) {
            throw Error("All field must be filled")
        }
        if (!validator.isEmail(email)) {
            throw Error("Email is not valid ")
        }
        if (!validator.isStrongPassword(password)) {
            throw Error('Password is not strong enough')
        }
        const exists = await User.findOne({ email })
        if (exists) {


            const salt = await bcrypt.genSalt(10)
            const hash = await bcrypt.hash(password, salt)

            const user = await User.updateOne({ email: email },{$set:{password:hash}})
            // create a token
            const token = createToken(user._id)
            const mailOptions = {
                from: 'testemail23mca20049@gmail.com',
                to: email,
                subject: 'Password Updated ',
                text: 'Your password is updated successfully please enjoy our services without any worries'
              };
    
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });

            res.status(200).json({ email,token })
        }
        else{
            
            res.status(400).json({ error: 'user does not exist' })
        }

    } catch (error) {
        res.status(400).json({ error: error.message })
    }



}

module.exports = { updateUser }