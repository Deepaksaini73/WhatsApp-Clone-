import { useContext } from 'react';
import  { AccountContext } from '../../context/AccountProvider';
import { setConversation } from '../../servics/api';
import './conversation.css';

const Conversation=({user})=>{
    const {setPerson,account} = useContext(AccountContext);
    const getuser= async()=>{
        setPerson(user);
        await setConversation({senderId:account.sub,reciverId:user.sub});
    }
    return (
        <>
       <div className="conversation" onClick={getuser}>
        <div className="user-dp"><img src={user.picture} alt="dp" /></div>
        <div className='user-info-box'>
            <div className="user-name-box">
                <p>{user.name}</p>
            </div>
        </div>
       </div>
       </>
    )
}

export default Conversation;