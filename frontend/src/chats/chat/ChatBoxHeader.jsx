import {useState} from 'react';


function ChatBoxHeader({person}) {
    const [menu,setMenu] =useState(false);
    const offmenu=()=>{
        setMenu(false);
    }
    console.log(menu);

  return (
    <>
    <div className="chatbox-header">
        <div className='user-info'  onClick={offmenu}>
            <img  src={person.picture} alt="dp" />
            <div>
                <span className='name'>{person.name}</span>
                <p style={{fontSize:'14px'}}>offline</p>
                </div>
        </div>
        <div className='applications'>
            <i style={{color:'#a2acb2'}} class="bi bi-camera-video-fill"  onClick={offmenu}></i>
            <i class="bi bi-search"  onClick={offmenu}></i>
            <i  class="bi bi-three-dots-vertical" onClick={()=>{setMenu(!menu)}}></i>
        </div>
    </div>
        {
            menu && (
                <div className='three-dot-menu' onClick={offmenu}>
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