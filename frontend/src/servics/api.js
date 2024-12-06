import axios from 'axios';

const url = 'http://localhost:5000';

export const addUser = async (data)=>{
    try{
        await axios.post(`${url}/add`,data)
    } catch(error){
        console.log("Error while add user api " , error.message);
    }
}

export const getUsers = async ()=>{
    try {
        let response = await axios.get(`${url}/users`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log("Error while get user api " , error.message);

    }
}