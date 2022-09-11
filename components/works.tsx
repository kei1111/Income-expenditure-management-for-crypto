import React from "react";
import { Tile, TileBackground, TileContent, TileWrapper } from "./tile";
import {
  WorkBackground,
  WorkContainer,
  WorkLeft,
  // WorkLink,
  WorkRight,
} from "./work";
import Image from "next/image";
import Link from "next/link";

const Works = () => (

  <div className="downlord_container">
    <div className="downlord">
      <h1>今すぐ<br></br>『クリプトノート』を始めよう！</h1>
      <div className="app_icon_down">
         <Link href="https://apps.apple.com/us/app/%E3%82%AF%E3%83%AA%E3%83%97%E3%83%88%E3%83%8E%E3%83%BC%E3%83%88/id1638512073">
            <a>
            {/* <img src="assets/app_icon.png" width="200"></img> */}
            <Image src="/assets/app_icon.png" width={200} height={150} objectFit="contain" />
           </a>
         </Link>
       </div>
    </div>
 </div>

   
   
  );

export default Works;
