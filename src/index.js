// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"

import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config(
    {
        path: './env'
    }
)

connectDB()
.then(
    ()=>{
        app.listen(process.env.PORT || 8000, ()=>{
            console.log(`App is listning on PORT : ${process.env.PORT}`);
        })
    }
)
.catch((error)=>{
    app.on('error',(error)=>{
        console.log("MONGO DataBase Connection ERROR : ", error)
        throw error;
    })
}
)


// import mongoose from "mongoose";
// import DB_NAME from "./constants";
// import express  from "express";

// const app = express();



// (async()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on('error',(err)=>{
//             console.log('Error : ', app)
//             throw err
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listing on PORT : ${PORT}`)
//         })
//     }catch(err){
//         console.log("Error : ", err )
//         throw err;
//     }
// })()

