import {useState} from 'react';
import './chat.css'

function ChatBoxHeader() {
    const [menu,setMenu] =useState(false);
    const offmenu=()=>{
        setMenu(false);
    }
    console.log(menu);

  return (
    <>
    <div className="chatbox-header">
        <div className='user-info'  onClick={offmenu}>
            <img  src="https://lh3.googleusercontent.com/a/ACg8ocLhdd3etZXlZuHyGDfnIuH3w7uu0gKFsqhlFlvV0EOoivqkpT9i=s96-c" alt="dp" />
            <span className='name'>Deepak saini</span>
        </div>
        <div className='applications'>
            <i style={{color:'#a2acb2'}} class="bi bi-camera-video-fill"  onClick={offmenu}></i>
            <i class="bi bi-search"  onClick={offmenu}></i>
            <i style ={{zIndex:'10000'}} class="bi bi-three-dots-vertical" onClick={()=>{setMenu(!menu)}}></i>
        </div>
    </div>
        {
            menu && (
                <div className='three-dot-menu'>
                        <p>Contact info</p>
                        <p>Select messages</p>
                        <p>Close chat</p>
                        <p>Mute notifications</p>
                        <p>Disappearing messages</p>
                        <p>Clear chat</p>
                        <p>Delete chat</p>
                        <p>Add to favourites</p>
                        <p>Report</p>
                        <p>Block</p>
                    </div>
            )
        }
    </>
  )
}

export default ChatBoxHeader