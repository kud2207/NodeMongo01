const PostModel = require('../models/post.model')

/*travail sur la base de données*/

module.exports.setPosts =  (req , res) => {

    if (!req.body.message) {
        res.status(400).json({ message : "Merci d'ajouter un message"})
    }
     
        const post =  PostModel.create({
        message : req.body.message,
        author : req.body.author,
    });

    
   res.status(200).json(post);

}
 
