import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";
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
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 480px) {
    max-height: 300px;
    width: 80%;
    margin: 0;
  }
`;

const QuoteIcon = styled.div`
  position: absolute;
  top: 13px;
  left: 17px;
  font-size: 35px;
  text-shadow: 0.05rem 0.05rem 0.05rem rgba(0, 0, 0, 0.72);
  cursor: pointer;
  z-index: 1;

  a {
    transition: all 0.3s ease-in-out;
    color: ${theme.primary};
  }

  @media screen and (max-width: 480px) {
    font-size: 25px;
  }

  a:hover {
    color: ${theme.secondary};
  }
`;

const ReviewText = styled.p`
  font-size: 28px;
  color: ${theme.primary};
  font-weight: normal;
  display: flex;
  justify-content: center;
  text-align: center;
  text-shadow: 0.05rem 0.05rem 0.05rem rgba(0, 0, 0, 0.72);
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
  justify-content: center;
`;

const UserImg = styled.img`
  width: 145px;
  height: auto;
  margin-right: 10px;
  margin-bottom: 20px;
  box-shadow: 0.05rem 0.05rem 0.05rem rgba(0, 0, 0, 0.2);
`;

const Username = styled.span`
  font-size: 15px;
  color: ${theme.primary};
`;
const UserUrl = styled.span`
  cursor: pointer;
`;

export function ReviewCard(props) {
  const { reviewText, username, userImgUrl, userurl } = props;
  return (
    <CardContainer>
      <QuoteIcon>
        <Link to={userurl} rel="noopener noreferrer" target="_blank">
          <FontAwesomeIcon icon={faLink} />
        </Link>
      </QuoteIcon>
      <Marginer direction="vertical" margin="5em" />
      <ReviewText>{reviewText}</ReviewText>
      <Marginer direction="vertical" margin="7em" />
      <Line />
      <UserDetails>
        <UserImg src={userImgUrl} />
        <Username>{username}</Username>
      </UserDetails>
    </CardContainer>
  );
}
