import React from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  display: grid;
  place-items: center;
`;

const Thank = () => {
  return (
    <Container>
      <h1>Dziękuję za wiadomość!</h1>
    </Container>
  );
};

export default Thank;
