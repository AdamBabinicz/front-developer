import React from "react";
import { theme } from "../../theme";

const { default: styled } = require("styled-components");

export const SectionTitle = styled.h2`
  font-size: 34px;
  margin-top: 4rem;
  font-weight: bold;
  color: ${theme.primary};
  text-shadow: 0.05rem 0.05rem 0.05rem rgba(0, 0, 0, 0.72);

  @media screen and (max-width: 480px) {
    text-align: center;
  }
`;
