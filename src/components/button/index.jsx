import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

const ButtonWrapper = styled.button`
  padding: ${({ small }) => (small ? "5px 8px" : "7px 15px")};
  border-radius: 5px;
  background: ${theme.primary};
  color: ${theme.secondary};
  font-weight: bold;
  font-size: ${({ small }) => (small ? "10px" : "12px")};
  border: 2px solid transparent;
  outline: none;
  margin: 0 auto;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    box-sizing: border-box;
    background: transparent;
    border: 2px solid ${theme.primary};
    color: ${theme.primary};
  }
`;

export function Button(props) {
  return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
}
