import React, { useRef, useContext, useState, useCallback } from "react";
import Image from "next/image";
import { ScrollContext } from "../utilis/scroll-observer";

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
    <div
      ref={refContainer}
      className="min-h-screen flex flex-col sticky top-0 -z-10"
      style={{
        transform: `translateY(-${progress * 20}vh)`,
      }}
      
    >    


      <div className="fv-container">

     

        <div className="fv-text">
          <p>STEPNの管理をこのアプリ一つで簡単に。</p>
          <h1>クリプトノート</h1>

          <div className="app_icon"> 
            <img src="assets/app_icon.png" width="200"></img>
          </div> 
        </div> 

        <div className="fv-gazo">
          <img src="assets/fv_gazo.png"></img>
        </div>
      </div>
    </div>
  );
};

export default Masthead;
