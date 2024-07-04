import React from "react";
import styled, { keyframes } from "styled-components";
import BackgroundImg from "../../assets/pictures/codeb.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../button";
import { Logo } from "../logo";
import { Marginer } from "../navbar/marginer";
import { theme } from "../../theme";
import { FaTimes } from "react-icons/fa";
import { FaStripe } from "react-icons/fa6";
import { TbBrandVscode } from "react-icons/tb";
import {
  faTwitter,
  faGoogle,
  faFacebook,
  faGithub,
  faHtml5,
  faCss3,
  faSass,
  faGit,
  faReact,
  faPhp,
  faJs,
  faBootstrap,
  faNode,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faUserSecret,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { scroller } from "react-scroll";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import {
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiRedux,
  SiFirebase,
  SiVite,
} from "react-icons/si";

const ref = React.createRef();

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

const MotivationalText = styled.h3`
  font-size: 25px;
  font-weight: 400;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.588);
  margin: 0;
  text-align: center;

  @media screen and (max-width: 678px) {
    font-size: 18px;
  }
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

    @media screen and (max-width: 678px) {
      margin-right: 20px;
    }
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
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

    @media screen and (max-width: 678px) {
      margin-right: 20px;
    }
  }

  @media screen and (max-width: 480px) {
    font-size: 20px;
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

const Skills = styled.div`
  color: ${theme.secondary};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, auto));
  margin-top: 1rem;
  margin-bottom: 3rem;
  width: 100%;

  @media screen and (max-width: 678px) {
    grid-template-columns: repeat(auto-fit, minmax(40px, auto));
    margin-top: clamp(0.5rem, 2.5vw, 1rem);
  }
`;

const SpanSkill = styled.div`
  text-align: center;
  font-size: 2.5rem;

  @media screen and (max-width: 480px) {
    font-size: clamp(1.9rem, 2.5vw, 1.5rem);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.8);
  }
`;

const Modal = styled.div`
  font-size: 12px;
  color: rgb(233, 233, 233);

  &.popup-content {
    background: rgba(0, 0, 0, 0.9);
    border: none;
    border-radius: 10px;
    animation: ${fadeIn} 0.3s ease-in-out;
  }

  &.popup-content-exit {
    animation: ${fadeOut} 0.3s ease-in-out;
  }

  button {
    background: ${theme.secondary};
    transition: all 0.3s ease-in-out;
    outline: none;

    :hover {
      background: ${theme.fourth};
      color: ${theme.primary};
    }
  }
`;

const Header = styled.div`
  width: 100%;
  border-bottom: 1px solid rgb(233, 233, 233);
  font-size: 18px;
  text-align: center;
  padding: 5px;
`;

const Content = styled.div`
  width: 100%;
  padding: 10px 5px;
`;

const Actions = styled.div`
  width: 100%;
  padding: 10px 5px;
  margin: auto;
  text-align: center;
  display: flex;
  justify-content: center;
`;

const SpanText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.582);
  color: rgba(255, 255, 255, 0.588);
  text-align: center;
  height: 296px;

  @media screen and (max-width: 480px) {
    padding: 0 1rem;
    height: 307px;
  }
`;

export function Footer(props) {
  const scrollToAbout = () => {
    scroller.scrollTo("about", { smooth: true, duration: 1500 });
  };

  return (
    <>
      <FooterContainer name="footer">
        <Marginer direction="vertical" margin="5em" />
        <Logo small />
        <Marginer direction="vertical" margin="1em" />
        <MotivationalText>
          W sieci jest ponad 1,5 miliarda stron www.
        </MotivationalText>
        <MotivationalText>Czy masz już swoją?</MotivationalText>
        <Marginer direction="vertical" margin="1em" />
        <Button onClick={scrollToAbout}>O nas</Button>
        <Marginer direction="vertical" margin="5em" />
        <AccessibilityContainer>
          <PrivacyContainer>
            <LinkExt to="/kontakt-mailowy">
              <FontAwesomeIcon icon={faEnvelope} />
            </LinkExt>

            <Popup
              trigger={
                <LinkExt to="#" className="button">
                  <FontAwesomeIcon icon={faCode} />
                </LinkExt>
              }
              modal
              nested
              contentStyle={{ animation: "fadeIn 0.3s ease-in-out" }}
              overlayStyle={{ animation: "fadeIn 0.3s ease-in-out" }}
              closeOnDocumentClick
            >
              {(close) => (
                <Modal>
                  <Header>
                    <FontAwesomeIcon icon={faCode} />
                  </Header>
                  <Content>
                    <Skills>
                      <SpanSkill>
                        <FontAwesomeIcon icon={faHtml5} />
                      </SpanSkill>
                      <SpanSkill>
                        <FontAwesomeIcon icon={faCss3} />
                      </SpanSkill>
                      <SpanSkill>
                        <FontAwesomeIcon icon={faSass} />
                      </SpanSkill>
                      <SpanSkill>
                        <FontAwesomeIcon icon={faGit} />
                      </SpanSkill>
                      <SpanSkill>
                        <FontAwesomeIcon icon={faGithub} />
                      </SpanSkill>
                      <SpanSkill>
                        <FontAwesomeIcon icon={faJs} />
                      </SpanSkill>
                      <SpanSkill>
                        <FontAwesomeIcon icon={faReact} />
                      </SpanSkill>
                      <SpanSkill>
                        <FontAwesomeIcon icon={faPhp} />
                      </SpanSkill>
                      <SpanSkill>
                        <FontAwesomeIcon icon={faBootstrap} />
                      </SpanSkill>
                      <SpanSkill>
                        <FontAwesomeIcon icon={faNode} />
                      </SpanSkill>
                      <SpanSkill>
                        <SiMongodb />
                      </SpanSkill>
                      <SpanSkill>
                        <SiNextdotjs />
                      </SpanSkill>
                      <SpanSkill>
                        <SiTailwindcss />
                      </SpanSkill>
                      <SpanSkill>
                        <SiExpress />
                      </SpanSkill>
                      <SpanSkill>
                        <SiRedux />
                      </SpanSkill>
                      <SpanSkill>
                        <SiFirebase />
                      </SpanSkill>
                      <SpanSkill>
                        <FaStripe />
                      </SpanSkill>
                      <SpanSkill>
                        <TbBrandVscode />
                      </SpanSkill>
                      <SpanSkill>
                        <SiVite />
                      </SpanSkill>
                    </Skills>
                  </Content>
                  <Actions>
                    <Popup
                      trigger={<Button>więcej</Button>}
                      position="contain"
                      nested
                      modal
                    >
                      {(close) => (
                        <SpanText>
                          Języki programowania oraz narzędzia stosowane w
                          naszych projektach
                          <Button smallB onClick={close}>
                            <FaTimes />
                          </Button>
                        </SpanText>
                      )}
                    </Popup>
                    <Button
                      onClick={() => {
                        close();
                      }}
                    >
                      zamknij
                    </Button>
                  </Actions>
                </Modal>
              )}
            </Popup>

            <LinkExt to="/polityka-prywatnosci">
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
        <RightsReserved>ag 2020 - {new Date().getFullYear()}.</RightsReserved>
      </FooterContainer>
    </>
  );
}
