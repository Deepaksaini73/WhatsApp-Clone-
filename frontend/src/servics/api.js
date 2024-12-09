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

export const setConversation = async (data)=>{
    try {
        await axios.post(`${url}/conversation/add`,data);
    } catch (error) {
        console.log("Error while get setconversation  api " , error.message);
    }
}
export const getConversation = async (data)=>{
    try {
        const response = await axios.post(`${url}/conversation/get`,data);
        return response;
    } catch (error) {
        console.log("Error while get getconversation  api " , error.message);
    }
}