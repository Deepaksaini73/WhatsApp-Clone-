import { useContext, useEffect , useState } from "react";
import { getUsers } from "../../servics/api";
import Conversation from "./Conversation";
import { AccountContext } from "../../context/AccountProvider";

const Conversations =()=>{
    const {account} = useContext(AccountContext);
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
                    user.sub !== account.sub &&
                    <Conversation user={user} />
                ))
            }
            <hr  />
        </div>
    )
}

export default Conversations;