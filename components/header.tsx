import React, { useRef, useContext, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
return (

<header className="header">
  <div className="header-inner">
    <div className="logo">
      <img src="assets/logo.png" />
    </div>
    
    <nav className="header-nav">
      <ul className="header-nav-list">
        <a href="#"><li className="header-nav-item">About</li></a>
        <a href="#"><li className="header-nav-item">Point</li></a>
   
      </ul>
      
    </nav>
    <div className="app_icon_header">
            <Link href="/">
              <a>
                <img src="assets/app_icon.png" width="200"></img>
             </a>
           </Link>
          </div>

  </div>
</header>

    
    
 );  
};


export default Header;

