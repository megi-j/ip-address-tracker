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
import Map from "./Map";
import { InfoText } from "./InfoText";
import { Helmet } from "react-helmet";
import { resultType } from "./types";

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
  @media(max-width: 375px){
    ::placeholder{
      padding: 0;
      font-size: 15px;
    }
  }
`;

function App() {
  const [ipInputValue, setIpInputValue] = useState<string>("");
  const [ipAdress, setIpAdress] = useState<string>("8.8.8.8");
  const [result, setResult] = useState<resultType>();
  const [fetched, setFetched] = useState<boolean>(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setIpAdress(ipInputValue);

    console.log(ipAdress);
  }
  useEffect(() => {
    fetch(
      `https://geo.ipify.org/api/v1?apiKey=at_moiOBACOKKyPhePH3BfUSWTGsnB3F&ipAddress=${ipAdress}`
    )
      .then((response) => response.json())
      .then((res) => {
        setResult(res);
        if (res.message) {
          setFetched(false);
        } else {
          setFetched(true);
        }

        console.log(res);
      });
  }, [ipAdress]);
  // console.log(result.location);
  return (
    <Container>
      <GlobalStyles />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
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
            <InfoText>{fetched ? result?.ip : ""}</InfoText>
          </InfoBox>
          <InfoBox>
            <InfoTitle>location</InfoTitle>
            <InfoText>{fetched ? result?.location.region : ""}</InfoText>
          </InfoBox>
          <InfoBox>
            <InfoTitle>timezone</InfoTitle>
            <InfoText>{fetched ? result?.location.timezone : ""}</InfoText>
          </InfoBox>
          <InfoBox>
            <InfoTitle>isp</InfoTitle>
            <InfoText>{fetched ? result?.isp : ""}</InfoText>
          </InfoBox>
        </ResultBox>
      </HeaderBox>
      {result !== undefined ? (
        <Map lat={result.location.lat} lng={result.location.lng} />
      ) : (
        ""
      )}
    </Container>
  );
}

export default App;

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
`;
