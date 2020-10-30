import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

const ArrowContainer = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: transparent;
  border: 2px solid ${theme.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    width: 30px;
    height: 30px;
  }

  &:hover {
    border: 2px solid transparent;
    background: ${theme.third};
    color: ${theme.secondary};
  }
`;
const ArrowIcon = styled.div`
  color: ${theme.primary};
  font-size: 29px;
`;

export function DownArrow(props) {
  return (
    <ArrowContainer>
      <ArrowIcon>
        <FontAwesomeIcon icon={faAngleDown} />
      </ArrowIcon>
    </ArrowContainer>
  );
}
