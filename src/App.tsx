import styled, { createGlobalStyle } from "styled-components";
import bg from "./images/pattern-bg.png";
import arrow from "./images/icon-arrow.svg";
import { Title } from "./Title";
import { InputBox } from "./InputBox";
import { Input } from "./Input";
import { ArrowBox } from "./ArrowBox";
import { ResultBox } from "./ResultBox";
import { HeaderBox } from "./HeaderBox";
import { InfoBox } from "./InfoBox";
import { InfoTitle } from "./InfoTitle";
const GlobalStyles = createGlobalStyle`
  *{
    font-family: 'Rubik';
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ::placeholder {
    font-size: 18px;
    opacity: 0.5;
    color: #2C2C2C;
    padding: 24px;
    font-weight: 400;
  }
`;
function App() {
  return (
    <Container>
      <GlobalStyles />
      <HeaderBox>
        <BgImage src={bg} alt="bg" />
        <Title>IP Address Tracker</Title>
        <InputBox>
          <Input
            type="text"
            placeholder="Search for any IP address or domain"
          />
          <ArrowBox>
            <img src={arrow} alt="" />
          </ArrowBox>
        </InputBox>
        <ResultBox>
          <InfoBox>
            <InfoTitle>IP Address</InfoTitle>
          </InfoBox>
          <InfoBox>
            <InfoTitle>location</InfoTitle>
          </InfoBox>
          <InfoBox>
            <InfoTitle>timezone</InfoTitle>
          </InfoBox>
          <InfoBox>
            <InfoTitle>isp</InfoTitle>
          </InfoBox>
        </ResultBox>
      </HeaderBox>
    </Container>
  );
}

export default App;

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  border: 1px solid red;
`;
const BgImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0;
`;
