import styled from "styled-components";

export const ArrowBox = styled.button`
  width: 10%;
  height: 100%;
  background-color: #000;
  border-radius: 0px 15px 15px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #3f3f3f;
  }
  @media (max-width: 375px) {
    width: 58px;
  }
`;
