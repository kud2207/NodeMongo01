const postModel = require('../models/post.model');
const PostModel = require('../models/post.model'); //apll de schema de la BD

/*Different operation sur les Routes*/

//GET:: affiche les element de la BD**************************
module.exports.getPosts = async (req , res) => {
    const posts = await PostModel.find();
    res.status(200).json(posts)
};


//POST:: fontion pour ecrire dans la BD***********************
module.exports.setPosts = async (req , res) => { // "async & await" necessaire sur ce script pour ecire dans la BD
    
    if (!req.body.message) {
        res.status(400).json({ message : "Merci d'ajouter un message"})
    }
        const post = await PostModel.create({ //script pour recuperer les donner des champs 
        message : req.body.message, //"message" variable du schema
        author : req.body.author,
        age : req.body.age,
        sexe : req.body.sexe,
    });

   res.status(200).json(post);
}
 

//PUT:: fontion pour modifier la BD
module.exports.editPost = async (req , res) => {
    const post = await postModel.findById(req.params.id); //pour recuperer l'id existant dans la BD

    if(!post){
        res.status(400).json({ message : "Ce post n'existe pas"})
    }

    const updatePost = await postModel.findByIdAndUpdate(post,  //"post" recupere ID
         req.body, {
            new : true,         //pour modifier la champs "findByIdAndUpdate"
        }    
        );   

        res.status(200).json(updatePost)

}
 