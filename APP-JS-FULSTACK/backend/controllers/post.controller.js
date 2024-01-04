const PostModel = require('../models/post.model');

/*travail sur la base de données*/

module.exports.setPosts = async (req , res) => {

    if (!req.body.message) {
        res.status(400).json({ message : "Merci d'ajouter un message"})
    }
     
        const post = await PostModel.create({
        message : req.body.message, //"message" variable du schema
        author : req.body.author,
        age : req.body.age,
        sexe : req.body.sexe,
    });

    
   res.status(200).json(post);

}
 
 