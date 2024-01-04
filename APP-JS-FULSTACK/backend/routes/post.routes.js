const express = require('express');
const { setPosts, getPosts, editPost, delePost } = require('../controllers/post.controller');
const router = express.Router();


router.get("/", getPosts
// (req , res) => {
//     res.json({ message : "Voici les données KUD"})}
);


router.post("/", setPosts
// async (req , res) => {
//     if (!req.body.message) {
//         res.status(400).json({ message : "Merci d'ajouter un message"})
//     }

//     const post =await  postModel.create({
//         message : req.body.message,
//         author : req.body.author,
//     });
//     res.status(200).json(post);
// } 


/*(req , res) => {
    res.json({ message : "Voici les données KUD"})}*/
); //declanche setpost(qui est dans controlers) lsq q nous sommes sur cette route

router.put("/:id" , editPost

// (req , res ) => {
//     res.json({ messageId : req.params.id })
// }
);

router.delete("/:id",delePost
//  (req , res) => {
//     res.json({message : "Post supprimé id : " + req.params.id});
// }
); 

router.patch("/like-post/:id", (req , res) => {
    res.json({message : "Post liké :  id : " + req.params.id});
})

router.patch("/dislike-post/:id", (req , res) => {
    res.json({message : "Post disliké :  id : " + req.params.id});
})

module.exports = router