const User = require('../models/user')

const getData= (req,res) =>{
    return res.status(200).json({
        message:"Successful getData function"
    })
}

const insertData = (req,res) =>{
    const {name,password} = req.body;
    let newUser = new User({name,password});
    newUser.save((err,data) =>{
        if(err){
            return res.status(400).json({
                error:`Error Occured ${err}`
            })
        }
        return res.status(200).json({
            data:data
        })
    })
}

module.exports = {
    getData,
    insertData
}