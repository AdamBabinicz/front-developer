import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Element } from "react-scroll";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Mousewheel } from "swiper/modules";

// Import stylów
import "swiper/css";
import "swiper/css/navigation";

import { Marginer } from "../../components/navbar/marginer";
import { ReviewCard } from "../../components/navbar/reviewCard";
import { SectionTitle } from "../../components/sectionTitle";
import BackgroundImg from "../../assets/pictures/key-b.jpg";
import { theme } from "../../theme";
import { projects } from "./projectsData";

const ReviewsContainer = styled(Element)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background:
    linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)),
    url(${BackgroundImg}) center/cover no-repeat fixed;
  width: 100%;
  padding: 4rem 0;
`;

const StyledSwiperWrapper = styled.div`
  width: 90%;
  max-width: 1400px;
  position: relative;

  .swiper {
    padding: 20px 0;
  }

  /* KLUCZ DO RÓWNYCH WYSOKOŚCI NA DESKTOPIE */
  .swiper-slide {
    height: auto !important; /* Slajdy dopasowują się do najwyższego w rzędzie */
    display: flex;
  }

  /* Wymuszamy na ReviewCard (lub MobileCard), by wypełnił 100% wysokości slajdu */
  .swiper-slide > div {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    /* To zapewnia, że zawartość wewnątrz karty rozłoży się równo */
    justify-content: space-between;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: ${theme.primary} !important;
    top: 50% !important;
    transform: translateY(-50%);
    &::after {
      font-size: 24px !important;
      font-weight: bold;
    }
    z-index: 100;
  }

  @media screen and (max-width: 480px) {
    .swiper-button-prev {
      left: -5px !important;
    }
    .swiper-button-next {
      right: -5px !important;
    }
  }
`;

const MobileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  padding: 25px 20px;
  color: white;
  border: none !important;

  .link-icon {
    align-self: flex-start;
    color: ${theme.primary};
    font-size: 24px;
    margin-bottom: 15px;
  }

  img {
    width: 100%;
    max-height: 220px;
    object-fit: contain;
    margin-bottom: 20px;
  }

  h4 {
    font-size: 18px;
    margin-bottom: 10px;
    text-align: center;
  }

  p {
    font-size: 14px;
    opacity: 0.7;
    margin-top: auto; /* Popycha opis na dół, wyrównując go */
  }
`;

const CustomNavWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  gap: 50px;
`;

const JumpButton = styled.button`
  background: transparent;
  color: ${theme.primary};
  border: 1px solid ${theme.primary};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${theme.primary};
    color: white;
  }
`;

export function ServicesSection(props) {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 480);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ReviewsContainer name="project">
      <SectionTitle>Realizacje</SectionTitle>
      <Marginer direction="vertical" margin="2em" />

      <StyledSwiperWrapper>
        <Swiper
          onSwiper={setSwiperInstance}
          modules={[Navigation, Keyboard, Mousewheel]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={true}
          keyboard={true}
          mousewheel={{ forceToAxis: true }}
          grabCursor={true}
          /* autoHeight wyłączone dla Desktopu, by wymusić równe karty */
          autoHeight={isMobile}
        >
          {projects.map((proj, index) => (
            <SwiperSlide key={index}>
              {isMobile ? (
                <MobileCard>
                  <a
                    href={proj.url}
                    className="link-icon"
                    target="_blank"
                    rel="noreferrer"
                  >
                    🔗
                  </a>
                  <img src={proj.img} alt={proj.txt} />
                  <h4>{proj.txt}</h4>
                  <p>{proj.user}</p>
                </MobileCard>
              ) : (
                <ReviewCard
                  reviewText={proj.txt}
                  username={proj.user}
                  userImgUrl={proj.img}
                  userurl={proj.url}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        <CustomNavWrapper>
          <JumpButton onClick={() => swiperInstance?.slideTo(0)}>
            &laquo;
          </JumpButton>
          <JumpButton
            onClick={() => swiperInstance?.slideTo(projects.length - 1)}
          >
            &raquo;
          </JumpButton>
        </CustomNavWrapper>
      </StyledSwiperWrapper>
    </ReviewsContainer>
  );
}
