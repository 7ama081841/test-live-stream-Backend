const User = require("../model/user")

const addUser = async (req , res) => {
    try {
        const newUser = new User({
            ...req.body
        })

        await newUser.save()

        res.status(201).json(newUser)
    } catch (error) {
        console.log(error)
        res.status(500).send("Internal Server Error ")
    }
}

module.exports = {
    addUser
}