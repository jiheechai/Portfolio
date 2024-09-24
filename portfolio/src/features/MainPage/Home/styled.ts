import styled from "styled-components";

export const HomeStyledComponent = styled.div`
  padding: 0 5%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  font-size: 5em;
  font-family: "GongGothicLight";

  //첫화면(홈) 글자 애니메이션
  .fade-in {
    opacity: 0;
    animation: fadeInMove 1.5s forwards; /* fadeIn 애니메이션을 1.5초 동안 실행, 애니메이션 후 상태 유지 */
    /* forwards는 애니메이션이 완료된 후에도 마지막 상태(opacity: 1)가 유지되도록 하는 값 */
    line-height: 100px;
  }

  // 각 fade-in div에 딜레이를 주어 자연스럽게 순차적으로 나타나게 설정
  .fade-in:nth-child(1) {
    animation-delay: 0.3s; /* 첫 번째 요소에 약간의 딜레이 */
  }
  .fade-in:nth-child(2) {
    animation-delay: 0.4s; /* 두 번째 요소에 더 많은 딜레이 */
  }
  .fade-in:nth-child(3) {
    animation-delay: 0.5s; /* 세 번째 요소에 가장 많은 딜레이 */
  }

  // fadeInMove 애니메이션 정의 (투명도와 위치 변화)
  @keyframes fadeInMove {
    0% {
      opacity: 0;
      transform: translateY(20px); /* 아래에서 위로 올라오는 효과 */
    }
    100% {
      opacity: 1;
      transform: translateY(0); /* 제자리에서 멈춤 */
    }
  }
`;
