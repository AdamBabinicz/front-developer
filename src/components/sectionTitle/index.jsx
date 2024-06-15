import React from "react";
import { theme } from "../../theme";

const { default: styled } = require("styled-components");

export const SectionTitle = styled.h2`
  font-size: 34px;
  margin: 4rem 0;
  font-weight: bold;
  color: ${theme.primary};
  text-shadow: 0.05rem 0.05rem 0.05rem rgba(0, 0, 0, 0.72);

  @media screen and (max-width: 480px) {
    text-align: center;
    margin: 2rem 0;
    font-size: 28px;
  }
`;
