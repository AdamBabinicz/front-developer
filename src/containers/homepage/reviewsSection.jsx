import {
  CarouselContext,
  CarouselProvider,
  Dot,
  Slide,
  Slider,
} from "pure-react-carousel";
import React, { useContext, useEffect, useState } from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { Marginer } from "../../components/navbar/marginer";
import { ReviewCard } from "../../components/navbar/reviewCard";
import { SectionTitle } from "../../components/sectionTitle";
import { useMediaQuery } from "react-responsive";
import "pure-react-carousel/dist/react-carousel.es.css";
import BackgroundImg from "../../assets/pictures/key-b.jpg";
import { theme } from "../../theme";

import User1Img from "../../assets/pictures/1b.jpg";
import User2Img from "../../assets/pictures/dziury.jpg";
import User3Img from "../../assets/pictures/3b.jpg";
import User4Img from "../../assets/pictures/4b.jpg";
import User5Img from "../../assets/pictures/5b.jpg";
import User6Img from "../../assets/pictures/ai.jpg";
import User7Img from "../../assets/pictures/podroze.jpg";
import User8Img from "../../assets/pictures/8b.jpg";
import User9Img from "../../assets/pictures/tent.jpg";
import User10Img from "../../assets/pictures/10b.jpg";
import User11Img from "../../assets/pictures/11b.jpg";
import User12Img from "../../assets/pictures/12b.jpg";
import User13Img from "../../assets/pictures/13b.jpg";
import User14Img from "../../assets/pictures/14b.jpg";
import User15Img from "../../assets/pictures/15b.jpg";
import User16Img from "../../assets/pictures/16b.jpg";
import User17Img from "../../assets/pictures/dom.jpg";
import User18Img from "../../assets/pictures/poetry.jpg";
import User19Img from "../../assets/pictures/solna.jpg";
import User20Img from "../../assets/pictures/17b.jpg";
import User21Img from "../../assets/pictures/ob.jpg";
import User22Img from "../../assets/pictures/mk.jpg";
import User23Img from "../../assets/pictures/mapa.jpg";
import User24Img from "../../assets/pictures/dino-b.jpg";
import User25Img from "../../assets/pictures/epi.jpg";
import User26Img from "../../assets/pictures/sara.jpg";
import User27Img from "../../assets/pictures/zamki-b.jpg";
import User28Img from "../../assets/pictures/pralnia-b.jpg";
import User29Img from "../../assets/pictures/moj-jezus.jpg";
import User30Img from "../../assets/pictures/faustyna.jpg";
import User31Img from "../../assets/pictures/magnus-ab.jpg";
import User32Img from "../../assets/pictures/matejko.jpg";
import User33Img from "../../assets/pictures/library.jpg";
import User34Img from "../../assets/pictures/holmes.jpg";
import User35Img from "../../assets/pictures/starcy.jpg";
import User36Img from "../../assets/pictures/heller.jpg";
import User37Img from "../../assets/pictures/woda.jpg";
import User38Img from "../../assets/pictures/17.jpg";
import User39Img from "../../assets/pictures/mak.jpg";
import User40Img from "../../assets/pictures/plan.jpg";
import User41Img from "../../assets/pictures/praga.jpg";
import User42Img from "../../assets/pictures/gdansk.jpg";
import User43Img from "../../assets/pictures/perelman.jpg";
import User44Img from "../../assets/pictures/reagan.jpg";
import User45Img from "../../assets/pictures/wesele.jpg";
import User46Img from "../../assets/pictures/alkohol.jpg";
import User47Img from "../../assets/pictures/rosary.jpg";
import User48Img from "../../assets/pictures/zin.jpg";
import User49Img from "../../assets/pictures/tesla.jpg";
import User50Img from "../../assets/pictures/banach.jpg";
import User51Img from "../../assets/pictures/niepodl.jpg";
import User52Img from "../../assets/pictures/western.jpg";
import User53Img from "../../assets/pictures/aleksander.jpg";
import User54Img from "../../assets/pictures/rzym.jpg";
import User55Img from "../../assets/pictures/barok.jpg";
import User56Img from "../../assets/pictures/kochan.jpg";
import User57Img from "../../assets/pictures/oswiecenie.jpg";
import User58Img from "../../assets/pictures/romantyzm.jpg";
import User59Img from "../../assets/pictures/pozytywizm.jpg";
import User60Img from "../../assets/pictures/m.polska.jpg";
import User61Img from "../../assets/pictures/miedzy.jpg";
import User62Img from "../../assets/pictures/okup.jpg";
import User63Img from "../../assets/pictures/kmiecie.jpg";
import User64Img from "../../assets/pictures/panszczyzna.jpg";
import User65Img from "../../assets/pictures/anne.jpg";
import User66Img from "../../assets/pictures/zloto.jpg";
import User67Img from "../../assets/pictures/glogier.jpg";
import User68Img from "../../assets/pictures/dalajlama.jpg";
import User69Img from "../../assets/pictures/potop.jpg";
import User70Img from "../../assets/pictures/penrose.jpg";
import User71Img from "../../assets/pictures/arka.jpg";
import User72Img from "../../assets/pictures/chopin.jpg";
import User73Img from "../../assets/pictures/pickwick.jpg";
import User74Img from "../../assets/pictures/menuhin.jpg";
import User75Img from "../../assets/pictures/kowalewski.jpg";
import User76Img from "../../assets/pictures/zdanowska.jpg";
import User77Img from "../../assets/pictures/zelenski.jpg";
import User78Img from "../../assets/pictures/zbrodnie.jpg";
import User79Img from "../../assets/pictures/ofiary.jpg";
import User80Img from "../../assets/pictures/stop-putin.jpg";
import User81Img from "../../assets/pictures/krzyz.jpg";
import User82Img from "../../assets/pictures/skrzypek.jpg";
import User83Img from "../../assets/pictures/edyp.jpg";
import User84Img from "../../assets/pictures/konstytucja.jpg";
import User85Img from "../../assets/pictures/mazurzyn.jpg";
import User86Img from "../../assets/pictures/trela.jpg";
import User87Img from "../../assets/pictures/asperger.jpg";
import User88Img from "../../assets/pictures/elzbietanki.jpg";
import User89Img from "../../assets/pictures/nataniel.jpg";
import User90Img from "../../assets/pictures/aktywny.jpg";
import User91Img from "../../assets/pictures/kaku.jpg";
import User92Img from "../../assets/pictures/wolyn.jpg";
import User93Img from "../../assets/pictures/stanko.jpg";
import User94Img from "../../assets/pictures/herbert.jpg";
import User95Img from "../../assets/pictures/turing.jpg";
import User96Img from "../../assets/pictures/bog.jpg";
import User97Img from "../../assets/pictures/jennifer.jpg";
import User98Img from "../../assets/pictures/elzbieta.jpg";
import User99Img from "../../assets/pictures/kosz.jpg";
import User100Img from "../../assets/pictures/sidis.jpg";
import User101Img from "../../assets/pictures/rodzinnie.jpg";
import User102Img from "../../assets/pictures/kobiela.jpg";
import User103Img from "../../assets/pictures/falski.jpg";
import User104Img from "../../assets/pictures/korepetycje.jpg";
import User105Img from "../../assets/pictures/ania.jpg";
import User106Img from "../../assets/pictures/habitat.jpg";
import User107Img from "../../assets/pictures/blog-natanka.jpg";
import User108Img from "../../assets/pictures/wartosci.jpg";
import User109Img from "../../assets/pictures/niedzwiecki.jpg";
import User110Img from "../../assets/pictures/natek.jpg";
import User111Img from "../../assets/pictures/nat.jpg";
import User112Img from "../../assets/pictures/dobrowolski.jpg";
import User113Img from "../../assets/pictures/namioty.jpg";
import User114Img from "../../assets/pictures/prorocy.jpg";
import User115Img from "../../assets/pictures/jacek.jpg";
import User116Img from "../../assets/pictures/aqua.jpg";
import User117Img from "../../assets/pictures/mosiolek.jpg";
import User118Img from "../../assets/pictures/eurotrek.jpg";
import User119Img from "../../assets/pictures/poplawski.jpg";
import User120Img from "../../assets/pictures/pucus.jpg";
import User121Img from "../../assets/pictures/rod.jpg";
import User122Img from "../../assets/pictures/rutkowski.jpg";
import User123Img from "../../assets/pictures/zbuduj.jpg";
import User124Img from "../../assets/pictures/kwanty.jpg";
import User125Img from "../../assets/pictures/akademia.jpg";
import User126Img from "../../assets/pictures/thonet.jpg";
import User127Img from "../../assets/pictures/antypowabne.jpg";
import User128Img from "../../assets/pictures/dunajski.jpg";
import User129Img from "../../assets/pictures/hawking.jpg";
import User130Img from "../../assets/pictures/aqua-plus.jpg";
import User131Img from "../../assets/pictures/konstelacja.jpg";
import User132Img from "../../assets/pictures/ewangelie.jpg";
import User133Img from "../../assets/pictures/korki.jpg";
import User134Img from "../../assets/pictures/swieci.jpg";
import User135Img from "../../assets/pictures/kuchnia.jpg";

