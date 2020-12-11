const postRouter= require ('express').Router();
const post = require('../models/post');
// const {response} =require('express')
const Post = require('../models/post')


//get all posts
postRouter.get('/',(request,response) =>{
    Post.find({}).then(res=>{
        response.status(200).send(res)
    })
})

//allow you to post
postRouter.post('/newpost', async (request,response)=>{
    const {name, author, content}=request.body;
    if(name && author && content){
        const postCount= await Post.countDocuments();

        const newPost = new Post({
            //id: postCount +1,
            author:author,
            content:content,
            name:name,
           // date:date 
        })
        newPost.save()
        .then (res =>{
            response.status(201).send(res);
        })
        .catch(err => {
            console.log(err)
            response.sendStatus(501);
        })
    }
    else {
        response.status(400).send({message:"Checkyour request  body"})
    
    }
})

    //get posts of specific author
    postRouter.get('/:author',(request,response,next) =>{
        const author = request.params.author
        console.log(author)
        Post.find({author:author}).then((res) =>{
            response.status(200).send(res)
            next();
        })
    })



module.exports = postRouter