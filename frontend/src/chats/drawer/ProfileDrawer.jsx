import React from 'react';
import './profileDrawer.css'

function ProfileDrawer() {
  return (
    <div className='profile-drawer'>
    <div className='profile-drawer-header'>Profile</div>
    <div>
      <div className="img-box"><i class="bi bi-person-circle"></i></div>
      <div className="user-name-box">
        <p style={{width:'100px',color:'#228780'}}>Your name</p>
        <div className='user-name'>
          <p >Deepak saini</p>
          <p ><i class="bi bi-pencil"></i></p>
        </div>
      </div>
      <p style={{padding:'20px'}}>This is not your username or PIN. This name will be visible to your WhatsApp contacts.</p>
      <div className="about-box">
      <p style={{width:'100px',color:'#228780'}}>About</p>
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