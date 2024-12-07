import { useEffect , useState } from "react";
import { getUsers } from "../../servics/api";
import Conversation from "./Conversation";

const Conversations =()=>{
    const [users,setusers] = useState([]);
    useEffect(()=>{
        const fetchData = async ()=>{
            let response = await getUsers(); 
            setusers(response);
        }
        fetchData();
    },[])
    return (
        <div style={{marginTop:'30px'}}>
            {
                users.map(user=>(
                    <Conversation user={user} />
                ))
            }
            <hr  />
        </div>
    )
}

export default Conversations;