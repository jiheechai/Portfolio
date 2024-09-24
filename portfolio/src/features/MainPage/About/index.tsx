import React, { useEffect, useState } from "react";
import { AboutStyledComponent } from "./styled";

const About = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AboutStyledComponent>
      <div className="scrolling-text">
        <span>
          -ABOUT ME-ABOUT ME-ABOUT ME-ABOUT ME-ABOUT ME-ABOUT ME-ABOUT ME-ABOUT
          ME
        </span>
        <span>
          -ABOUT ME-ABOUT ME-ABOUT ME-ABOUT ME-ABOUT ME-ABOUT ME-ABOUT ME-ABOUT
          ME
        </span>
      </div>

      {/* 이름 */}
      <div
        className="name-box"
        // style={{
        //   transform: `translateX(${scrollPosition * -0.1}px)`, // 스크롤 방향에 따라 왼쪽으로 이동
        // }}
      >
        <span>
          채지희&nbsp;&nbsp;<span className="circle">Chai Jihee</span>
          &nbsp;&nbsp;蔡知憙&nbsp;&nbsp;チェ・ジフィ&nbsp;&nbsp;
        </span>
        {/* <span>
          &nbsp;&nbsp;채지희&nbsp;&nbsp;
          <span className="circle">Chai Jihee</span>
          &nbsp;&nbsp;蔡知憙&nbsp;&nbsp;チェ・ジフィ&nbsp;&nbsp;
        </span>
        <span>
          &nbsp;&nbsp;채지희&nbsp;&nbsp;
          <span className="circle">Chai Jihee</span>
          &nbsp;&nbsp;蔡知憙&nbsp;&nbsp;チェ・ジフィ&nbsp;&nbsp;
        </span> */}
      </div>

      {/* 기술스택 */}
      <div className="tech-box">
        <span>
          html&nbsp;&nbsp;&nbsp;&nbsp;css&nbsp;&nbsp;&nbsp;&nbsp;javascript&nbsp;&nbsp;&nbsp;&nbsp;node.js&nbsp;&nbsp;&nbsp;&nbsp;react&nbsp;&nbsp;&nbsp;&nbsp;next.js
          &nbsp;&nbsp;&nbsp;&nbsp;
        </span>
      </div>

      {/* 키워드 */}
      <div
        className="keyword-box"
        // style={{
        //   transform: `translateX(${scrollPosition * -0.1}px)`, // 스크롤 방향에 따라 왼쪽으로 이동
        // }}
      >
        <span>
          <span className="circle">열정적인</span>&nbsp;친화력이 좋은&nbsp;
          <span className="circle">도전적인</span>&nbsp;긍정적인&nbsp;적응력이
          좋은&nbsp;
        </span>
        {/* <span>
          &nbsp;&nbsp;&nbsp;<span className="circle">열정적인</span>
          &nbsp;친화력이 좋은&nbsp;
          <span className="circle">도전적인</span>&nbsp;긍정적인&nbsp;적응력이
          좋은&nbsp;
        </span>
        <span>
          &nbsp;&nbsp;&nbsp;<span className="circle">열정적인</span>
          &nbsp;친화력이 좋은&nbsp;
          <span className="circle">도전적인</span>&nbsp;긍정적인&nbsp;적응력이
          좋은&nbsp;
        </span> */}
      </div>

      {/* 구분선. 세로 줄 */}
      {/* <div className="vertical-line"></div> */}
    </AboutStyledComponent>
  );
};
export default About;
