import React from "react";
import styled from "styled-components";
import { BREAKPOINTS } from "../../util";

import Container from "../../components/layout/Container";
import MainContent from "../../components/layout/MainContent";
import SubContent from "../../components/layout/SubContent";
import PetraSmall from "../../images/petraSmall.png";
import LandingBtn from "./LandingButton";

// main
const SectionIntro = () => {
  return (
    <StyledIntroSection>
      <Container>
        <MainContent>
          <p>{introData.title}</p>
          <h4>{introData.content}</h4>
        </MainContent>
        <SubContent>
          <StyledImg src={PetraSmall} name="intro-img" />
        </SubContent>
      </Container>
    </StyledIntroSection>
  );
};

// data
const introData = {
  title: "Intro",
  content: `The “Rose City” is a honeycomb of hand-hewn caves, temples, and tombs carved from blushing pink sandstone in the high desert of Jordan some 2,000 years ago. Hidden by time and shifting sand, Petra tells of a lost civilization. Little is known about the Nabateans—a nomadic desert people whose kingdom rose up from these cliffs and peaks, and whose incredible wealth grew from the lucrative incense trade.`,
  image: "https://fakeimg.pl/330x330/"
};

// style
const StyledIntroSection = styled.section`
  padding: 180px 0 50px;
  background: #f3f3f3;
  color: #333;
  @media screen and (max-width: ${BREAKPOINTS.md} px) {
    padding: 100px 0 50px;
  }
`;
const StyledImg = styled.img`
  width: 330px;
  height: 330px;
`;

export default SectionIntro;
