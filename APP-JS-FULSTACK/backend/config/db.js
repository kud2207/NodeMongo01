const mongoose = require('mongoose')
const configDB = require('../database/mongodb.json')

const connectDB=()=> {mongoose.connect( "mongodb://127.0.0.1:27017/app-js-fullstack" ,
   {
   useNewUrlParser: true ,
   useUnifiedTopology: true         
   },
   (err)=>{ 
   if(err){
      console.log(err) 
   }
   else{
      console.log("Connected to DB !!")
   }
  }
)
};
   

 module.exports = connectDB
   

/* //Premier methode
const connectDB = async () =>{
 try{
    //mongoose.set('strictQuery ' , false);
    mongoose.connect(process.env.MONGO_URI, () =>
      {  console.log('Mongo connecté') }
        );
 } catch (err) {
    console.log(err);
    process.exit();
 }
};
*/
//mongo config 




