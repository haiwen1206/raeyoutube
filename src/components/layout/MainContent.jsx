import React from "react";
import styled from "styled-components";
import { BREAKPOINTS } from "../../util";

const StyledMainContent = styled.div`
  width: 50%;
  display: inline-block;
  padding: 10px 10px;
  margin-right: 2em;
  @media screen and (max-width: ${BREAKPOINTS.md}px) {
    width: 100%;
    margin-bottom: 1.5em;
  }
`;

const MainContent = (props) => {
  //const { otherClass } = props;
  return <StyledMainContent>{props.children}</StyledMainContent>;
};

export default MainContent;
