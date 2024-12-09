import React, { useState, useRef } from 'react';

import MessageFooter from './MessageFooter';


function Message() {
     const [messages, setMessages] = useState([]); 
     const messagesEndRef = useRef(null);
  return (
    <div>
        <div className="message-box">
        {messages.map((message, index) => (
          <div key={index} className="message">
            {message}
          </div>
        ))}
        <div ref={messagesEndRef}></div>
      </div>
    <MessageFooter setMessages={setMessages} messagesEndRef={messagesEndRef}/>
    </div>
    )
}


export default Message;
