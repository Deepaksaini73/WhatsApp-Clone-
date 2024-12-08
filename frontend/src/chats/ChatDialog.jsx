import React,{useContext} from 'react';
import Menu from './menu/Menu';
import EmptyChat from './chat/EmptyChat';
import ChatBox from './chat/ChatBox';
import { AccountContext } from '../context/AccountProvider';
import './Chatdialog.css'

function ChatDialog() {
  const {person} = useContext(AccountContext);
  return (
    <div className='chatDialog'>
      <div className='menu'><Menu /></div>
      <div className='chat'>
        {Object.keys(person).length ? <ChatBox/> : <EmptyChat />}
        </div>
    </div>
  )
}

export default ChatDialog;