const ReviewsContainer = styled(Element)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background:
    linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)),
    url(${BackgroundImg}) center/cover no-repeat fixed;

  @media screen and (max-width: 480px) {
    height: fit-content;
  }
`;

const StyledCarouselProvider = styled(CarouselProvider)`
  width: 80%;
  position: relative;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 3rem;

    @media screen and (max-width: 480px) {
      margin-bottom: 2rem;
    }
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

const StyledDotContainer = styled.div`
  margin: 0;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  padding-bottom: 3rem;

  @media screen and (max-width: 768px) {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (max-width: 480px) {
    top: 20rem;
    padding-bottom: 0;
  }

  button {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: ${theme.primary};
    border: none;
    outline: none;
    margin: 0 3px;
    cursor: pointer;
    transition: background 0.3s;
  }

  .carousel__dot--selected {
    background: ${theme.third};
  }
`;

const SlidingDotGroup = ({ totalSlides, visibleDots = 10 }) => {
  const context = useContext(CarouselContext);
  const [currentSlide, setCurrentSlide] = useState(context.state.currentSlide);

  useEffect(() => {
    function onChange() {
      setCurrentSlide(context.state.currentSlide);
    }
    context.subscribe(onChange);
    return () => context.unsubscribe(onChange);
  }, [context]);

  let start = Math.floor(currentSlide - visibleDots / 2);

  if (start < 0) {
    start = 0;
  } else if (start + visibleDots > totalSlides) {
    start = totalSlides - visibleDots;
  }

  if (totalSlides < visibleDots) {
    start = 0;
  }

  const dots = [];
  for (let i = 0; i < visibleDots; i++) {
    const slideIndex = start + i;
    if (slideIndex < totalSlides) {
      dots.push(<Dot slide={slideIndex} key={slideIndex} />);
    }
  }

  return <StyledDotContainer>{dots}</StyledDotContainer>;
};

