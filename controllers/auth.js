const Users = require ('../.models/users')

app.use(express.json())

const signup = async (request,response) => {
const{firstname, lastname, email, password} =request.body;
const user = User({firstName, lastName,email,password})

try{
const newUser = await user.save()

response.send({
    message: "User Created Successfully",
    newUser
})

} catch (exception) {
    response.status(500). send({error: "email Already used"})

}
    
}

module.exports = signup