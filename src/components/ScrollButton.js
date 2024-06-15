import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";

const Button = styled.button`
  position: fixed;
  width: 50px;
  height: 50px;
  bottom: 40px;
  right: 40px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
  opacity: ${({ show }) => (show ? "1" : "0")};
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  z-index: 1000;

  &:hover {
    background: #555;
  }

  @media screen and (max-width: 480px) {
    right: 10px;
    bottom: 10px;
  }
`;

const ScrollButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button onClick={scrollToTop} show={showButton}>
      <FaArrowUp />
    </Button>
  );
};

export default ScrollButton;
