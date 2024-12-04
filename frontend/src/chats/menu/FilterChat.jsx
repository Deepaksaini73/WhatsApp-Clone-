import React from 'react'

function FilterChat() {
  return (
    <>
    <div className="filter-chat">
      <div className='all-btn btn'><button>All</button></div>
      <div className='Unread-btn btn'><button>Unread</button></div>
      <div className='Favourite-btn btn'><button>Favourite</button></div>
      <div className='Groups-btn btn'><button>Groups</button></div>
    </div>
    </>
  )
}

export default FilterChat