import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "../button/index";
import BackgroundImg from "../../assets/pictures/codeb.jpg";
import img from "../../assets/illustrations/ab.png";

const Container = styled.div`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)),
    url(${BackgroundImg}) center/cover no-repeat fixed;
  align-items: center;
  color: #ccc;

  img {
    max-width: 100%;
    height: 300px;
    opacity: 0.6;
  }

  @media screen and (max-width: 676px) {
    h1 {
      font-size: 24px;
    }
  }
`;

const Thank = () => {
  return (
    <Container>
      <h1>Dziękujemy za wiadomość!</h1>
      <img src={img} alt="..." />
      <Link to="/">
        <Button>Powrót</Button>
      </Link>
    </Container>
  );
};

export default Thank;
