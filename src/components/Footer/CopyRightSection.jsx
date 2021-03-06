import React from "react";
import styled from "styled-components";

import Container from "../layout/Container";

// main
const CopyRightSection = () => {
  return (
    <StyledCopyRightSection>
      <Container>
        <StyledLink href="mailto:hello@oursky.com">@dreamTravel.com</StyledLink>
        <p className="copyright__sign">© dreamTravel</p>
      </Container>
    </StyledCopyRightSection>
  );
};

// style
const StyledCopyRightSection = styled.section`
  padding-top: 140px;
`;
const StyledLink = styled.a`
  text-decoration: none;
  color: #888;
`;

export default CopyRightSection;
