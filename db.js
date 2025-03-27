import mongoose from "mongoose";

const connectToMongo = async(dburl)=>{
    await mongoose.connect(dburl)   
    .then(()=>{
        console.log("JobApp database is active!!!")
    })
    .catch((err)=>{ 
        console.log(`error is occurred!!`); 
        console.log(err);
    })
}

export default connectToMongo ;