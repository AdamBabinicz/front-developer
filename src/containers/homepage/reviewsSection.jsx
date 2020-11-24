import { CarouselProvider, DotGroup, Slide, Slider } from "pure-react-carousel";
import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { ReviewCard } from "../../components/reviewCard";
import { SectionTitle } from "../../components/sectionTitle";
import { useMediaQuery } from "react-responsive";
import "pure-react-carousel/dist/react-carousel.es.css";
import BackgroundImg from "../../assets/pictures/key-b.jpg";
import { theme } from "../../theme";
import { Link } from "react-router-dom";

import User1Img from "../../assets/pictures/1b.jpg";
import User2Img from "../../assets/pictures/2b.jpg";
import User3Img from "../../assets/pictures/3b.jpg";
import User4Img from "../../assets/pictures/4b.jpg";
import User5Img from "../../assets/pictures/5b.jpg";
import User6Img from "../../assets/pictures/6b.jpg";
import User7Img from "../../assets/pictures/7b.jpg";
import User8Img from "../../assets/pictures/8b.jpg";
import User9Img from "../../assets/pictures/9b.jpg";
import User10Img from "../../assets/pictures/10b.jpg";
import User11Img from "../../assets/pictures/11b.jpg";
import User12Img from "../../assets/pictures/12b.jpg";
import User13Img from "../../assets/pictures/13b.jpg";
import User14Img from "../../assets/pictures/14b.jpg";
import User15Img from "../../assets/pictures/15b.jpg";
import User16Img from "../../assets/pictures/16b.jpg";
import User17Img from "../../assets/pictures/dom.jpg";
import User18Img from "../../assets/pictures/poetry.jpg";

const ReviewsContainer = styled(Element)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)),
    url(${BackgroundImg}) center/cover no-repeat fixed;

  @media screen and (max-width: 480px) {
    min-height: 600px;
    justify-content: space-around;
  }
`;

const StyledCarouselProvider = styled(CarouselProvider)`
  width: 80%;
  /* position: relative; */

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const StyledSlide = styled(Slide)`
  .carousel__inner-slide {
    display: flex;
    justify-content: center;

    @media screen and (max-width: 480px) {
      align-items: center;
    }
  }
`;

const StyledDotGroup = styled(DotGroup)`
  margin-top: 3rem;
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 768px) {
    margin-top: 2.5rem;
    /* position: absolute; */
    margin-bottom: 5rem;
  }

  @media screen and (max-width: 480px) {
    margin-top: 0;
    /* position: absolute; */
    bottom: 1rem;
  }
  button {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: ${theme.primary};
    border: none;
    outline: none;
    &:not(:last-of-type) {
      margin-right: 3px;
    }
  }
  .carousel__dot--selected {
    background-color: ${theme.third};
  }
`;

export function ReviewsSection(props) {
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });
  return (
    <ReviewsContainer name="project">
      <SectionTitle>Realizacje</SectionTitle>
      <Marginer direction="vertical" margin="3em" />
      <StyledCarouselProvider
        naturalSlideWidth={200}
        naturalSlideHeight={isMobile ? 250 : 205}
        totalSlides={18}
        visibleSlides={isMobile ? 1 : 3}
        dragEnabled={true}
      >
        <Slider>
          <StyledSlide index={0}>
            <ReviewCard
              reviewText="Słodkolandia wita:"
              username="Firma eventowa"
              userImgUrl={User1Img}
              userurl="//www.slodkolandia.cba.pl"
            />
          </StyledSlide>
          <StyledSlide index={1}>
            <ReviewCard
              reviewText="Słodkolandia wita:"
              username="Firma eventowa"
              userImgUrl={User2Img}
              userurl="//www.dmuchance.slodkolandia.cba.pl"
            />
          </StyledSlide>
          <StyledSlide index={2}>
            <ReviewCard
              reviewText="Fontanny czekoladowe"
              username="Firma eventowa"
              userImgUrl={User3Img}
              userurl="//www.fontanny.slodkolandia.cba.pl"
            />
          </StyledSlide>
          <StyledSlide index={3}>
            <ReviewCard
              reviewText="Cytaty z Biblii"
              username="Projekt prywatny"
              userImgUrl={User4Img}
              userurl="//slowoboze.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={4}>
            <ReviewCard
              reviewText="Portfolio"
              username="Projekt prywatny"
              userImgUrl={User5Img}
              userurl="//parodysta.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={5}>
            <ReviewCard
              reviewText="Super Pucuś"
              username="Pralnia mobilna"
              userImgUrl={User6Img}
              userurl="//pranie-dywanow.j.pl"
            />
          </StyledSlide>
          <StyledSlide index={6}>
            <ReviewCard
              reviewText="Pa-Mi"
              username="Ślusarstwo art."
              userImgUrl={User7Img}
              userurl="//www.pa-mi.pl"
            />
          </StyledSlide>
          <StyledSlide index={7}>
            <ReviewCard
              reviewText="Roszada"
              username="UKS Radom"
              userImgUrl={User8Img}
              userurl="//roszada.radom.pl"
            />
          </StyledSlide>
          <StyledSlide index={8}>
            <ReviewCard
              reviewText="Fotobudka"
              username="Firma eventowa"
              userImgUrl={User9Img}
              userurl="//foto-budka.netlify.com"
            />
          </StyledSlide>
          <StyledSlide index={9}>
            <ReviewCard
              reviewText="Brzoz-Med"
              username="Basket Team"
              userImgUrl={User10Img}
              userurl="//b-mbteam.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={10}>
            <ReviewCard
              reviewText="Ciasteczkowa Grama"
              username="Szkoła językowa"
              userImgUrl={User11Img}
              userurl="//grama.000webhostapp.com"
            />
          </StyledSlide>
          <StyledSlide index={11}>
            <ReviewCard
              reviewText="Portfolio"
              username="Projekt prywatny"
              userImgUrl={User12Img}
              userurl="//komiks.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={12}>
            <ReviewCard
              reviewText="100 najlepszych firm w mieście"
              username="Firma reklamowa"
              userImgUrl={User13Img}
              userurl="//baza-firm.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={13}>
            <ReviewCard
              reviewText="Portfolio szachisty"
              username="Projekt prywatny"
              userImgUrl={User14Img}
              userurl="//wiktor-chess.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={14}>
            <ReviewCard
              reviewText="Portfolio parodysty"
              username="Projekt prywatny"
              userImgUrl={User15Img}
              userurl="//radomski-parodysta.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={15}>
            <ReviewCard
              reviewText="Resurrexit"
              username="Grupa charyzmatyczna"
              userImgUrl={User16Img}
              userurl="//resurrexit.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={16}>
            <ReviewCard
              reviewText="Domy i ludzie"
              username="Projekt prywatny"
              userImgUrl={User17Img}
              userurl="//czarna.netlify.app/"
            />
          </StyledSlide>
          <StyledSlide index={17}>
            <ReviewCard
              reviewText="Wiersze antypowabne"
              username="Projekt prywatny"
              userImgUrl={User18Img}
              userurl="//poetry.netlify.app/"
            />
          </StyledSlide>
        </Slider>
        <StyledDotGroup />
      </StyledCarouselProvider>
    </ReviewsContainer>
  );
}
