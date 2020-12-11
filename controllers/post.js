const postRouter= require ('express').Router();
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




postRouter.patch('/updatepost', async (request,response)=>{
    const { author, content ,upvotes,downvotes}=request.body;
    if(author && upvotes && downvotes && content){
        
    
        // const postCount= await Post.countDocuments();

        // const newPost = new Post({
        //     //id: postCount +1,
        //     author:author,
        //     content:content,
        //     name:name,

           // date:date 
        // })
        await updatePost.save()
        .then (res =>{
            response.status(201).send({message: "Blog updated successfully"});
       

        })
        .catch(err => {
            console.log(err)
            response.sendStatus(501);
        })
    }
    else {
        response.status(400).send({message:"post not updated"})
    
    }
})
// // BlogController.deleteBlog = async ( req,res ) => {
//     try {
//         let blog= await Blog.findOneAndDelete({_id: req.params.id})
//         if(blog){
//             res.status(200).send({message: 'Blog deleted successfully'})
//         }else{
//             res.status(400).send({message: 'Could not delete blog'})
//         }
//     } catch (error) {
//         console.log(error)
//     }
// }
 
postRouter.delete('/',(request,response) =>{
    Delete.find({}).then(res=>{
        response.status(200).send({message: "Blog deleted Successfuly"})
    })
})
   

module.exports = postRouter