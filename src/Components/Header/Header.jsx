import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';
import 'remixicon/fonts/remixicon.css'


const Menu_List = [
    {
      display: 'Home',
      url: '/home'
    },
    {
      display: 'Store',
      url: '/store'
    },
  
  ]

  
const Header = () => {
  return (
   <div className="Big-Content">
       <div className="Logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Epic_games_store_logo.svg/648px-Epic_games_store_logo.svg.png" alt="" />
       </div>
       <div className="Menu_List">
            <ul>
            {
               Menu_List.map((item, index)=> (
                  <li className="nav__item" key={index}>
                    <NavLink to={item.url}>{item.display}</NavLink>
                  </li>
               ))
             }
            </ul>
        </div>
        <div className="End-Menu">
            <i class="ri-global-line" id="Global"></i>  
            <div className="SignIn">
                <i class="ri-user-settings-fill"></i>
                <p>Account</p>
            </div>
            <button>
                Download
            </button>
        </div>
        
       {/*  <label for="open" className="Mobi-Menu">
            <i className="ri-menu-fill"></i>
            <input id="open" type="checkbox" name="" className="Nar-Open" />
        </label>
        <div className="Mobie-List">
            <ul>
                <i className="ri-close-line"></i>
                <input type="checkbox" name="" id="close" className="Nar-Close" />
                <h1>checked</h1>
                <li>STORE</li>
                <li>FAQ</li>
                <li>HELP</li>
                <li>UNREAL ENGINE</li>
            </ul>
        </div> */}
   </div>
  )
}

export default Header