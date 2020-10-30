import React from "react";
import styled from "styled-components";
import BackgroundImg from "../../assets/pictures/binary-g.jpg";
import { Logo } from "../../components/logo";
import { Marginer } from "../../components/marginer";
import { Button } from "../../components/button";
import { DownArrow } from "../../components/downArrow";
import { Navbar } from "../../components/navbar";
import { Element, scroller } from "react-scroll";

const TopContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  background: url(${BackgroundImg}) center/cover no-repeat fixed;
  position: relative;
`;
const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8));
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MotivationalText = styled.h1`
  font-size: 34px;
  font-weight: 400;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.588);
  margin: 0;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 18px;
    line-height: 1;
  }
`;
const DownArrowContainer = styled.div`
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);

  @media screen and (max-width: 480px) {
    bottom: 135px;
  }
`;

export function TopSection(props) {
  const scrollToNextSection = () => {
    scroller.scrollTo("servicesSection", { smooth: true, duration: 1500 });
  };
  const scrollToSection = () => {
    scroller.scrollTo("project", { smooth: true, duration: 1500 });
  };
  return (
    <Element name="topSection">
      <TopContainer>
        <BackgroundFilter>
          <Navbar />
          <Marginer direction="vertical" margin="5em" />
          <Logo />
          <Marginer direction="vertical" margin="4em" />
          <MotivationalText>frontend Developer</MotivationalText>
          <MotivationalText>freeLancer</MotivationalText>
          <Marginer direction="vertical" margin="2em" />
          <Button onClick={scrollToSection}>Projekty</Button>
          <DownArrowContainer onClick={scrollToNextSection}>
            <DownArrow />
          </DownArrowContainer>
        </BackgroundFilter>
      </TopContainer>
    </Element>
  );
}
