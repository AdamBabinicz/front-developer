import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { SectionTitle } from "../../components/sectionTitle";
import { theme } from "../../theme";
import AboutImgUrl from "../../assets/pictures/1.svg";

const MoreAboutContainer = styled(Element)`
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2em;
`;
const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1000px;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-direction: column-reverse;
  }
`;
const AboutText = styled.p`
  font-size: 21px;
  color: ${theme.fourth};
  font-weight: normal;
  line-height: 1.4;

  @media screen and (max-width: 768px) {
    margin-top: 2rem;
  }
`;
const AboutImg = styled.img`
  width: 600px;
  max-width: 100%;
  height: auto;
  margin-left: 2em;

  @media screen and (max-width: 768px) {
    width: 100%;
    /* width: 370px; */
    /* height: 290px; */
    margin: 0 auto;
  }
`;

export function MoreAboutSection(props) {
  return (
    <MoreAboutContainer name="about">
      <SectionTitle>O nas</SectionTitle>
      <AboutContainer>
        <AboutText>
          Zajmujmy się projektowaniem, budowaniem i&nbsp;pozycjonowaniem
          najwyższej jakości witryn internetowych. {<br />}
          {<br />} Dbamy o to, aby uzyskać najlepsze wyniki wyszukiwania Twojej
          strony w oparciu o pożądane słowa i&nbsp;frazy kluczowe.
          {<br />}
          {<br />} A więc bez względu na to, czy tworzysz małą lub dużą firmę,
          jesteś we właściwym miejscu.{<br />}
          {<br />}Zaufaj naszemu doświadczeniu i&nbsp;umiejętnościom zdobytym na
          przestrzeni wielu lat!
        </AboutText>
        <AboutImg src={AboutImgUrl}></AboutImg>
      </AboutContainer>
    </MoreAboutContainer>
  );
}
