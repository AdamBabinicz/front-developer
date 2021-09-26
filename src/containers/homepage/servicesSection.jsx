import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { SectionTitle } from "../../components/sectionTitle";
import { Marginer } from "../../components/navbar/marginer";
import { OurService } from "../../components/ourService";
import Service1Img from "../../assets/illustrations/seob.png";
import Service2Img from "../../assets/illustrations/mb.png";
import Service3Img from "../../assets/illustrations/tvb.png";

const ServicesContainer = styled(Element)`
  width: 100%;
  /* min-height: 1400px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  text-align: center;
`;

export function ServicesSection(props) {
  return (
    <ServicesContainer name="servicesSection">
      <SectionTitle>Nasza aktywność</SectionTitle>
      <Marginer direction="vertical" margin="3em" />
      <OurService
        title="W pełni zintegrowane usługi (SEM, SEO)"
        description="Współczesne kampanie marketingowe wykorzystują działania promocyjne w internecie, które służą zdobyciu jak najwyższych pozycji wyświetlania w wyszukiwarkach i przekładają się na zwiększenie liczby odwiedzin strony i skorzystania z oferty przez Klienta."
        imgUrl={Service1Img}
      />
      <OurService
        title="Optymalizacja responsywna"
        description="Od marca 2021 r. jedynie strony przystosowane do urządzeń mobilnych mają szanse na indeksację przez Google. Tylko to, co się znajduje w mobilnej wersji witryny, będzie wykorzystywane do indeksowania oraz klasyfikowania w wyszukiwarce. Dlatego Twoja strona powinna również dobrze wyświetlać się na takich urządzeniach jak smartfon lub tablet."
        imgUrl={Service2Img}
        isReversed
      />
      <OurService
        title="Postaw na nowoczesny design"
        description="
Niekonwencjonalna, dobrze zaprojektowana i funkcjonalna strona internetowa, to prawdziwe dzieło sztuki, będące owocem wytężonej pracy wielu specjalistów. Mając taką stronę zapewnisz sobie zwiększenie zysków i umocnienie pozycji na rynku."
        imgUrl={Service3Img}
      />
    </ServicesContainer>
  );
}
