import  mongoose from 'mongoose';

const Connection =async ()=>{
    const URL = "mongodb://localhost:27017/whatsapp-clone"
    try {
        await mongoose.connect(URL);
        console.log("database connected succefuly");
    } catch (error) {
        console.log('erreor in connet database ',error.message);
    }
}

export default Connection