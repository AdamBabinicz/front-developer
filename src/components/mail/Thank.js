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
  color: #fff;
`;

const Thank = () => {
  return (
    <Container>
      <h1>Dziękuję za wiadomość!</h1>
      <img src={img} alt="..." />
      <Link to="/">
        <Button>Powrót</Button>
      </Link>
    </Container>
  );
};

export default Thank;
