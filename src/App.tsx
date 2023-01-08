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
import { BgImage } from "./BgImage";
import { useEffect, useState } from "react";
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
  const [ipInputValue, setIpInputValue] = useState<any>(undefined);
  const [ipAdress, setIpAdress] = useState<any>("8.8.8.8");
  const [result, setResult] = useState<any>(undefined);
  const [fetched, setFetched] = useState<boolean>(false);

  function handleSubmit(e: any) {
    e.preventDefault();

    setIpAdress(ipInputValue);

    console.log(ipAdress);
  }
  useEffect(() => {
    fetch(
      `https://geo.ipify.org/api/v2/country?apiKey=at_KbAeCBdxKOPAmCnlok7IxErzSjMrG&ipAddress=${ipAdress}`
    )
      .then((response) => response.json())
      .then((res) => {
        setResult(res);
        setFetched(true);
        console.log(res);
      });
  }, [ipAdress]);
  return (
    <Container>
      <GlobalStyles />
      <HeaderBox>
        <BgImage src={bg} alt="bg" />
        <Title>IP Address Tracker</Title>
        <form onSubmit={(e) => handleSubmit(e)}>
          <InputBox>
            <Input
              type="text"
              placeholder="Search for any IP address or domain"
              value={ipInputValue}
              onChange={(e) => setIpInputValue(e.target.value)}
            />
            <ArrowBox type="submit">
              <img src={arrow} alt="" />
            </ArrowBox>
          </InputBox>
        </form>
        <ResultBox>
          <InfoBox>
            <InfoTitle>IP Address</InfoTitle>
            <p>{fetched ? result.ip : ""}</p>
          </InfoBox>
          <InfoBox>
            <InfoTitle>location</InfoTitle>
            <p>{fetched ? result.location.region : ""}</p>
          </InfoBox>
          <InfoBox>
            <InfoTitle>timezone</InfoTitle>
            <p>{fetched ? result.location.timezone : ""}</p>
          </InfoBox>
          <InfoBox>
            <InfoTitle>isp</InfoTitle>
            <p>{fetched ? result.isp : ""}</p>
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
