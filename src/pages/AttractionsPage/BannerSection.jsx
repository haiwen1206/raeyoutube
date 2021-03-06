import React from "react";
import styled from "styled-components";

import Container from "../../components/layout/Container";
import MainContent from "../../components/layout/MainContent";
import SubContent from "../../components/layout/SubContent";
import Image from "../../components/common/Image";
import BannerImg from "../../images/petra.jpg";

// main
const BannerSection = () => {
  return (
    <StyledBannerSection>
      <Container>
        <MainContent>
          <StyledTitle>{title}</StyledTitle>
        </MainContent>

      </Container>
    </StyledBannerSection>
  );
};

// data
const title = "Jordan-Petra";
const image = {
  link: `${BannerImg}`,
  name: "banner-img"
};
// style
const StyledTitle = styled.h1`
  font-size: 2.5em;
`;
const StyledBannerSection = styled.section`
  width: 100%;
  height: auto;
  padding-top: 130px;
  padding-bottom: 120px;
  background: red;
  background-image: url(${BannerImg});
  background-repeat:no-repeat;
  background-position:center;
  background-attachment:fixed;
  background-size: cover;
  color: #fff;
  display: flex;
  flex-flow: row wrap;
`;
const StyledBannerImage = styled(Image)`
  width: 100%;
  max-width: fit-content;
  height: auto;
  margin: 0 auto;
`;

export default BannerSection;
