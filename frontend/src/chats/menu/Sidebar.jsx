import React,{useState}from 'react';
import ProfileDrawer from  '../drawer/ProfileDrawer'

function Sidebar() {
    const [openprofile,setOpenprofile]=useState(false);
    const toggleMenu = () => {
        setOpenprofile(!openprofile);
      };
      const closeprofile=()=>{
        setOpenprofile(false);
      }
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
                    <p onClick={toggleMenu}><i class="bi bi-person-circle"></i></p>
                    {openprofile && (<ProfileDrawer />)}
                </div>
            </div>
            
        </>
    )
}

export default Sidebar;