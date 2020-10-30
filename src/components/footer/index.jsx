import React from "react";
import styled from "styled-components";
import BackgroundImg from "../../assets/pictures/codeb.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../button";
import { Logo } from "../logo";
import { Marginer } from "../marginer";
import { theme } from "../../theme";
import {
  faTwitter,
  faGoogle,
  faFacebook,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faUserSecret,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { scroller } from "react-scroll";

const FooterContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)),
    url(${BackgroundImg}) center/cover no-repeat fixed;
  align-items: center;
  position: relative;
`;
const MotivationalText = styled.h1`
  font-size: 25px;
  font-weight: 400;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.588);
  margin: 0;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;
const Line = styled.span`
  min-width: 100%;
  min-height: 1px;
  margin-bottom: 2em;
  background: ${theme.primary};
  display: flex;
`;
const AccessibilityContainer = styled.div`
  display: flex;
  width: 80%;
  border-top: 1px solid ${theme.primary};
  padding-top: 12px;
  padding-right: 10px;
  padding-left: 10px;
  color: ${theme.primary};
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    width: 90%;
    padding-left: 8px;
    padding-right: 8px;
  }
`;
const PrivacyContainer = styled.div`
  display: flex;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  color: ${theme.primary};
  font-size: 20px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:not(:last-of-type) {
    margin-right: 11px;

    @media screen and (max-width: 480px) {
      margin-right: 9px;
    }
  }
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
  &:hover {
    color: ${theme.third};
  }
`;
const LinkExt = styled(Link)`
  color: ${theme.primary};
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  font-size: 20px;

  &:not(:last-of-type) {
    margin-right: 11px;

    @media screen and (max-width: 480px) {
      margin-right: 9px;
    }
  }
  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
  &:hover {
    color: ${theme.third};
  }
`;
const RightsReserved = styled.div`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  color: ${theme.primary};
  font-size: 12px;
`;

export function Footer(props) {
  const scrollToAbout = () => {
    scroller.scrollTo("about", { smooth: true, duration: 1500 });
  };
  return (
    <FooterContainer name="footer">
      <Marginer direction="vertical" margin="5em" />
      <Logo small />
      <Marginer direction="vertical" margin="1em" />
      <MotivationalText>
        W sieci jest ponad 1,5 miliarda stron www.
      </MotivationalText>
      <MotivationalText>Czy masz już swoją?</MotivationalText>
      <Marginer direction="vertical" margin="1em" />
      <Button onClick={scrollToAbout}>O mnie</Button>
      <Marginer direction="vertical" margin="5em" />
      <AccessibilityContainer>
        <PrivacyContainer>
          <LinkExt>
            <FontAwesomeIcon icon={faEnvelope} />
          </LinkExt>
          <LinkExt>
            <FontAwesomeIcon icon={faCode} />
          </LinkExt>
          <LinkExt>
            <FontAwesomeIcon icon={faUserSecret} />
          </LinkExt>
        </PrivacyContainer>
        <SocialContainer>
          <SocialIcon>
            <LinkExt
              to="//www.facebook.com/adam.gierczak.334"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </LinkExt>
          </SocialIcon>
          <SocialIcon>
            <LinkExt
              to="//twitter.com/AdamBabinicz"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </LinkExt>
          </SocialIcon>
          <SocialIcon>
            <LinkExt
              to="//google.com"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Google"
            >
              <FontAwesomeIcon icon={faGoogle} />
            </LinkExt>
          </SocialIcon>
          <SocialIcon>
            <LinkExt
              to="//github.com/AdamBabinicz"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} />
            </LinkExt>
          </SocialIcon>
        </SocialContainer>
      </AccessibilityContainer>
      <RightsReserved>ag 2020</RightsReserved>
    </FooterContainer>
  );
}
