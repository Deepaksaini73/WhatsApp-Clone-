import React,{useState} from 'react'

function MessageHeader() {
  const [attchVisible, setAttchVisible] = useState(false);
  const [messageInput,setMessageInput] = useState("");

  const offattach = () => {
    setAttchVisible(false);
  };
  return (
    <div className='message-header'>
      <div className='attachment'>
        <i className={`bi bi-plus ${attchVisible ? 'hover' : ''}`} onClick={()=>{setAttchVisible(!attchVisible)}}></i>
         { attchVisible && (
           <div className='attachment-items'>
              <p><i className="bi bi-file-earmark-text" style={{color: '#6c63ff'}}></i> Document</p>
              <p><i className="bi bi-image" style={{color: '#007bff'}}></i> Photos & videos</p>
              <p><i className="bi bi-camera" style={{color: "#ff4081"}}></i> Camera</p>
              <p><i className="bi bi-person-fill" style={{color: "#0d6efd"}}></i> Contact</p>
              <p><i className="bi bi-bar-chart" style={{color: "#ffc107"}}></i> Poll</p>
              <p><i className="bi bi-stars" style={{color: "#28a745"}}></i> New sticker</p>
           </div>
         )}
      </div>
      <div className='message-input-box' onClick={offattach}> <i className="bi bi-emoji-smile"></i> <textarea className='ppp' type="text" onChange={(e)=>{setMessageInput(e.target.value)}}/></div>
      <div className='audio-message' onClick={offattach}><i className={`${messageInput ? 'bi bi-send' : 'bi bi-mic-fill'}`}></i></div>
    </div>
  )
}

export default MessageHeader