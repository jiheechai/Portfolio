import styled from "styled-components";

export const HeaderStyledComponent = styled.div`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  .headerWrapbox {
    display: flex;
    justify-content: space-between;
    position: fixed;
    padding: 3% 5%;
    top: 0;
    align-items: center;
    height: 70px;
    width: 100%;
    box-sizing: border-box;
    font-size: x-large;
    .menuBar {
      &:hover {
        cursor: pointer;
      }
    }
  }
`;
