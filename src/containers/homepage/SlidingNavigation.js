// src/containers/homepage/SlidingNavigation.js

import React, { useContext, useEffect, useState } from "react";
import { CarouselContext, Dot } from "pure-react-carousel";
import styled from "styled-components";
import { theme } from "../../theme";

const StyledDotContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 0.5rem; /* Drastycznie zmniejszony odstęp */
  padding-bottom: 1rem;

  button {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${theme.primary};
    border: none;
    outline: none;
    margin: 0 4px;
    cursor: pointer;
    transition: all 0.3s ease;
    opacity: 0.4;
  }

  .carousel__dot--selected {
    background: ${theme.third};
    opacity: 1;
    transform: scale(1.2);
  }
`;

const JumpButton = styled.button`
  background: transparent !important;
  color: ${theme.primary} !important;
  font-size: 24px !important; /* Większe, czytelne strzałki */
  line-height: 1;
  border: none !important;
  padding: 0 15px !important;
  margin: 0 !important;
  width: auto !important;
  height: auto !important;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    color: ${theme.third} !important;
  }

  @media screen and (max-width: 480px) {
    padding: 0 10px !important;
  }
`;

export const SlidingNavigation = ({ totalSlides, visibleDots = 7 }) => {
  const context = useContext(CarouselContext);
  const [currentSlide, setCurrentSlide] = useState(context.state.currentSlide);

  useEffect(() => {
    function onChange() {
      setCurrentSlide(context.state.currentSlide);
    }
    context.subscribe(onChange);
    return () => context.unsubscribe(onChange);
  }, [context]);

  const handleJump = (index) => {
    context.setStoreState({ currentSlide: index });
  };

  let start = Math.max(
    0,
    Math.min(
      currentSlide - Math.floor(visibleDots / 2),
      totalSlides - visibleDots,
    ),
  );

  const dots = [];
  for (let i = 0; i < visibleDots; i++) {
    const slideIndex = start + i;
    if (slideIndex < totalSlides) {
      dots.push(<Dot slide={slideIndex} key={slideIndex} />);
    }
  }

  return (
    <StyledDotContainer>
      <JumpButton onClick={() => handleJump(0)} title="Początek">
        &laquo;
      </JumpButton>
      {dots}
      <JumpButton onClick={() => handleJump(totalSlides - 1)} title="Koniec">
        &raquo;
      </JumpButton>
    </StyledDotContainer>
  );
};
