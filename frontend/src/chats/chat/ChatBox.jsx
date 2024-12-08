import React, { useContext } from 'react';
import ChatBoxHeader from './ChatBoxHeader';
import Message from './Message';
import { AccountContext } from '../../context/AccountProvider';
import './chat.css';

function ChatBox() {
  const {person} = useContext(AccountContext);
  return (
    <div className='chat-box'>
    <ChatBoxHeader person={person}/>
    <Message person={person}/>
    </div>
  )
}

export default ChatBox