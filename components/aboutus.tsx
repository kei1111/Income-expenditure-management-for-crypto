import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section className={`about`} id="about">
      <div className="about_hed">
        <div className="line_about"></div>
        <h2 className="line">About</h2>
        <h1>収支管理 For STEPNとは？</h1>
        <p>
          STEPNの記録・管理でお困りではありませんか？<br></br>
          収支管理 For
          STEPNはそんなあなたに向けた、シンプルで分かりやすいSTEPN用記録アプリです。
        </p>
      </div>
      <div className="about_gazo">
        <img src="assets/about_gazo.png"></img>
      </div>
    </section>
  );
};

export default AboutUs;
