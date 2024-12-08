import { useContext } from 'react';
import  { AccountContext } from '../../context/AccountProvider';
import './conversation.css';

const Conversation=({user})=>{
    const {setPerson} = useContext(AccountContext);
    const getuser=()=>{
        setPerson(user);
        
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