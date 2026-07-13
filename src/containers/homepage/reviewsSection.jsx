import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import { useMediaQuery } from "react-responsive";

// Import Swiper React components i stylów
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Marginer } from "../../components/navbar/marginer";
import { ReviewCard } from "../../components/navbar/reviewCard";
import { SectionTitle } from "../../components/sectionTitle";
import BackgroundImg from "../../assets/pictures/key-b.jpg";
import { theme } from "../../theme";

// Importujemy Twoje oryginalne dane
import { projects } from "./projectsData";

const ReviewsContainer = styled(Element)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background:
    linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)),
    url(${BackgroundImg}) center/cover no-repeat fixed;
  width: 100%;
  padding: 4rem 0;

  /* Stylizacja kropek pod slajderem */
  .swiper-pagination {
    position: relative !important;
    bottom: 0 !important;
    margin-top: 25px !important;
  }

  .swiper-pagination-bullet {
    background: ${theme.primary} !important;
    opacity: 0.5;
  }

  .swiper-pagination-bullet-active {
    background: ${theme.third} !important;
    opacity: 1;
    transform: scale(1.2);
  }

  /* Stylizacja strzałek bocznych (opcjonalnie) */
  .swiper-button-next,
  .swiper-button-prev {
    color: ${theme.primary} !important;
    transform: scale(0.6);
  }
`;

const StyledSwiperContainer = styled.div`
  width: 95%;
  max-width: 1400px;

  .swiper-slide {
    display: flex;
    justify-content: center;
    height: auto; /* Pozwala slajdom mieć naturalną wysokość */
  }
`;

export function ReviewsSection(props) {
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });

  return (
    <ReviewsContainer name="project">
      <SectionTitle>Realizacje</SectionTitle>
      <Marginer direction="vertical" margin="2em" />

      <StyledSwiperContainer>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={isMobile ? 1 : 3}
          pagination={{ clickable: true }}
          navigation={!isMobile} // Strzałki tylko na desktopie
          grabCursor={true}
          autoHeight={true} // KLUCZOWE: Swiper sam dopasuje wysokość!
        >
          {projects.map((proj, index) => (
            <SwiperSlide key={index}>
              <ReviewCard
                reviewText={proj.txt}
                username={proj.user}
                userImgUrl={proj.img}
                userurl={proj.url}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </StyledSwiperContainer>
    </ReviewsContainer>
  );
}
