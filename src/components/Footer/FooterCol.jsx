import React from "react";
import styled from "styled-components";
import { BREAKPOINTS } from "../../util";

// main
const FooterCol = (props) => {
  const { className } = props;
  return (
    <StyledFooterCol className={className}>{props.children}</StyledFooterCol>
  );
};

// style
const StyledFooterCol = styled.div`
  width: 15.6667%;
  margin-right: 5px;
  @media screen and (max-width: ${BREAKPOINTS.md}px) {
    width: 60%;
    margin-top: 0.5em;
  }
`;

export default FooterCol;
