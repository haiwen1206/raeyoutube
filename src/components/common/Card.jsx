import React from "react";
import styled from "styled-components";

import CardItem from "./CardItem";

const StyledCard = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.05);
`;
const StyledCardTitle = styled.h5`
  font-size: 20px;
  font-weight: 400;
  color: #232323;
  margin-bottom: 0.5rem;
`;

const Card = (props) => {
  const { title, items } = props;

  return (
    <StyledCard>
      <StyledCardTitle>{title}</StyledCardTitle>
      <ul>
        {items.map((item, index) => {
          return <CardItem key={index} {...item} />;
        })}
      </ul>
    </StyledCard>
  );
};

export default Card;
