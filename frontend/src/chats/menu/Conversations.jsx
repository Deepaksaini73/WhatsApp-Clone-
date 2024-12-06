import { useEffect , useState } from "react";
import { getUsers } from "../../servics/api";

const Conversation =()=>{
    const [users,setusers] = useState([]);
    useEffect(()=>{
        const fetchData = async ()=>{
            let response = await getUsers(); 
            setusers(response);
        }
        fetchData();
    },[])
    return (
        <>
        <div>this is conversations</div>
        </>
    )
}

export default Conversation;