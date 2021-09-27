import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "../button/index";

const Container = styled.div`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: #333;
  color: #fff;
`;

const Thank = () => {
  return (
    <Container>
      <h1>Dziękuję za wiadomość!</h1>

      <Link to="/">
        <Button>Powrót</Button>
      </Link>
    </Container>
  );
};

export default Thank;
