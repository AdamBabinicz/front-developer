import React from "react";
import styled from "styled-components/macro";
import { theme } from "../../theme";

const ServiceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4em;
  flex-direction: ${({ isReversed }) => isReversed && "row-reverse"};
  flex-wrap: wrap-reverse;

  @media screen and (max-width: 480px) {
    justify-content: center;
  }
`;
const ServiceImg = styled.img`
  width: 22em;

  @media screen and (max-width: 768px) {
    /* width: 18em; */
    width: 90%;
    margin: 0 auto;
  }
`;
const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 60%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
const Title = styled.h2`
  color: ${theme.fourth};
  font-size: 28px;
  font-weight: 700;
  margin: 5px 0;
  width: 50%;

  @media screen and (max-width: 768px) {
    margin-top: 1.5em;
    width: 90%;
  }
`;
const Details = styled.p`
  color: ${theme.fourth};
  font-size: 21px;
  padding: 0 50px;
  text-align: center;
  max-width: 55%;

  @media screen and (max-width: 768px) {
    /* min-width: 100%; */
    max-width: 90%;
    padding: 0 5px;
  }
`;

export function OurService(props) {
  const { imgUrl, title, description, isReversed } = props;
  return (
    <ServiceContainer isReversed={isReversed}>
      <DescriptionContainer>
        <Title>{title}</Title>
        <Details>{description}</Details>
      </DescriptionContainer>
      <ServiceImg src={imgUrl} alt="..." />
    </ServiceContainer>
  );
}
