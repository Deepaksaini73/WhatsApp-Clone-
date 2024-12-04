import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import {GoogleLogin} from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import qrimg from '../../img/qr-code.png';
import { AccountContext } from '../../context/AccountProvider';

const LoginDialog = () => {

  const {setAccount} = useContext(AccountContext);

  const onLoginSucess =(res)=>{
    const ans = jwtDecode(res.credential);
    setAccount(ans);
  }
  const onLoginError =()=>{
    console.log("error in login");

  }




  return (
    <div className="login-box login-gmail">
      <div className="login-content">
        <h3>Login to WhatsApp Web</h3>
        <p>Message privately with friends and family using WhatsApp on your browser.</p>

        <ul>
          <li>Open WhatsApp on your phone</li>
          <li>Tap the three-dot menu or settings icon</li>
          <li>Tap "Linked Devices"</li>
          <li>Point your phone's camera at this screen to scan the QR code</li>
        </ul>

        <div className="login-links">
          <Link to="/help">Need help getting started?</Link>
          <br />
          <Link to="/phone-login">Log in with phone number</Link>
        </div>
      </div>

      <div className="qr-container">
        <img src={qrimg} alt="QR Code for WhatsApp Web" />
        <div className='google-login'><GoogleLogin onSuccess={onLoginSucess} onError={onLoginError} /></div>
      </div>
    </div>
  );
};

export default LoginDialog;
