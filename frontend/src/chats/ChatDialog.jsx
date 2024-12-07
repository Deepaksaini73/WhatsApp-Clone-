import React from 'react';
import Menu from './menu/Menu';
import EmptyChat from './chat/EmptyChat';
import ChatBox from './chat/ChatBox';
import './Chatdialog.css'

function ChatDialog() {
  return (
    <div className='chatDialog'>
      <div className='menu'><Menu /></div>
      <div className='chat'>
        {/* <EmptyChat /> */}
        <ChatBox/>
        </div>
    </div>
  )
}

export default ChatDialog;