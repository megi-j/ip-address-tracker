import styled from "styled-components";

export const InfoBox = styled.div`
  width: 25%;
  height: 46%;
  border-right: 1px solid rgba(0, 0, 0, 0.15);
  padding-left: 32px;
  @media (max-width: 375px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
`;
