import React from "react";
import styled from "styled-components";

import Container from "../../components/layout/Container";
import MainContent from "../../components/layout/MainContent";
import SubContent from "../../components/layout/SubContent";
import Card from "../../components/common/Card";
import FoodIcon from "../../images/Food.webp";

// main
const FoodSection = () => {
  return (
    <StyledFoodSection>
      <Container>
        <MainContent>
          <Card {...foodItems} />
        </MainContent>
        <SubContent>
          <div className="food__content">
            <StyledTitle>{foodData.title}</StyledTitle>
            {foodData.contents.map((content, index) => {
              return (
                <StyledContent key={"food_content_" + index}>
                  {content}
                </StyledContent>
              );
            })}
          </div>
        </SubContent>
      </Container>
    </StyledFoodSection>
  );
};

// data
const foodData = {
  title: "Plan what to eat",
  contents: [
    `Our table at Hashem in downtown Amman was laden with simple and delicious mezze.`,
    `We ripped off hunks of khubz, the ubiquitous flatbread, to dip into hummus and ful mudammas, a Middle Eastern dish of stewed fava beans.`,
    `We tucked into stuffed falafel, its fluffy centre wrapped in a crispy, sesame-crusted shell.`
  ]
};

const foodItems = {
  title: "Food",
  items: [
    {
      icon: `${FoodIcon}`,
      title: "Food1",
      content: "Food1 description",
      link: "#"
    },
    {
      icon: `${FoodIcon}`,
      title: "Food2",
      content: "Food2 description",
      link: "#"
    },
    {
      icon: `${FoodIcon}`,
      title: "Food3",
      content: "Food3 description",
      link: "#"
    }
  ]
};

// style

const StyledFoodSection = styled.section`
  padding-top: 60px;
  padding-bottom: 120px;
`;

const StyledTitle = styled.h3`
  font-size: 28px;
  font-weight: 600;
`;

const StyledContent = styled.p`
  color: #263043;
  font-size: 15px;
  line-height: 28px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  margin-bottom: 1rem;
`;

export default FoodSection;
