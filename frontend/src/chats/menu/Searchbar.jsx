import React from 'react';
import './menu.css';

function Searchbar() {
  return (
    <>
    <div className="search-bar">
    <p><i class="bi bi-search"></i> </p><input type="text" placeholder='Search' />
    </div>
    </>
  )
}

export default Searchbar