import React from "react";
import styled from "styled-components";
import { Button } from "../button";
import { Logo } from "../logo";
import { Marginer } from "./marginer";
import { theme } from "../../theme";
import { faBloggerB } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { Element, scroller } from "react-scroll";

const NavbarContainer = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const BrandContainer = styled.div``;
const AccessibilityContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const Link = styled(NavLink)`
  background: transparent;
  border: none;
  text-decoration: none;
  color: ${theme.primary};
  transition: all 0.3s ease-in-out;

  &:hover {
    background: transparent;
    border: none;
    color: ${theme.third};
  }
`;

export function Navbar(props) {
  const scrollToNextSection = () => {
    scroller.scrollTo("footer", { smooth: true, duration: 1500 });
  };
  return (
    <>
      <NavbarContainer>
        <BrandContainer>
          <Logo inline />
        </BrandContainer>
        <AccessibilityContainer>
          <Button small onClick={scrollToNextSection}>
            Kontakt
          </Button>
          <Marginer direction="horizontal" margin="8px" />
          <Link
            exact
            to="//developer-na-swoim.blogspot.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faBloggerB} />
          </Link>
        </AccessibilityContainer>
      </NavbarContainer>
    </>
  );
}
