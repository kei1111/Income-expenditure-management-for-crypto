import React, { useRef, useContext, useState, useCallback } from "react";
import Image from "next/image";
import { ScrollContext } from "../utilis/scroll-observer";
import Link from "next/link";

const Masthead: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);
  let progress = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleImageLoaded = useCallback(() => {
    setImageLoaded(true);
  }, []);

  return (
<div className="fv-container">

  <div className="bg"></div>
  <div className="bg bg2"></div>
  <div className="bg bg3"></div>
      
      <div className="fv-text">
        <p>STEPNの管理をこのアプリ１つで簡単に。</p>
        <h1>クリプトノート</h1>

       <div className="app_icon">
         <Link href="/">
          <a>
             <img src="assets/app_icon.png" width="200"></img>
          </a>
       </Link>
       </div>
      </div>

      <div className="fv-gazo">
        <img src="assets/fv_gazo.png"></img>
      </div>
 </div>



 );

 
  
};


export default Masthead;

