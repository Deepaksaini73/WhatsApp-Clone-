import express from 'express';
import cors from 'cors';
import Connection from './database/db.js';


const app = express(); 
Connection();

// for cores problem
app.use(cors());
app.use(express.json());


app.post('/add', (req, res) => {
    res.send('Welcome to the Home Page!');
});

const PORT = 5000;
app.listen(PORT,()=>console.log(`server is running on port  ${PORT} ...`));