import axios from 'axios';


const URL='http://localhost:8000';

export const getNews=async ()=>{
  try{
    return await axios.get(`${URL}/news`);
  }catch(error){
    if(error)
    console.log("error in getNews api : ",error);
  }
}