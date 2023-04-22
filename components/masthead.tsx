import React, { useRef, useContext, useState, useCallback } from "react";
import { ScrollContext } from "../utilis/scroll-observer";
import Link from "next/link";

const Masthead: React.FC = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);
  let progress = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  return (
    <div className="fv-container">
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>

      <div className="fv-text">
        <p>STEPNの管理をこのアプリ１つで簡単に。</p>
        <h1>収支管理 For STEPN</h1>

        <div className="app_icon">
          <Link href="https://apps.apple.com/us/app/%E3%82%AF%E3%83%AA%E3%83%97%E3%83%88%E3%83%8E%E3%83%BC%E3%83%88/id1638512073">
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
