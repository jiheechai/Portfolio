import styled from "styled-components";

export const AboutStyledComponent = styled.div`
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
  .scrolling-text {
    font-size: 5.5em;
    display: flex;
    /* width: 100%; 화면 전체 너비를 차지 */
    overflow: hidden; /* 텍스트가 화면 밖으로 나가는 부분 숨김 */
    span {
      display: inline-block; /* 텍스트 애니메이션과의 호환성 위함*/
      white-space: nowrap; /* 텍스트 줄바꿈 방지 */
      animation: scroll-left 60s linear infinite; /* 60초 동안 무한 반복 애니메이션 */
      line-height: 100px;
    }
  }
  @keyframes scroll-left {
    0% {
      transform: translateX(0); /* 화면에서 바로 시작 */
    }
    100% {
      transform: translateX(-100%); /* 텍스트가 왼쪽으로 이동해 나감 */
    }
  }

  .name-box,
  .tech-box,
  .keyword-box {
    font-size: 3.5em;
    display: flex;
    /* overflow: hidden; */
    width: 1920px;
    span {
      width: 300%;
      margin-right: 100px;
      white-space: nowrap; /* 텍스트를 한 줄로 유지 */
      line-height: 150px;
      .circle {
        border: 2px solid white;
        border-radius: 50%;
        padding: 0 1%;
      }
    }
  }
`;
