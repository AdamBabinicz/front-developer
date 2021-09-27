import React from "react";
import styled, { css } from "styled-components";
import BrainLogo from "../../assets/logo/machine-white.svg";
import { theme } from "../../theme";

const LogoContainer = styled.div`
  display: flex;
  flex-direction: ${({ inline }) => (inline ? "row" : "column")};
  align-items: center;
`;

const LogoImg = styled.img`
  width: 8em;
  height: 8em;

  ${({ inline }) =>
    inline &&
    css`
      width: 25px;
      height: 25px;
      margin-right: 6px;
    `};

  ${({ small }) =>
    small &&
    css`
      width: 4.8em;
      height: 4.8em;
    `};
`;
const LogoText = styled.h1`
  margin-top: ${({ inline }) => (inline ? 0 : "6px")};
  font-size: ${({ inline, small }) =>
    inline ? "18px" : small ? "23px" : "40px"};
  color: ${({ inline }) => (inline ? theme.primary : theme.primary)};
  font-weight: 100;
  letter-spacing: 8px;
`;

export function Logo(props) {
  const { inline, small } = props;
  return (
    <LogoContainer inline={inline} small={small}>
      <LogoImg src={BrainLogo} inline={inline} small={small} alt="..." />
      <LogoText inline={inline} small={small}>
        ag
      </LogoText>
    </LogoContainer>
  );
}
