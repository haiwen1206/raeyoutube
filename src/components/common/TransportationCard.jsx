import React from "react";
import styled from "styled-components";
import { BREAKPOINTS } from "../../util";

// main
const Transportation = (props) => {
  const {
    //id, 
    tag, title, content, image, url } = props;
  //const id = `case_${id}`;
  return (
    <StyledTransportationCard>
      <StyledTransportationLink
        href={url}
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.6)),url(${image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",

        }}
      >
        <StyledTransportationTag>{tag}</StyledTransportationTag>
        <StyledTransportationTitle>{title}</StyledTransportationTitle>
        <StyledTransportationContent>{content}</StyledTransportationContent>
      </StyledTransportationLink>
    </StyledTransportationCard>
  );
};

// style
const StyledTransportationCard = styled.div`
  width: 33.333%;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  @media screen and (max-width: ${BREAKPOINTS.md}px) {
    width: auto;
  }
`;
const StyledTransportationLink = styled.a`
  display: block;
  height: 420px;
  padding: 28px;
  margin-bottom: 40px;
  border-radius: 8px;
`;
const StyledTransportationTag = styled.p`
  font-weight: 600;
  color: #fff;
  font-size: 15px;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  line-height: 28px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
`;
const StyledTransportationTitle = styled.h3`
  font-size: 28px;
  color: #fff;
`;
const StyledTransportationContent = styled.p`
  font-weight: 300;
  color: #fff;
  font-size: 15px;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  line-height: 28px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
`;

export default Transportation;
