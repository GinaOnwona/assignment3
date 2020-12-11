const usersRouter= require ('express').Router();
const User = require('../models/users');


usersRouter.post('/signup', async (request,response)=>{
try{
        let newUser = new User(request.body)
       let result = await newUser.save()
        response.status(201).send({message: 'Signup succesfull', result});

}catch(err ){
            console.log(err)
            response.status(400).send({message: 'Could not sign up'});
        }
    
})

usersRouter.post('/login', async (request,response)=>{

    const {username,email,password} =request.body
    try{
           let newUser = new User(request.body)
           let result = await newUser.save()
            response.status(201).send({message: 'Login succesfull', result});
    
    }catch(err ){
                console.log(err)
                response.status(400).send({message: 'Could not log in'});
            }
        
    })
    

module.exports = usersRouter