import React from "react";
import styled from "styled-components";

import FooterSection from "./FooterSection";
import CopyRightSection from "./CopyRightSection";

// main
const Footer = () => {
  return (
    <StyledFooter>
      <FooterSection />
      <CopyRightSection />
    </StyledFooter>
  );
};

// style
const StyledFooter = styled.footer`
  width: 100%;
  background: #232323;
  color: #fff;
  padding: 40px 0 20px;
`;

export default Footer;
