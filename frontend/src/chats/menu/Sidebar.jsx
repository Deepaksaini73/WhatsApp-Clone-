import React,{useContext, useState}from 'react';
import ProfileDrawer from  '../drawer/ProfileDrawer';
import { AccountContext } from '../../context/AccountProvider';

function Sidebar() {
    const [openprofile,setOpenprofile]=useState(false);
    const {account} = useContext(AccountContext);
    const toggleMenu = () => {
        setOpenprofile(!openprofile);
      };
      const closeprofile=()=>{
        setOpenprofile(false);
      }
      console.log(account.picture);
    return (
        <>
          <div className="chat-sidebar">
            
                <div className="top-side-bar">
                    <p onClick={closeprofile}><i class="bi bi-chat-right-text-fill"></i></p>
                    <p onClick={closeprofile}><i class="bi bi-broadcast"></i></p>
                    <p onClick={closeprofile}><i class="bi bi-people-fill"></i></p>
                </div>
                <div className="bottom-side-bar">
                    <p onClick={closeprofile} ><i class="bi bi-gear"></i></p>
                    <p onClick={toggleMenu}>
                        { account.picture ? (
                            <img style={{width:'35px',height:'35px',borderRadius:'50%'}} src={account.picture} alt="DP" />
                        )
                        : (
                            <i class="bi bi-person-circle"></i>
                        )

                        }
                        </p>
                    {openprofile && (<ProfileDrawer />)}
                </div>
            </div>
            
        </>
    )
}

export default Sidebar;