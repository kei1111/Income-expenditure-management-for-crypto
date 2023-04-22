import React, { useContext, useRef } from "react";

const Skills: React.FC = () => {
  return (
    <section className={`skills`} id ="skills">
      <div className="skills_hed">
        <div className="line_skills"></div>
         <h2 className="line">Point</h2>
         <h1>クリプトノートの特徴</h1>
      </div>
      <div className="skills_inner">
        <div className="skills_block01">
          <div className="text_block01">
            <h4><span>01</span> シンプルで使いやすい！</h4>
            <p>クリプトノートはシンプルで見やすく、使いやすい設計です。<br></br>
            どなたでも簡単にSTEPNの記録・管理ができます！</p>
          </div>
          <div className="skills_img01">
            <img src="assets/skills_img01.png"></img>
          </div>
        </div>
        <div className="skills_block02">
          <div className="skills_img02">
            <img src="assets/skills_img02.png"></img>
          </div>
          <div className="text_block02">
            <h4><span>02</span> カテゴリー別に記録ができる！</h4>
            <p>履歴ページでカテゴリーごとに収益を確認することができます！<br></br>
            また、カテゴリーは編集・追加ができ、自由にカスタマイズすることができます。</p>
          </div>
         
        </div>
        <div className="skills_block03">
          <div className="text_block03">
            <h4><span>03</span> 綺麗なチャートで統計を確認できる！</h4>
            <p>収入・支出・経費それぞれのチャートを確認できます。<br></br>
            統計を確認することで、より効率的な運用ができるアプリです！
          </p>
          </div>
          <div className="skills_img03">
            <img src="assets/skills_img03.png"></img>
          </div>
        </div>
      </div>
    
    </section>
  );
};

export default Skills;
