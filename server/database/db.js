import mongoose from "mongoose";


const Connection=async (user,pass)=>{
  const URL=`mongodb+srv://${user}:${pass}@inshort.zyzzerv.mongodb.net/?retryWrites=true&w=majority`;
  try{
    await mongoose.connect(URL,{useNewUrlParser:true});
    console.log("databse connected succewsfully");
  }catch(error){
      console.log("error while connecting db :",error);
  }

}


export default Connection;
