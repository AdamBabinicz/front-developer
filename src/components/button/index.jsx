import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../theme";

const ButtonWrapper = styled.button`
  padding: ${({ small }) => (small ? "5px 8px" : "7px 15px")};
  border-radius: 5px;
  background: ${theme.primary};
  color: ${theme.secondary};
  font-weight: bold;
  font-size: ${({ small }) => (small ? "10px" : "12px")};
  border: 2px solid transparent;
  margin: 0 auto;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  outline: none;

  &:hover {
    background: ${theme.secondary};
    border: 2px solid ${theme.third};
    color: ${theme.primary};
  }

  ${({ smallB }) =>
    smallB &&
    css`
      position: absolute;
      right: -10px;
      top: -10px;
      font-size: 24px;
      background: rgb(253, 253, 253);
      border-radius: 50%;
      color: #00000096;
      outline: none;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: ${({ small }) => (small ? "8px" : "15px")};
    `};
`;

// export function Button(props) {
//   return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
// }
export const Button = React.forwardRef((props, ref) => {
  return (
    <ButtonWrapper ref={ref} {...props}>
      {props.children}
    </ButtonWrapper>
  );
});
