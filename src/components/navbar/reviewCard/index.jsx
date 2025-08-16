import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Marginer } from "../marginer";
import { Link } from "react-router-dom";

const CardContainer = styled.div`
  width: 350px;
  background: ${theme.primary};
  box-shadow: 0px 0px 7px rgba(17, 17, 17, 0.2);
  border-radius: 3px;
  margin: 0 10px;
  position: relative;
  padding: 10px 1.2em;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 0;
  }

  @media screen and (max-width: 480px) {
    max-height: 300px;
    margin: 0;
  }
`;

const QuoteIcon = styled.div`
  position: absolute;
  top: 5px;
  left: 13px;
  font-size: 25px;
  text-shadow: 0.05rem 0.05rem 0.05rem rgba(0, 0, 0, 0.72);
  cursor: pointer;
  z-index: 1000;

  a {
    transition: all 0.3s ease-in-out;
    color: ${theme.primary};
  }

  @media screen and (max-width: 1100px) {
    font-size: 25px;
  }

  @media screen and (max-width: 768px) {
    font-size: 20px;
    top: 6px;
    left: 7px;
  }
  @media screen and (max-width: 480px) {
    font-size: 35px;
  }

  a:hover {
    color: ${theme.secondary};
  }
`;

const ReviewText = styled.p`
  font-size: clamp(1rem, 2.5vw, 2rem);
  color: ${theme.primary};
  font-weight: normal;
  display: flex;
  justify-content: center;
  text-align: center;
  text-shadow: 0.05rem 0.05rem 0.05rem rgba(0, 0, 0, 0.72);
  text-wrap: balance;
  text-overflow: ellipsis;

  @media screen and (max-width: 480px) {
    font-size: 28px;
    margin-top: 1rem;
  }
`;

const Line = styled.span`
  min-width: 100%;
  min-height: 1px;
  margin-bottom: 2em;
  background: ${theme.primary};
  display: flex;
`;

const UserDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const UserImg = styled.img`
  width: 145px;
  height: auto;
  margin-right: 5px;
  margin-bottom: 20px;
  box-shadow: 0.05rem 0.05rem 0.05rem rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  cursor: pointer; /* Dodajemy kursor, aby było wiadomo, że obrazek jest klikalny */

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 1100px) {
    width: 135px;
  }

  @media screen and (max-width: 768px) {
    width: 90px;
  }

  @media screen and (max-width: 480px) {
    width: 165px;
    max-width: 100%;
    max-height: 185px;
    object-fit: cover;
    margin-left: 20px;
  }
`;

const Username = styled.span`
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: ${theme.primary};
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;
const UserUrl = styled.span`
  cursor: pointer;
`;

export function ReviewCard(props) {
  const { reviewText, username, userImgUrl, userurl } = props;

  // Ta funkcja zatrzymuje "bąbelkowanie" zdarzenia do karuzeli
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <CardContainer>
      <QuoteIcon>
        {/* Zabezpieczamy również ikonkę */}
        <a
          href={userurl}
          rel="noopener noreferrer"
          target="_blank"
          draggable="false"
          onMouseDown={stopPropagation}
          onTouchStart={stopPropagation}
        >
          <FontAwesomeIcon icon={faLink} />
        </a>
      </QuoteIcon>
      <Marginer direction="vertical" margin="5em" />
      <ReviewText>{reviewText}</ReviewText>
      <Marginer direction="vertical" margin="7em" />
      <Line />
      <UserDetails>
        {/* Obrazek jest teraz opakowany w link z zabezpieczeniami */}
        <a
          href={userurl}
          rel="noopener noreferrer"
          target="_blank"
          draggable="false"
          onMouseDown={stopPropagation}
          onTouchStart={stopPropagation}
        >
          <UserImg
            src={userImgUrl}
            alt={`Zdjęcie użytkownika ${username}`}
            draggable="false"
          />
        </a>
        <Username>{username}</Username>
      </UserDetails>
    </CardContainer>
  );
}
