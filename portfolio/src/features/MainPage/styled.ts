import styled from "styled-components";

export const MainPageStyledComponent = styled.div`
  margin-top: 100px;
  padding: 3% 5%;
  text-align: center;
  font-size: 5em;

  //첫화면 글자 애니메이션
  .fade-in {
    opacity: 0;
    animation: fadeIn 1.5s forwards; /* fadeIn 애니메이션을 1.5초 동안 실행, 애니메이션 후 상태 유지 */
    /* forwards는 애니메이션이 완료된 후에도 마지막 상태(opacity: 1)가 유지되도록 하는 값 */
  }
  //fadeIn animaion 정의
  @keyframes fadeIn {
    from {
      opacity: 0; /* 애니메이션 시작 시 불투명도 0 */
    }
    to {
      opacity: 1;
    }
  }
`;
