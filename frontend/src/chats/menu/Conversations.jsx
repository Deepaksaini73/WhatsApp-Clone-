import { useContext, useEffect , useState } from "react";
import { getUsers } from "../../servics/api";
import Conversation from "./Conversation";
import { AccountContext } from "../../context/AccountProvider";

const Conversations =({search})=>{
    const {account} = useContext(AccountContext);
    const [users,setusers] = useState([]);
    useEffect(()=>{
        const fetchData = async ()=>{
            let response = await getUsers(); 
            let filterResponse = response.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));
            setusers(filterResponse);
        }
        fetchData();
    },[search])
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