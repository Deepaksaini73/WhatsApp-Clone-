import { useState } from 'react';
import Sidebar from './Sidebar';
import ChatMenuHeader from './ChatMenuHeader';
import Searchbar from './Searchbar';
import FilterChat from './FilterChat';
import Conversations from './Conversations';
import './menu.css'


const Menu=()=>{
    const [search,setSearch] = useState("");
    
    return(
        <div className="chat-menu">
            <div className="sidebar">
               <Sidebar/>
            </div>
            <div className="chat-content">
                <ChatMenuHeader/>
                <Searchbar setSearch={setSearch}/>
                <FilterChat/>
                <Conversations search={search}/>
            </div>
        </div>
    )
}

export default Menu;