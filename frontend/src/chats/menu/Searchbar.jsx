import React from 'react';
import './menu.css';

function Searchbar({setSearch}) {
  return (
    <>
    <div className="search-bar">
    <p><i class="bi bi-search"></i> </p><input type="text" placeholder='Search' onChange={(e)=>{setSearch(e.target.value)}} />
    </div>
    </>
  )
}

export default Searchbar