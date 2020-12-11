const express = require ("express");
const {request} = require ("express");
const app = express();
//const port = 2020;
const mongoose= require("mongoose");
require('dotenv').config();
const postRouter= require('./controllers/post');
//const bodyParser= require('body-parser');
const usersRouter= require('./controllers/users');

const config={
    useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}

mongoose.connect(process.env.MONGODB_URI, config)

.then(()=>{
    console.log("Successfully connected to MongoDB");
})

.catch (err=>{
    console.error('Some problem occured', err)

})
app.use(express.json())
app.use(postRouter)
app.use(usersRouter)

// app.get("/", (request,response) =>{
//     response.send ("<h1> Hey you are here YET </h1>")
// })


//Routers here

// const authenticationRoutes = require('./routes/auth')

//Mongoose connection here
// app.use(authenticationRoutes)

app.listen (2020,()=>{
        console.log("server started on localhost:2000")

})