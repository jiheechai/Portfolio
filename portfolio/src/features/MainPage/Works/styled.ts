import styled from "styled-components";

export const WorksStyledComponent = styled.div`
  width: 100%;
  text-align: center;
  .title {
    font-size: 5em;
    margin: 5% 0;
  }
  /* .wrapBox {
    display: flex;
    justify-content: center;
    align-items: center;
    .leftBox {
      width: 50%;
      .nameBox {
        font-size: 3em;
      }
      .contentBox {
        font-size: 2em;
      }
    }
    .rightBox {
      width: 50%;
      
    } */
  .wrapBox {
    margin: 10% 0;
    /* 나타나는 효과가 1초동안 발생 */
    transition: 1s;
    /* 투명도 0 (안보임) */
    opacity: 0;
    /* 왼쪽에서 오른쪽으로 나타나게 하기 위함 */
    position: relative;
    left: -50px;
    margin-bottom: 20px;
    .nameBox {
      /* margin-top: 4%; */
      font-size: 4em;
    }
    .contentBox {
      font-size: 1.5em;
      .hashBox {
        font-size: 0.7em;
      }
      .underbar {
        border-bottom: 1px solid white;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
  .wrapBox.fade-in {
    /* 투명도 1 (보임) */
    opacity: 1;
    /* 왼쪽에서 오른쪽으로 나타나게 하기 위함 */
    left: 0px;
  }
  img {
    width: 40%;
    height: 500px;
    object-fit: cover;
    border: 1px solid white;
    border-radius: 8px;
    filter: drop-shadow(3px 6px 6px #c3c3c3);
  }
`;
