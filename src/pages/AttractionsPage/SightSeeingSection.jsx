import React from "react";
import styled from "styled-components";
import Image from "../../components/common/Image";

import Container from "../../components/layout/Container";
import SightSeeingCard from "../../components/common/SightSeeingCard";
import SightIcon from "../../images/sight.png";


// main
const SightSeeingSection = () => {
  return (
    <StyledSightSeeingSection>
      <Container>
        <StyledContent>
          <StyledTitle>
            Just outside the city awaits a huge array of things to discover
          </StyledTitle>
          <StyledSightSeeingIcons>
            <SightSeeingCard {...sightseeingItem} />
          </StyledSightSeeingIcons>
        </StyledContent>
      </Container>
    </StyledSightSeeingSection>
  );
};

// data
const sightseeingItem = {
  items: [
    {
      icon: `${SightIcon}`,
      title: "Sight1",
      content: "Sight1 description",
      link: "#"
    },
    {
      icon: `${SightIcon}`,
      title: "Sight2",
      content:
        "Sight2 description",
      link: "#"
    },
    {
      icon: `${SightIcon}`,
      title: "Sight3",
      content: "Sight3 description",
      link: "#"
    },
    {
      icon: `${SightIcon}`,
      title: "Sight4",
      content:
        "Sight4 description",
      link: "#"
    },

  ]
};


// style
const StyledSightSeeingSection = styled.section`
  background: #f3f3f3;
  padding: 120px 0;
`;
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width:100%;
`;
const StyledTitle = styled.h4`
  font-size: 23px;
  font-weight: 800;
  padding-bottom: 80px;
  display: inline-block;
  margin:0 auto;
`;

const StyledSightSeeingIcons = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;
const StyledSightSeeingIcon = styled.div`
  width: 250px;
  height: 100px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImg = styled(Image)`
  height: 80px;
  padding: 20px 0;
`;

export default SightSeeingSection;
