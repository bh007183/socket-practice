const router = require("express").Router()
const db = require("../models")
const bcrypt = require("bcrypt")
const saltRounds = 10;


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


    try{
        let data = await db.User.find({
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






module.exports = router
