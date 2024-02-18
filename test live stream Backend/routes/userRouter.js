const router = require("express").Router()
const userControler = require("../controllers/userContrl")

router.post( "/addUser" ,  userControler.addUser )

module.exports = router