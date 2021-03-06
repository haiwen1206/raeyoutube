import React from "react";
import styled from "styled-components";

const StyledCardItemLink = styled.a`
  cursor: pointer;
`;
const StyledCardItemLi = styled.li`
  display: flex;
  width: 100%;
  margin: 5px;
  padding: 15px 5px;
  color: #263043;
  &hover {
    background-color: #f8f8f8;
  }
`;
const StyledCardItemIcon = styled.div`
  display: inline-block;
  margin-right: 1em;
`;
const StyledCardItemIconImg = styled.img`
  width: 40px;
`;
const StyledCardItemTitle = styled.p`
  font-size: 13px;
  line-height: 16px;
  margin-bottom: 0.2rem;
  font-weight: 800;
`;
const StyledCardItemContent = styled.p`
  font-size: 13px;
  line-height: 16px;
  margin-bottom: 0.2rem;
`;

const CardItem = (props) => {
  const { icon, title, content, link } = props;
  return (
    <StyledCardItemLink href={link}>
      <StyledCardItemLi>
        <StyledCardItemIcon>
          <StyledCardItemIconImg src={icon} alt={title} />
        </StyledCardItemIcon>
        <div className="card__item__text">
          <StyledCardItemTitle>{title}</StyledCardItemTitle>
          <StyledCardItemContent>{content}</StyledCardItemContent>
        </div>
      </StyledCardItemLi>
    </StyledCardItemLink>
  );
};

export default CardItem;
