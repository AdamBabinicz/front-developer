import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "../button/index";

const Container = styled.div`
  min-height: 100vh;
  display: grid;
  place-items: center;
`;

const Thank = () => {
  return (
    <Container>
      <h1>Dziękuję za wiadomość!</h1>
      <Button>
        <Link to="/">Powrót</Link>
      </Button>
    </Container>
  );
};

export default Thank;
