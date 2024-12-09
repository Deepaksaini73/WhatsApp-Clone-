import React, { useState,useRef } from 'react'

function MessageFooter({messagesEndRef,setMessages}) {
  const [attchVisible, setAttchVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  const offattach = () => {
    setAttchVisible(false);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);

    // Adjust the height of the textarea dynamically
    const textarea = inputRef.current;
    textarea.style.height = 'auto'; // Reset height to calculate scrollHeight
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const handleSendMessage = () => {
    if (inputValue) {
      setMessages((prevMessages) => [...prevMessages, inputValue]);
      setInputValue(''); // Clear the input
      if (inputRef.current) {
        inputRef.current.style.height = 'auto'; // Reset height
      }
      scrollToBottom();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault(); // Prevent newline on Enter
      handleSendMessage();
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className='message-footer'>
      <div className='attachment'>
        <i className={`bi bi-plus ${attchVisible ? 'hover' : ''}`} onClick={() => { setAttchVisible(!attchVisible) }}></i>
        {attchVisible && (
          <div className='attachment-items'>
            <p><i className="bi bi-file-earmark-text" style={{ color: '#6c63ff' }}></i> Document</p>
            <p><i className="bi bi-image" style={{ color: '#007bff' }}></i> Photos & videos</p>
            <p><i className="bi bi-camera" style={{ color: "#ff4081" }}></i> Camera</p>
            <p><i className="bi bi-person-fill" style={{ color: "#0d6efd" }}></i> Contact</p>
            <p><i className="bi bi-bar-chart" style={{ color: "#ffc107" }}></i> Poll</p>
            <p><i className="bi bi-stars" style={{ color: "#28a745" }}></i> New sticker</p>
          </div>
        )}
      </div>

      <div className="message-input-box" onClick={offattach}>
      <i className="bi bi-emoji-smile"></i>
        <textarea
          ref={inputRef}
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Type a message"
          rows="1"
        />
      </div>
      <div className='audio-message send-message' onClick={offattach}>
        {
          inputValue.trim() ? (<i className='bi bi-send ' onClick={handleSendMessage}></i>) :(<i className='bi bi-mic-fill' ></i>)
        }
      </div>

    </div>
  )
}

export default MessageFooter