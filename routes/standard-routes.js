const router = require("express").Router()
const db = require("../models")
const bcrypt = require("bcrypt")
const saltRounds = 10;
const jws = require("jsonwebtoken")


router.post("/api/createUser", async (req, res ) => {

    
    const hash = await bcrypt.hashSync(req.body.password, saltRounds);

    try{
        await db.User.create({
            username: req.body.username,
            password: hash,
            email: req.body.email
        })
        res.status(200)
    }catch(err){
        console.log(err)
        res.status(500).send("Failed to create user! line 28")

    }
})

router.post("/login", async (req, res ) => {
console.log(req.body)
    
    try{
        let user = await db.User.findOne({
            email: req.body.email,
        })
        if(user){user.password
            let compare = bcrypt.compareSync(req.body.password, user.password)
            if(compare){

                jws.sign({data: {
                    username: user.username,
                    _id: user._id
                }}, process.env.JWS_SEOL, {expiresIn: "60"}, (err, token)=>{
                    if(err){
                        res.status(500).send("Network Error")
                    }else{
                        res.status(200).json({token: token, username: user.username})
                    }
                })








            }
        }else{
            res.status(404).send("Invalid password or username.")
        }
        

    }catch(err){
        console.log(err)
        res.status(500).send("Failed to create user! line 28")

    }
})






module.exports = router
