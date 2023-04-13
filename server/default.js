import { data } from "./constants/data.js";
import News from "./model/news.js";
import Connection from "./database/db.js";
import dotenv from "dotenv"

dotenv.config();


const user=process.env.DB_USERNAME;
const pass=process.env.DB_PASSWORD;

const DefaultData= async ()=>{
  try {
    await Connection(user,pass);
    const bulkWriteResult = await News.bulkWrite(data.map((doc) => ({
      insertOne: {
        document: doc,
      },
    })));
    console.log(`Inserted ${bulkWriteResult.insertedCount} documents`);
  } catch (error) {
    if (error.writeErrors && error.writeErrors.length > 0) {
      for (const writeError of error.writeErrors) {
        console.error(writeError.errmsg);
      }
    } else if (error.writeConcernErrors && error.writeConcernErrors.length > 0) {
      for (const writeConcernError of error.writeConcernErrors) {
        console.error(writeConcernError.errmsg);
      }
    } else {
      console.error(error);
    }
  }
};



export default DefaultData;

// try {
//   await News.insertMany(data).then((result) => {
//     // handle successful write
//     console.log("success", result)
//   })
//   .catch((error) => {
//     if (error.writeErrors && error.writeErrors.length > 0) {
//       for (let i = 0; i < error.writeErrors.length; ++i) {
//         // handle each write error
//         console.log("write");
//       }
//     } else {
//       // handle other errors
//       console.log("others")
//     }
//   });
//   console.log('Success ');
//   } catch (error) {  
//   console.log('error in processing data ', error);
// }


// try{
//   await News.deleteMany({});
//   await News.insertMany(data);
//   console.log("data imported successfuly");
// }catch(error){
//   if(error)
//   console.log("error while importing ",error);
// }
// }
// export default DefaultData;