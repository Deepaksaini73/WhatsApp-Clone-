
import './conversation.css';

const Conversation=({user})=>{

    return (
        <>
       <div className="conversation">
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