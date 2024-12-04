import React,{useState} from 'react';


function ChatMenuHeader() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  return (
    <>
    <div className='chat-header'>
        <div className='chat-name'>Chats</div>
        <div className='three-dot'>
          <p className='create-new-chat'><i class="bi bi-folder-plus"></i></p>
          <p className='three-dot-btn' onClick={toggleMenu}><i class="bi bi-three-dots-vertical"></i></p>
        </div>

    </div>
    {
      menuVisible &&  (
                    <div className='three-dot-menu'>
                        <p>New Group</p>
                        <p>Start Massage</p>
                        <p>Select Chat</p>
                        <p>Log Out</p>
                        <hr />
                        <p>Get WhatsAppp for Windows</p>
                    </div>
      )
    }
   

    </>
  )
}

export default ChatMenuHeader;