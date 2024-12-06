import React, { useContext } from 'react';
import { AccountContext } from '../../context/AccountProvider';
import './profileDrawer.css'

function ProfileDrawer() {
  const {account} = useContext(AccountContext);
  return (
    <div className='profile-drawer'>
      <div className='profile-drawer-header'>Profile</div>
      <div>
        <div className="img-box">
          {account.picture ? (
            <img style={{ width: '200px', height: '200px', borderRadius: '50%' }} src={account.picture} alt="" />
          )
            : (
              <i class="bi bi-person-circle"></i>
            )

          }
        </div>
        <div className="user-name-box">
          <p style={{ width: '100px', color: '#228780' }}>Your name</p>
          <div className='user-name'>
            <p >Deepak saini</p>
            <p ><i class="bi bi-pencil"></i></p>
          </div>
        </div>
        <p style={{ padding: '20px' }}>This is not your username or PIN. This name will be visible to your WhatsApp contacts.</p>
        <div className="about-box">
          <p style={{ width: '100px', color: '#228780' }}>About</p>
          <div className='about'>
            <p>Do not disturb 🤫🤫</p>
            <p><i class="bi bi-pencil"></i></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileDrawer;