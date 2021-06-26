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
router.get("/api/find/user/:username", async (req, res ) => {
  
    console.log(req.params.username)
    try{
        if(req.params.username !== "empty"){
            let user = await db.User.find({
            
                username: { $regex: ".*" + req.params.username + ".*"},
            }, {password: 0, email: 0, friends: 0, rooms: 0}
            )
            
            if(user.length){
                res.status(200).json(user)
            }else{
                res.status(200).send([{username: "No Valid Matches."}])
            }

        }else{
            res.status(200).send([{username: "No searched items."}])
        }
        
        

    }catch(err){
        console.log(err)
        res.status(500).send("Failed to create user! line 28")

    }
})

router.post("/api/connectionRequest", async (req, res ) => {
    let token = false
    if(!req.headers){
        token = false
    }else if (!req.headers.authorization){
        token = false
    }else{
        token = req.headers.authorization.split(" ")[1]
    }
    if(!token){
        res.status(404).send("Please ign in to create friend request.")
    }else{

        jws.verify(token, process.env.JWS_SEOL, (err, data) => {
            if(err){
                res.status(404).send("Session expired, please login.")
            }else{
                console.log(data)
            }
        })

    }
})






module.exports = router
