const mongoose  = require('mongoose');
const bcrypt = require('bcrypt')
const validator = require('validator')
const nodemailer = require('nodemailer');


const Schema = mongoose.Schema
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'testemail23mca20049@gmail.com',
      pass: process.env.PASSWORD
    }
  });

const userSchema = new Schema({

    email:{
        type:String,
        required:true,
        unqiue:true,
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})

//static signup method
userSchema.statics.signup = async function (email,password){
    //validation
    if(!email || !password)
    {
        throw Error("All field must be filled")
    }
    if( !validator.isEmail(email))
    {
        throw Error("Email is not valid ")
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Password is not strong enough')
    }
    const exists = await this.findOne({email})
    if(exists){
        throw Error('Email already in use ')
    }
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)

    const user = await this.create({email,password:hash})
     const mailOptions = {
            from: 'testemail23mca20049@gmail.com',
            to: email,
            subject: 'Successful sign in ',
            text: 'Thank you for signing to the ani play enjoy our free service'
          };

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });

    return user
}
//static login method
userSchema.statics.login = async function(email,password){
    if( !email || !password)
    {
        throw Error('All fields must be filled')
    }
    const user = await this.findOne({email})

    if(!user)
    {
        throw Error("incorrect email or password")
    }
    const match = await bcrypt.compare(password,user.password)
    if(!match)
    {
        throw Error('Incorrect password')
    }
    return user
}

module.exports = mongoose.model('User',userSchema)