import React, { useContext } from "react";
import LoginDiloge from "./account/Logindiloge";
import ChatDialog from '../chats/ChatDialog';
import { AccountContext } from "../context/AccountProvider";

import './account/Logindiloge.css';

const Messenger = () => {
    const { account } = useContext(AccountContext);
    return (
        <div className="first-page"> 
            {account ?
                <>
                    <div className="chat-dialoge">
                        <ChatDialog />
                    </div>
                </>
                :
                <>
                    <header className="login-header">
                        <div><h3 className="whatsapp-logo"><img style={{ width: '30px' }} src="https://th.bing.com/th/id/OIP.hbr47SG8Nl1CUsQBVLhz_AHaHa?rs=1&pid=ImgDetMain" alt="" /><p>WhatsApp</p></h3></div>
                        <div className="download-btn"> Download <i class="fa-solid fa-download"></i></div>
                    </header>
                    <div className="login-dialoge">
                        <LoginDiloge />
                    </div>
                </>

            }
        </div>
    )
}

export default Messenger;