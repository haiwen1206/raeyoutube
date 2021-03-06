import React from "react";
import styled from "styled-components";

import Container from "../layout/Container";
//import Container from "./components/Container";
import Logo from "../../images/Logo";
import Nav from "./HeaderNav";
import { BREAKPOINTS } from "../../util";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// data
const headerNavItems = [
  { id: "item1", link: "/AttractionsPage", type: "header__nav__item", name: "Intro", scroll: 400 },
  {
    id: "item2",
    link: "/AttractionsPage",
    type: "header__nav__item",
    name: "Transport", scroll: 850
  },
  { id: "item3", link: "/AttractionsPage", type: "header__nav__item", name: "Hotel", scroll: 1550 },
  { id: "item4", link: "/AttractionsPage", type: "header__nav__item", name: "Food", scroll: 2000 }
];
const headerBtn = {
  id: "btn",
  link: "#",
  type: "header__btn",
  name: "Start your plan"
};
// styled
const ResponsiveBar = styled.div``;
const StyledContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
const StyledHeaderLogo = styled.div`
  max-width: 850px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: ${BREAKPOINTS.lg}px) {
    width: 100%;
  }
`;
const StyledHeaderLogoDiv = styled.div`
  width: 300px;
  height: 50px;
`;
const StyledMenu = styled.div`
  display: flex;
  width: 100%;
  @media screen and (max-width: ${BREAKPOINTS.lg}px) {
    display: none;
    flex-direction: column;
    justify-items: center;
    width: 70vw;
    padding: 15px 5px;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 15px;
    /*     z-index:3; */
    position: absolute;
    top: 0;
  }
`;
const StyledHeader = styled.header`
  height: 73px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0px;
  z-index: 20;
`;
const StyledResponsiveIcon = styled.i`
  border-radius: 20%;
  width: 40px;
  height: 40px;
  font-size: 25px;
  display: none;
  color: #000;
  cursor: pointer;
  @media screen and (max-width: ${BREAKPOINTS.lg}px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

// main
const Header = ({ click }) => {

  return (
    <StyledHeader>
      <ResponsiveBar />
      <Container>
        <StyledContent>
          <StyledHeaderLogo>
            <StyledHeaderLogoDiv>
              <Link to="/"><Logo /></Link>
            </StyledHeaderLogoDiv>
            <StyledResponsiveIcon className="fas fa-bars" />
          </StyledHeaderLogo>
          <StyledMenu>
            <Nav navItems={headerNavItems} navBtn={headerBtn} click={click} />
          </StyledMenu>
        </StyledContent>
      </Container>
    </StyledHeader>
  );
};

export default Header;
