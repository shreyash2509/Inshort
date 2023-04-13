import News from "../model/news.js";

export const getData=async (req,res)=>{
  try{
    let data=await News.find({});
    // console.log(data);
    // res.send(data);
    res.status(200).json(data);
  }catch(error){
    res.status(404).json({message:error.message});
  }
}