export function ReviewsSection(props) {
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });

  return (
    <ReviewsContainer name="project">
      <SectionTitle>Realizacje</SectionTitle>
      <Marginer direction="vertical" />
      <StyledCarouselProvider
        naturalSlideWidth={200}
        naturalSlideHeight={isMobile ? 250 : 205}
        totalSlides={135}
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
              reviewText="Czarne dziury"
              username="Projekt edukacyjny"
              userImgUrl={User2Img}
              userurl="//czarne-dziury.netlify.app"
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
              reviewText="Sztuczna Inteligencja"
              username="AI"
              userImgUrl={User6Img}
              userurl="//neural-core.netlify.app/"
            />
          </StyledSlide>
          <StyledSlide index={6}>
            <ReviewCard
              reviewText="Gosia i przyjaciele"
              username="Projekt prywatny"
              userImgUrl={User7Img}
              userurl="//podroze-gosi.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={7}>
            <ReviewCard
              reviewText="Roszada"
              username="UKS Radom"
              userImgUrl={User8Img}
              userurl="//www.roszada.radom.pl"
            />
          </StyledSlide>
          <StyledSlide index={8}>
            <ReviewCard
              reviewText="Namioty imprezowe"
              username="Firma eventowa"
              userImgUrl={User9Img}
              userurl="//namioty-imprezowe.netlify.app"
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
              userurl="//grama.netlify.app"
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
              userurl="//czarna.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={17}>
            <ReviewCard
              reviewText="Wiersze antypowabne"
              username="Projekt prywatny"
              userImgUrl={User18Img}
              userurl="//poetry.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={18}>
            <ReviewCard
              reviewText="Dom na Solnej"
              username="Projekt prywatny"
              userImgUrl={User19Img}
              userurl="//solna.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={19}>
            <ReviewCard
              reviewText="Korzenie rodów Gierczak i Ofiara"
              username="Projekt prywatny"
              userImgUrl={User20Img}
              userurl="//korzenie.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={20}>
            <ReviewCard
              reviewText="Ognisko plastyczne"
              username="Projekt prywatny"
              userImgUrl={User21Img}
              userurl="//ognisko.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={21}>
            <ReviewCard
              reviewText="Monika Knapczyk"
              username="Pisarka, wydawca, blogerka"
              userImgUrl={User22Img}
              userurl="//m-knapczyk.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={22}>
            <ReviewCard
              reviewText="Mapa życiowa"
              username="Projekt prywatny"
              userImgUrl={User23Img}
              userurl="//droga.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={23}>
            <ReviewCard
              reviewText="Dinozaury Krystiana"
              username="Projekt prywatny"
              userImgUrl={User24Img}
              userurl="//dinozaury.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={24}>
            <ReviewCard
              reviewText="Epifaniusz Drowniak"
              username="Projekt prywatny"
              userImgUrl={User25Img}
              userurl="//nikifor.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={25}>
            <ReviewCard
              reviewText="Zuzanna Ginczanka"
              username="Projekt prywatny"
              userImgUrl={User26Img}
              userurl="//ginczanka.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={26}>
            <ReviewCard
              reviewText="Wynajem urządzeń rekreacyjnych"
              username="Firma eventowa"
              userImgUrl={User27Img}
              userurl="//zamki.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={27}>
            <ReviewCard
              reviewText="Pralnia stacjonarna i mobilna"
              username="Firma usługowa"
              userImgUrl={User28Img}
              userurl="//pranie-dywanow.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={28}>
            <ReviewCard
              reviewText="Mój Jezus"
              username="Projekt prywatny"
              userImgUrl={User29Img}
              userurl="//moj-jezus.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={29}>
            <ReviewCard
              reviewText="Św. Faustyna"
              username="Projekt prywatny"
              userImgUrl={User30Img}
              userurl="//faustyna.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={30}>
            <ReviewCard
              reviewText="Magnus Carlsen"
              username="Projekt prywatny"
              userImgUrl={User31Img}
              userurl="//carlsen.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={31}>
            <ReviewCard
              reviewText="Jan Matejko"
              username="Projekt prywatny"
              userImgUrl={User32Img}
              userurl="//matejko.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={32}>
            <ReviewCard
              reviewText="Biblioteka Aleksandryjska"
              username="Projekt prywatny"
              userImgUrl={User33Img}
              userurl="//aleksandryjska.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={33}>
            <ReviewCard
              reviewText="Sherlock Holmes"
              username="Projekt prywatny"
              userImgUrl={User34Img}
              userurl="//sherry-holmes.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={34}>
            <ReviewCard
              reviewText="Starcy"
              username="Projekt prywatny"
              userImgUrl={User35Img}
              userurl="//starcy.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={35}>
            <ReviewCard
              reviewText="Michał Heller"
              username="Projekt prywatny"
              userImgUrl={User36Img}
              userurl="//michal-heller.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={36}>
            <ReviewCard
              reviewText="Woda na Ziemi"
              username="Projekt prywatny"
              userImgUrl={User37Img}
              userurl="//oksydan.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={37}>
            <ReviewCard
              reviewText="Marianna i Józef"
              username="Projekt prywatny"
              userImgUrl={User38Img}
              userurl="//rodzice.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={38}>
            <ReviewCard
              reviewText="Tadeusz Makowski"
              username="Projekt prywatny"
              userImgUrl={User39Img}
              userurl="//tade.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={39}>
            <ReviewCard
              reviewText="Boży plan"
              username="Projekt prywatny"
              userImgUrl={User40Img}
              userurl="//bozyplan.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={40}>
            <ReviewCard
              reviewText="Praga"
              username="Projekt prywatny"
              userImgUrl={User41Img}
              userurl="//praga.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={41}>
            <ReviewCard
              reviewText="Gdańsk"
              username="Projekt prywatny"
              userImgUrl={User42Img}
              userurl="//gdanczk.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={42}>
            <ReviewCard
              reviewText="7 zagadek milenijnych"
              username="Projekt prywatny"
              userImgUrl={User43Img}
              userurl="//perelman.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={43}>
            <ReviewCard
              reviewText="Ronald Reagan"
              username="Projekt prywatny"
              userImgUrl={User44Img}
              userurl="//ronald-reagan.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={44}>
            <ReviewCard
              reviewText="Wesele Wyspiański"
              username="Projekt edukacyjny"
              userImgUrl={User45Img}
              userurl="//wyspianski.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={45}>
            <ReviewCard
              reviewText="Alkoholizm"
              username="Projekt edukacyjny"
              userImgUrl={User46Img}
              userurl="//alkoholizm.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={46}>
            <ReviewCard
              reviewText="Różaniec"
              username="Projekt edukacyjny"
              userImgUrl={User47Img}
              userurl="//rozaniec.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={47}>
            <ReviewCard
              reviewText="Piórkiem i węglem"
              username="Projekt edukacyjny"
              userImgUrl={User48Img}
              userurl="//wiktor-zin.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={48}>
            <ReviewCard
              reviewText="Nikola Tesla"
              username="Projekt edukacyjny"
              userImgUrl={User49Img}
              userurl="//n-t.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={49}>
            <ReviewCard
              reviewText="Stefan Banach"
              username="Projekt edukacyjny"
              userImgUrl={User50Img}
              userurl="//stefan-banach.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={50}>
            <ReviewCard
              reviewText="Niepodległa"
              username="Projekt edukacyjny"
              userImgUrl={User51Img}
              userurl="//niepodleglosc.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={51}>
            <ReviewCard
              reviewText="Western"
              username="Projekt prywatny"
              userImgUrl={User52Img}
              userurl="//dziki-zachod.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={52}>
            <ReviewCard
              reviewText="Aleksander Wielki"
              username="Projekt edukacyjny"
              userImgUrl={User53Img}
              userurl="//aleksander-wielki.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={53}>
            <ReviewCard
              reviewText="Starożytny Rzym"
              username="Projekt edukacyjny"
              userImgUrl={User54Img}
              userurl="//rzym.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={54}>
            <ReviewCard
              reviewText="Barok w literaturze"
              username="Projekt edukacyjny"
              userImgUrl={User55Img}
              userurl="//barok.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={55}>
            <ReviewCard
              reviewText="Renesans w literaturze"
              username="Projekt edukacyjny"
              userImgUrl={User56Img}
              userurl="//jan-kochanowski.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={56}>
            <ReviewCard
              reviewText="Oświecenie w literaturze"
              username="Projekt edukacyjny"
              userImgUrl={User57Img}
              userurl="//oswiecenie.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={57}>
            <ReviewCard
              reviewText="Romantyzm w literaturze"
              username="Projekt edukacyjny"
              userImgUrl={User58Img}
              userurl="//romantyzm.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={58}>
            <ReviewCard
              reviewText="Pozytywizm w literaturze"
              username="Projekt edukacyjny"
              userImgUrl={User59Img}
              userurl="//pozytywizm.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={59}>
            <ReviewCard
              reviewText="Młoda Polska w literaturze"
              username="Projekt edukacyjny"
              userImgUrl={User60Img}
              userurl="//mloda-polska.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={60}>
            <ReviewCard
              reviewText="Międzywojnie w literaturze"
              username="Projekt edukacyjny"
              userImgUrl={User61Img}
              userurl="//miedzywojnie.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={61}>
            <ReviewCard
              reviewText="Literatura okupacyjna"
              username="Projekt edukacyjny"
              userImgUrl={User62Img}
              userurl="//okupacja.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={62}>
            <ReviewCard
              reviewText="Wieś renesansowa"
              username="Projekt edukacyjny"
              userImgUrl={User63Img}
              userurl="//kmiecie.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={63}>
            <ReviewCard
              reviewText="Pańszczyzna"
              username="Projekt edukacyjny"
              userImgUrl={User64Img}
              userurl="//panszczyzna.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={64}>
            <ReviewCard
              reviewText="Anne Frank"
              username="Projekt edukacyjny"
              userImgUrl={User65Img}
              userurl="//anne-frank.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={65}>
            <ReviewCard
              reviewText="Złoto"
              username="Projekt edukacyjny"
              userImgUrl={User66Img}
              userurl="//zloto.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={66}>
            <ReviewCard
              reviewText="Maciej Glogier"
              username="Projekt edukacyjny"
              userImgUrl={User67Img}
              userurl="//glogier.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={67}>
            <ReviewCard
              reviewText="Dalajlama XIV"
              username="Projekt edukacyjny"
              userImgUrl={User68Img}
              userurl="//dalajlama.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={68}>
            <ReviewCard
              reviewText="Potop"
              username="Projekt edukacyjny"
              userImgUrl={User69Img}
              userurl="//potop.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={69}>
            <ReviewCard
              reviewText="Roger Penrose"
              username="Projekt edukacyjny"
              userImgUrl={User70Img}
              userurl="//roger-penrose.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={70}>
            <ReviewCard
              reviewText="Arka Przymierza"
              username="Projekt edukacyjny"
              userImgUrl={User71Img}
              userurl="//arka-przymierza.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={71}>
            <ReviewCard
              reviewText="Fryderyk Chopin"
              username="Projekt edukacyjny"
              userImgUrl={User72Img}
              userurl="//fryderyk-chopin.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={72}>
            <ReviewCard
              reviewText="Klub Pickwicka"
              username="Projekt edukacyjny"
              userImgUrl={User73Img}
              userurl="//pickwick.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={73}>
            <ReviewCard
              reviewText="Yehudi Menuhin"
              username="Projekt edukacyjny"
              userImgUrl={User74Img}
              userurl="//menuhin.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={74}>
            <ReviewCard
              reviewText="Jan Kowalewski"
              username="Projekt edukacyjny"
              userImgUrl={User75Img}
              userurl="//kowalewski.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={75}>
            <ReviewCard
              reviewText="Julia Zdanowska"
              username="Protest antywojenny"
              userImgUrl={User76Img}
              userurl="//zdanowska.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={76}>
            <ReviewCard
              reviewText="Wołodymyr Zełeński"
              username="Nowożytny Leonidas - szkic"
              userImgUrl={User77Img}
              userurl="//zelenski.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={77}>
            <ReviewCard
              reviewText="Zbrodnie Putina"
              username="Protest antywojenny"
              userImgUrl={User78Img}
              userurl="//zbrodnie-putina.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={78}>
            <ReviewCard
              reviewText="Ofiary Putina"
              username="Protest antywojenny"
              userImgUrl={User79Img}
              userurl="//ofiary-putina.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={79}>
            <ReviewCard
              reviewText="Stop Putin!"
              username="Protest antywojenny"
              userImgUrl={User80Img}
              userurl="//stop-putin.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={80}>
            <ReviewCard
              reviewText="Odkrycie Mateusza"
              username="Projekt prywatny"
              userImgUrl={User81Img}
              userurl="//krzyz-celtycki.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={81}>
            <ReviewCard
              reviewText="Skrzypek na dachu"
              username="Projekt prywatny"
              userImgUrl={User82Img}
              userurl="//skrzypek-na-dachu.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={82}>
            <ReviewCard
              reviewText="Król Edyp"
              username="Projekt edukacyjny"
              userImgUrl={User83Img}
              userurl="//edyp.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={83}>
            <ReviewCard
              reviewText="Konstytucja 3 Maja"
              username="Projekt edukacyjny"
              userImgUrl={User84Img}
              userurl="//vivat-maj.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={84}>
            <ReviewCard
              reviewText="Teofil Lenartowicz"
              username="Projekt edukacyjny"
              userImgUrl={User85Img}
              userurl="//mazurzyn.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={85}>
            <ReviewCard
              reviewText="Jerzy Trela"
              username="Projekt edukacyjny"
              userImgUrl={User86Img}
              userurl="//jerzy-trela.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={86}>
            <ReviewCard
              reviewText="Zespół Aspergera"
              username="Projekt edukacyjny"
              userImgUrl={User87Img}
              userurl="//asperger.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={87}>
            <ReviewCard
              reviewText="Męczennice elżbietańskie"
              username="Projekt edukacyjny"
              userImgUrl={User88Img}
              userurl="//elzbietanki.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={88}>
            <ReviewCard
              reviewText="Nataniel"
              username="Projekt prywatny"
              userImgUrl={User89Img}
              userurl="//nataniel.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={89}>
            <ReviewCard
              reviewText="Moja aktywność"
              username="Projekt edukacyjny"
              userImgUrl={User90Img}
              userurl="//aktywny.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={90}>
            <ReviewCard
              reviewText="Michio Kaku"
              username="Projekt edukacyjny"
              userImgUrl={User91Img}
              userurl="//michio-kaku.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={91}>
            <ReviewCard
              reviewText="Wołyń 1943-1945"
              username="Projekt edukacyjny"
              userImgUrl={User92Img}
              userurl="//wolyn.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={92}>
            <ReviewCard
              reviewText="Tomasz Stańko"
              username="Projekt edukacyjny"
              userImgUrl={User93Img}
              userurl="//tomasz-stanko.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={93}>
            <ReviewCard
              reviewText="Zbigniew Herbert"
              username="Projekt edukacyjny"
              userImgUrl={User94Img}
              userurl="//zbigniew-herbert.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={94}>
            <ReviewCard
              reviewText="Alan Turing"
              username="Projekt edukacyjny"
              userImgUrl={User95Img}
              userurl="//alan-mathison-turing.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={95}>
            <ReviewCard
              reviewText="Bóg Ojciec"
              username="Projekt edukacyjny"
              userImgUrl={User96Img}
              userurl="//bog-ojciec.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={96}>
            <ReviewCard
              reviewText="Jennifer Fulwiler"
              username="Projekt edukacyjny"
              userImgUrl={User97Img}
              userurl="//jennifer-fulwiler.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={97}>
            <ReviewCard
              reviewText="Królowa Elżbieta II"
              username="Projekt edukacyjny"
              userImgUrl={User98Img}
              userurl="//elzbieta.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={98}>
            <ReviewCard
              reviewText="Mieczysław Kosz"
              username="Projekt edukacyjny"
              userImgUrl={User99Img}
              userurl="//kosz.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={99}>
            <ReviewCard
              reviewText="William James Sidis"
              username="Projekt edukacyjny"
              userImgUrl={User100Img}
              userurl="//sidis.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={100}>
            <ReviewCard
              reviewText="Rodzina, ach rodzina"
              username="Projekt prywatny"
              userImgUrl={User101Img}
              userurl="//rodzinnie.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={101}>
            <ReviewCard
              reviewText="Bogumił Kobiela"
              username="Projekt prywatny"
              userImgUrl={User102Img}
              userurl="//kobiela.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={102}>
            <ReviewCard
              reviewText="Elementarz Falskiego"
              username="Projekt prywatny"
              userImgUrl={User103Img}
              userurl="//falski.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={103}>
            <ReviewCard
              reviewText="Korepetycje z matematyki"
              username="RAF-EDU"
              userImgUrl={User104Img}
              userurl="//korepetycje.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={104}>
            <ReviewCard
              reviewText="Ania"
              username="Projekt prywatny"
              userImgUrl={User105Img}
              userurl="//ania-z.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={105}>
            <ReviewCard
              reviewText="Habitat Nataniela"
              username="Projekt prywatny"
              userImgUrl={User106Img}
              userurl="//habitat-nat.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={106}>
            <ReviewCard
              reviewText="Blog o Natanielku"
              username="Projekt prywatny"
              userImgUrl={User107Img}
              userurl="//nataniel.onrender.com"
            />
          </StyledSlide>
          <StyledSlide index={107}>
            <ReviewCard
              reviewText="Fundacja 'wARTości'"
              username="Projekt publiczny"
              userImgUrl={User108Img}
              userurl="//fundacja.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={108}>
            <ReviewCard
              reviewText="Marek Niedźwiecki"
              username="Projekt publiczny"
              userImgUrl={User109Img}
              userurl="//marek-niedzwiecki.netlify.app/"
            />
          </StyledSlide>
          <StyledSlide index={109}>
            <ReviewCard
              reviewText="Natek"
              username="Projekt prywatny"
              userImgUrl={User110Img}
              userurl="//natek.netlify.app/"
            />
          </StyledSlide>
          <StyledSlide index={110}>
            <ReviewCard
              reviewText="Natko"
              username="Projekt prywatny"
              userImgUrl={User111Img}
              userurl="//natko.netlify.app/"
            />
          </StyledSlide>
          <StyledSlide index={111}>
            <ReviewCard
              reviewText="Wacław Dobrowolski"
              username="Projekt edukacyjny"
              userImgUrl={User112Img}
              userurl="//dobrowolski.netlify.app/"
            />
          </StyledSlide>
          <StyledSlide index={112}>
            <ReviewCard
              reviewText="Wynajem namiotów"
              username="Firma eventowa"
              userImgUrl={User113Img}
              userurl="//wynajem-namiotow.netlify.app/"
            />
          </StyledSlide>
          <StyledSlide index={113}>
            <ReviewCard
              reviewText="Antologia Proroków"
              username="Projekt edukacyjny"
              userImgUrl={User114Img}
              userurl="//antologia-prorokow.netlify.app/"
            />
          </StyledSlide>
          <StyledSlide index={114}>
            <ReviewCard
              reviewText="Rodzina Jacka"
              username="Projekt prywatny"
              userImgUrl={User115Img}
              userurl="//jacek.netlify.app/"
            />
          </StyledSlide>
          <StyledSlide index={115}>
            <ReviewCard
              reviewText="Aqua fitness 55+"
              username="Projekt prywatny"
              userImgUrl={User116Img}
              userurl="//aquafitness.netlify.app/"
            />
          </StyledSlide>
          <StyledSlide index={116}>
            <ReviewCard
              reviewText="Paweł Mosiołek"
              username="Projekt oficjalny"
              userImgUrl={User117Img}
              userurl="//pawelmosiolek.netlify.app/"
            />
          </StyledSlide>
          <StyledSlide index={117}>
            <ReviewCard
              reviewText="Grupa studencka 'EuroTrek'"
              username="Projekt oficjalny"
              userImgUrl={User118Img}
              userurl="//eurotrek.netlify.app/"
            />
          </StyledSlide>
          <StyledSlide index={118}>
            <ReviewCard
              reviewText="Teoria dr Nikodema Popławskiego"
              username="Projekt prywatny"
              userImgUrl={User119Img}
              userurl="//blackhole-universe.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={119}>
            <ReviewCard
              reviewText="Pralnia Super Pucuś"
              username="Projekt firmowy"
              userImgUrl={User120Img}
              userurl="//pranie-dywanow.j.pl"
            />
          </StyledSlide>
          <StyledSlide index={120}>
            <ReviewCard
              reviewText="Rody Gierczak i Ofiara"
              username="Projekt prywatny"
              userImgUrl={User121Img}
              userurl="//rodowekorzenie.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={121}>
            <ReviewCard
              reviewText="Zbigniew Rutkowski"
              username="Projekt publiczny"
              userImgUrl={User122Img}
              userurl="//zbigniew-rutkowski.netlify.app"
            />
          </StyledSlide>
          <StyledSlide index={122}>
            <ReviewCard
              reviewText="Zbuduj stronę w Replit"
              username="Projekt publiczny"
              userImgUrl={User123Img}
              userurl="//zbuduj-strone.netlify.app/"
            />
          </StyledSlide>
          <StyledSlide index={123}>
            <ReviewCard
              reviewText="Kwantowy Portal"
              username="Projekt publiczny"
              userImgUrl={User124Img}
              userurl="//kwanty.netlify.app/"
            />
          </StyledSlide>
          <StyledSlide index={124}>
            <ReviewCard
              reviewText="Interaktywana Akademia"
              username="Projekt edukacyjny"
              userImgUrl={User125Img}
              userurl="//inter-akademia.netlify.app/"
            />
          </StyledSlide>
          <StyledSlide index={125}>
            <ReviewCard
              reviewText="Michael Thonet"
              username="Projekt edukacyjny"
              userImgUrl={User126Img}
              userurl="//wizjoner.netlify.app/"
            />
          </StyledSlide>
          <StyledSlide index={126}>
            <ReviewCard
              reviewText="Wiersze Antypowabne"
              username="Projekt prywatny"
              userImgUrl={User127Img}
              userurl="//antypowabne.netlify.app/"
            />
          </StyledSlide>
          <StyledSlide index={127}>
            <ReviewCard
              reviewText="prof. Maciej Dunajski"
              username="Projekt edukacyjny"
              userImgUrl={User128Img}
              userurl="//dunajski.netlify.app/"
            />
          </StyledSlide>
          <StyledSlide index={128}>
            <ReviewCard
              reviewText="Stephen Hawking"
              username="Projekt edukacyjny"
              userImgUrl={User129Img}
              userurl="//odysejahawkinga.netlify.app/"
            />
          </StyledSlide>
          <StyledSlide index={129}>
            <ReviewCard
              reviewText="Aqua Senior"
              username="Projekt edukacyjny"
              userImgUrl={User130Img}
              userurl="//aqua-plus.netlify.app/"
            />
          </StyledSlide>
          <StyledSlide index={130}>
            <ReviewCard
              reviewText="Konstelacja Pasji"
              username="Projekt autobiograficzny"
              userImgUrl={User131Img}
              userurl="//konstelacjapasji.netlify.app/"
            />
          </StyledSlide>
          <StyledSlide index={131}>
            <ReviewCard
              reviewText="Niedzielne Światło"
              username="Lekcjonarz mszalny"
              userImgUrl={User132Img}
              userurl="//ewangelie.netlify.app/"
            />
          </StyledSlide>
          <StyledSlide index={132}>
            <ReviewCard
              reviewText="Święci Kościoła"
              username="Święci Kościoła Katolickiego"
              userImgUrl={User134Img}
              userurl="//lux-sanctorum.netlify.app/"
            />
          </StyledSlide>
          <StyledSlide index={133}>
            <ReviewCard
              reviewText="Math Mentor"
              username="Korepetycje z matematyki"
              userImgUrl={User133Img}
              userurl="//mathmentor-app.onrender.com/"
            />
          </StyledSlide>
          <StyledSlide index={134}>
            <ReviewCard
              reviewText="Kuchnia Polska"
              username="Sekrety Kuchni Polskiej"
              userImgUrl={User135Img}
              userurl="//kuchniapolska.netlify.app/"
            />
          </StyledSlide>
        </Slider>
        <SlidingDotGroup totalSlides={135} />
      </StyledCarouselProvider>
    </ReviewsContainer>
  );
}
