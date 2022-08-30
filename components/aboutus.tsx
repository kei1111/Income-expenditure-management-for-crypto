import React from "react";
import Member from "./member";

const AboutUs: React.FC = () => {
  return (
    <section className={`about`}>
      <div className="about_hed">
          <h1>クリプトノートとは？</h1>
          <p>STEPNの記録・管理でお困りではありませんか？<br></br>
          クリプトノートはそんなあなたに向けた、シンプルで分かりやすいSTEPN用記録アプリです。</p>
      </div>
      <div className="about_gazo">
        <img src="assets/about_gazo.png"></img>
      </div>
    
    </section>
  );
};

export default AboutUs;
