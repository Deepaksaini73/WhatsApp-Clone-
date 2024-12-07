import Sidebar from './Sidebar';
import ChatMenuHeader from './ChatMenuHeader';
import Searchbar from './Searchbar';
import FilterChat from './FilterChat';
import Conversations from './Conversations';
import './menu.css'


const Menu=()=>{
    return(
        <div className="chat-menu">
            <div className="sidebar">
               <Sidebar/>
            </div>
            <div className="chat-content">
                <ChatMenuHeader/>
                <Searchbar/>
                <FilterChat/>
                <Conversations/>
            </div>
        </div>
    )
}

export default Menu;