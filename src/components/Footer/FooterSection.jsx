import React from "react";
import styled from "styled-components";

import Container from "../../components/layout/Container";
import FooterCol from "./FooterCol";
import FooterList from "./FooterList";
import Logo from "../../images/Logo";
import { BREAKPOINTS } from "../../util";

// main
const FooterSection = () => {
  return (
    <section className="footer">
      <Container>
        <StyledFooterContent>
          <FooterCol>
            <StyledLogo />
          </FooterCol>
          <FooterCol />
          {footerListsData.map((footerList, index) => {
            return (
              <FooterCol key={index}>
                <FooterList {...footerList} />
              </FooterCol>
            );
          })}
        </StyledFooterContent>
      </Container>
    </section>
  );
};

// data
const footerListsData = [
  {
    title: "Spots",
    items: ["Asia", "Europe", "America", "Australia", "Africa", "Oceania"]
  },
  {
    title: "Plan",
    items: [
      "Transportation",
      "Hotel",
      "Food",
      "Shopping",
      "Weather",
      "Notice"
    ]
  },
  {
    title: "More",
    items: [
      "About Us",
    ]
  },
  {
    title: "Connect",
    items: [
      "Facebook",
      "Twitter",
      "Find Us",
      "Join Us"
    ]
  }
];

//style
const StyledFooterContent = styled.section`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  @media screen and (max-width: ${BREAKPOINTS.md}px) {
    flex-flow: column wrap;
  }
`;
const StyledLogo = styled(Logo)`
  fill: #fff;
`;

export default FooterSection;
