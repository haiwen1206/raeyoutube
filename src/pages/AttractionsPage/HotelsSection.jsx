import React from "react";
import styled from "styled-components";

import Container from "../../components/layout/Container";
import MainContent from "../../components/layout/MainContent";
import SubContent from "../../components/layout/SubContent";
import Card from "../../components/common/Card";
import HotelIcon from "../../images/hotel.png";

// main
const HotelsSection = () => {
  return (
    <StyledHotelSection>
      <Container>
        <MainContent>
          <StyledHotelTitle>{hotelsData.title}</StyledHotelTitle>
          {hotelsData.contents.map((content, index) => {
            return (
              <StyledHotelContent key={"hotels__content_" + index}>
                {content}
              </StyledHotelContent>
            );
          })}
          <StyledHotelContent>
            <StyledHotelLink href="#">
              More on you best hotels
            </StyledHotelLink>
          </StyledHotelContent>
        </MainContent>
        <StyledSubContent>
          <Card {...hotelItems} />
        </StyledSubContent>
      </Container>
    </StyledHotelSection>
  );
};

// data
const hotelsData = {
  title: "Plan where to live",
  contents: [
    `Enjoy one of the Seven Wonders of the World, the ancient Nabatean city of Petra carved from the rock over a thousand years ago. `,
    `Embracing traditional hospitality and overlooking Jordan's timeless wonder, the Petra Marriott Hotel offers anticipatory & traditional hotel designed to exceed all expectations.`,
    `The hotel is a haven for comfort and luxury. Almost all the spacious rooms have spectacular views of the valley. `
  ]
};
const hotelItems = {
  title: "Best Hotels",
  items: [
    {
      icon: `${HotelIcon}`,
      title: "hotel1",
      content: "hotel1 description hotel1 description hotel1 description",
      link: "#"
    },
    {
      icon: `${HotelIcon}`,
      title: "hotel2",
      content:
        "hotel2 description",
      link: "#"
    },
    {
      icon: `${HotelIcon}`,
      title: "hotel3",
      content: "hotel3 description",
      link: "#"
    },
    {
      icon: `${HotelIcon}`,
      title: "hotel4",
      content:
        "hotel4 description",
      link: "#"
    }
  ]
};

// style
const StyledHotelSection = styled.section`
  display: flex;
  padding-top: 60px;
  padding-bottom: 120px;
  background-color: #f3f3f3;
  background-size: 200px;
  color: #263043;
`;
const StyledHotelTitle = styled.h3`
  font-size: 28px;
  font-weight: 600;
`;
const StyledHotelContent = styled.p`
  color: #263043;
  font-size: 15px;
  line-height: 28px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  margin-bottom: 1rem;
`;
const StyledHotelLink = styled.a`
  color: #3155a5;
`;
const StyledSubContent = styled(SubContent)`
  padding-right: 0.625rem;
  padding-left: 0.625rem;
`;

export default HotelsSection;
