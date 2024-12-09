import React, { useContext, useEffect } from 'react';
import ChatBoxHeader from './ChatBoxHeader';
import Message from './Message';
import { getConversation } from '../../servics/api';
import { AccountContext } from '../../context/AccountProvider';
import './chat.css';

const  ChatBox = ()=>{
  const {account,person} = useContext(AccountContext);
  useEffect(()=>{
    const getconversationDetails =async()=>{
      let data = await getConversation({senderId:account.sub,reciverId:person.sub});
      console.log(data);
    }
    getconversationDetails();
  },[person.sub]);
  return (
    <div className='chat-box'>
    <ChatBoxHeader person={person}/>
    <Message person={person}/>
    </div>
  )
}

export default ChatBox