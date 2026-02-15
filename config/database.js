const mongoose = require('mongoose');

require('dotenv').config();

const dbConnect = async ()=>{

        mongoose.connect(process.env.DATABASE_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        } )
        .then(()=> console.log("Database Connected Successfully"))
        .catch((error)=>{
            console.log("Issue in DB Connection");
            console.error(error.message);
            process.exit(1);
        })
    
    
}

module.exports - {dbConnect};