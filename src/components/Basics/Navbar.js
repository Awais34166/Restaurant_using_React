import React from 'react'

const Navbar = ({FilterItem,menuList}) => {
  return (
    <>
      <nav className='navbar'>
        <div className="logo">
            <img src="./images/logo1.jpeg" alt="" />
        </div>
        <div className="btn-group">

            {
                menuList.map((curElem) => {
                    return (
                        <button className='btn-group__item' 
                        onClick={() => FilterItem(curElem)}>
                        {curElem}
                        </button>
                    );
                })
            }
        </div>
      </nav>
    </>
  );
};

export default Navbar;
