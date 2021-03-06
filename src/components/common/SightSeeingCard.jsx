import React from "react";
import styled from "styled-components";

import CardItem from "./SightCardItem";

const StyledCard = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.05);
`;

const StyledUl = styled.ul`
  display: flex;
  width:100%; 
`;

const SightSeeingCard = (props) => {
  const { items } = props;

  return (
    <StyledCard>
      <StyledUl>
        {items.map((item, index) => {
          return <CardItem key={index} {...item} />;
        })}
      </StyledUl>
    </StyledCard>
  );
};

export default SightSeeingCard;
