import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../button";
import { Logo } from "../logo";
import { Marginer } from "./marginer";
import { theme } from "../../theme";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { Element, scroller } from "react-scroll";
import Popup from "../Popup";
import img0 from "../../assets/pictures/glob.svg";
import img1 from "../../assets/pictures/19.jpg";

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
  const [buttonPopup, setButtonPopup] = useState(false);
  const [state] = useState({
    title: "",
    img0: img0,
    img1: img1,
    p0: "",
    p1: "",
    p2: "",
    p3: "☎ 733 702 632",
    em0: "email: puaro@vp.pl",
    mark: "",
  });

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
          <Button
            onClick={() => setButtonPopup(true)}
            // exact
            // to="//developer-na-swoim.blogspot.com/"
            // rel="noopener noreferrer"
            // target="_blank"
          >
            <FontAwesomeIcon icon={faPhoneAlt} />
          </Button>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <h3 style={{ fontSize: "18px", fontWeight: "bold" }}>
              {state.title}
            </h3>
            <img src={state.img0} alt="..." />
            <img src={state.img1} alt="..." />
            <span style={{ fontSize: "16px", textAlign: "center" }}>
              {state.p0}
            </span>
            <span style={{ fontSize: "16px" }}>{state.p1}</span>
            <span style={{ fontSize: "16px" }}>{state.p2}</span> <br />
            <span style={{ fontSize: "16px", fontWeight: "bold" }}>
              {state.p3}
            </span>
            <em style={{ fontSize: "14px" }}>{state.em0}</em>
            <br />
            <mark
              style={{
                fontSize: "16px",
                backgroundColor: "rgba(211, 211, 211, 0.541)",
                padding: "6px 13px",
              }}
            >
              {state.mark}
            </mark>
          </Popup>
        </AccessibilityContainer>
      </NavbarContainer>
    </>
  );
}
