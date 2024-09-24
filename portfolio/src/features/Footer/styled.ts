import styled from "styled-components";

export const FooterStyledComponent = styled.div`
  margin: 10% 0 2% 0;
  display: flex;
  justify-content: space-around;
  border-top: 1px solid white;
  padding-top: 2%;
  a {
    color: white;
    border-bottom: 1px solid white;
    &:hover {
      cursor: pointer;
    }
  }
`;
