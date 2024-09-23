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
        style={{
          transform: `translateX(${scrollPosition * -1}px)`, // 스크롤 방향에 따라 왼쪽으로 이동
        }}
      >
        <span>
          채지희&nbsp;&nbsp;Chai Jihee &nbsp;&nbsp;蔡知憙&nbsp;&nbsp;
          チェ・ジフィ&nbsp;&nbsp;
        </span>
        <span>
          채지희&nbsp;&nbsp;Chai Jihee &nbsp;&nbsp;蔡知憙&nbsp;&nbsp;
          チェ・ジフィ&nbsp;&nbsp;
        </span>
        <span>
          채지희&nbsp;&nbsp;Chai Jihee &nbsp;&nbsp;蔡知憙&nbsp;&nbsp;
          チェ・ジフィ&nbsp;&nbsp;
        </span>
      </div>

      {/* 기술스택 */}
      <div className="tech-box">
        <span>
          html&nbsp;&nbsp;css&nbsp;&nbsp;javascript&nbsp;&nbsp;node.js&nbsp;&nbsp;react&nbsp;&nbsp;next.js
          &nbsp;&nbsp;Socket.io&nbsp;&nbsp;
        </span>
        <span>
          html&nbsp;&nbsp;css&nbsp;&nbsp;javascript&nbsp;&nbsp;node.js&nbsp;&nbsp;react&nbsp;&nbsp;next.js
          &nbsp;&nbsp;Socket.io&nbsp;&nbsp;
        </span>
      </div>

      {/* 키워드 */}
      <div
        className="keyword-box"
        style={{
          transform: `translateX(${scrollPosition * -1}px)`, // 스크롤 방향에 따라 왼쪽으로 이동
        }}
      >
        <span>
          <span className="circle">열정적인</span>&nbsp;&nbsp;친화력이
          좋은&nbsp;&nbsp;
          <span className="circle">도전적인</span>&nbsp;&nbsp;
          긍정적인&nbsp;&nbsp;적응력이 좋은&nbsp;&nbsp;
        </span>
        <span>
          &nbsp;&nbsp;&nbsp;<span className="circle">열정적인</span>
          &nbsp;&nbsp;친화력이 좋은&nbsp;&nbsp;
          <span className="circle">도전적인</span>&nbsp;&nbsp;
          긍정적인&nbsp;&nbsp;적응력이 좋은&nbsp;&nbsp;
        </span>
      </div>
    </AboutStyledComponent>
  );
};
export default About;
