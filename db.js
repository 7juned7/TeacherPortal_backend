const DATABASE = process.env.DATABASE
const mongoose = require('mongoose')
const mongoURI = DATABASE

const mongoDB = async() => {
try{
   await mongoose.connect(mongoURI);
   console.log("connected")
   let fetched_data = mongoose.connection.db.collection("users");
    let userData = await fetched_data.find({}).toArray()
    try{
        global.userData = userData;
        
        let fetchedStudentData = mongoose.connection.db.collection("studentmarksdatas")
        
        
        let studentMarksDatas = await fetchedStudentData.find({}) .toArray();
        global.studentMarksData =studentMarksDatas;
        
      
    }catch(error){
        console.log("error in getting data")
    }
}catch(error){
    console.log("error")
}

}


module.exports = mongoDB;