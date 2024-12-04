import React from 'react';
import Menu from './menu/Menu';
import EmptyChat from './chat/EmptyChat';
import './Chatdialog.css'

function ChatDialog() {
  return (
    <div className='chatDialog'>
      <div className='menu'><Menu /></div>
      <div className='chat'><EmptyChat /></div>
    </div>
  )
}

export default ChatDialog