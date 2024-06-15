import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateY(-50%);
  }
  to {
    transform: translateY(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-50%);
  }
`;

export const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.36);
  min-height: 100vh;
  display: grid;
  place-items: center;
  color: #333;
  z-index: 9999;
  animation: ${({ closing }) => (closing ? fadeOut : fadeIn)} 0.3s forwards;
`;

export const PopupInner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
  width: 100%;
  max-height: 100%;
  max-width: 640px;
  background: #fff;
  font-family: "Tahoma", sans-serif;
  animation: ${({ closing }) => (closing ? slideOut : slideIn)} 0.3s forwards;
  border-radius: 6px;

  img {
    max-width: 200px;
    margin: 5px 0;
  }

  @media screen and (max-width: 700px) {
    font-size: 1.4rem;
    width: 100%;
    max-width: 340px;

    img {
      max-width: 50%;
    }
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 10px !important;
  right: 6px;
  cursor: pointer;
  border: none;
  font-size: 2rem;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;

  @media screen and (max-width: 480px) {
    top: 4px;
    right: 4px;
  }
`;
