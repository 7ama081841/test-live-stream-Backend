const express = require("express")
const dotenv = require("dotenv")
const { default: mongoose } = require("mongoose")
const bodyParser = require('body-parser')

const app = express()
dotenv.config()
const port = process.env.PORT

app.use(bodyParser.json());

try {
    mongoose.connect(process.env.DB)
    console.log("connected to db")
} catch (error) {
    console.log("error to connect ")
    
}

app.use( "/api" , require("./routes/liveStreamRouter") )
app.use( "/api" , require("./routes/userRouter") )


app.listen( port , () => {
    console.log( ` server is runnig on http://localhost:${port} ` )
} )