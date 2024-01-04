const mongoose = require('mongoose');

//indiquer la structure de la BD l'or de la manipulation
const postSchema = mongoose.Schema(
    {
        message : {
            type : String,
            require : true,
        },
        author : { 
            type : String,
            require : true
        },
        age : { 
            type : String,
            require : true
        },
        sexe : { 
            type : String,
            require : true
        },
        likers: {
            type : [String]
        }
    },

    {
        //pour indiquer la date de creation ou de modification
        timestamps: true, 
    }
);

//post : pour le nom que sava porter dans la BD
//postSchema sstructure de la bBD
module.exports = mongoose.model('post', postSchema) 
