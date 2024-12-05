import axios from 'axios';

const url = 'http://localhost:5000';

const addUser = async (data)=>{
    try{
        await axios.post(`${url}/add`,data)
    } catch(error){
        console.log("Error while add iuser api " , error.message);
    }
}

export default addUser;