import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import Connection from './database/db.js';
import User from './schema/User.js';


const app = express(); 
Connection();

// for cores problem
app.use(cors());
app.use(express.json());
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))

app.post('/add', async (req, res) => {
    try{
        let exist = await User.findOne({sub:req.body.sub});
        if(exist) {
            res.status(200).json({msg:"user aleady exicst"}) ;
            return ;  
        }
        const newUser= new User(req.body);
        await newUser.save();
        return  res.status(200).json({msg:"user login successfully"}) ;
    } catch(error){
        console.log(error.message);
        return  res.status(600).json(error.message);
    }

});

app.get('/users',async (req,resp)=>{
    try {
        const users = await User.find({});
        return resp.status(200).json(users);
    } catch (error) {
        return resp.status(500).json(error.message);
    }
})





const PORT = 5000;
app.listen(PORT,()=>console.log(`server is running on port  ${PORT} ...`));