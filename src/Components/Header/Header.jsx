import React from 'react';
import './Header.css';
import 'remixicon/fonts/remixicon.css'

const Header = () => {
  return (
   <div className="Big-Content">
       <div className="Logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Epic_games_store_logo.svg/648px-Epic_games_store_logo.svg.png" alt="" />
       </div>
       <div className="Menu-List">
            <ul>
                <li>STORE</li>
                <li>FAQ</li>
                <li>HELP</li>
                <li>UNREAL ENGINE</li>
            </ul>
        </div>
        <div className="End-Menu">
            <i class="ri-global-line"></i>  
            <div className="SignIn">
                <i class="ri-user-settings-fill"></i>
                <p>SignIn</p>
            </div>
            <button>
                Download
            </button>
        </div>
        <div className="Mobi-Menu">
            <i className="ri-menu-fill"></i>
        </div>
   </div>
  )
}

export default Header