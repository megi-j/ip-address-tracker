import styled from "styled-components";

export const InputBox = styled.div`
  max-width: 555px;
  width: 100%;
  height: 58px;
  border-radius: 15px;
  background-color: #fff;
  position: absolute;
  left: 50%;
  top: 130px;
  transform: translate(-50%);
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 50px 50px -25px rgba(0, 0, 0, 0.0983665);
  @media (max-width: 375px) {
    width: 87%;
  }
`;
