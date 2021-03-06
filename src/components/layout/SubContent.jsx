import React from "react";
import styled from "styled-components";
import { BREAKPOINTS } from "../../util";

const StyledSubContent = styled.div`
 
  max-width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: ${BREAKPOINTS.md}px) {
    width: 100%;
  }
`;
const SubContent = (props) => {
  const { className } = props;
  return (
    <StyledSubContent className={className}>{props.children}</StyledSubContent>
  );
};

export default SubContent;
