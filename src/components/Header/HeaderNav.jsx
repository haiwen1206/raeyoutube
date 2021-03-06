import React, { useRef } from "react";
import styled from "styled-components";
import { BREAKPOINTS } from "../../util";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  @media screen and (max-width: ${BREAKPOINTS.lg}px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const StyledNavLink = styled.div`
  font-family: -apple-system, "Segoe UI";
  font-size: 16px;
  color: #1c274a;
  line-height: 25.6px;
  margin-right: 20px;
`;
// const StyledNavItem = styled.div`
//   margin-right: 20px;
// `;
const StyledButton = styled.a`
  background: red;
  border-radius: 6px;
  display: block;
  color: #fff;
  font-weight: 500;
  padding: 7px 20px;
  white-space: nowrap;
`;
const HeaderNav = (props) => {
  const { navItems, navBtn } = props;

  return (
    <>
      <StyledNav>
        {navItems.map((navItem, index) => {
          return (
            <StyledNavLink onClick={() => window.scrollTo({ behavior: 'smooth', top: navItem.scroll })} key={"navItem_" + index}>
              <Link to={navItem.link} > {navItem.name}</Link>
            </StyledNavLink>
          );
        })}
      </StyledNav>
      <StyledButton href={navBtn.link}>{navBtn.name}</StyledButton>
    </>
  );
};

export default HeaderNav;
// .header__nav__item {
//   margin-right: 20px;
// }
// .header__btn {
//   background: #faac2c;
//   border-radius: 6px;
//   display: block;
//   color: #fff;
//   font-weight: 500;
//   padding: 7px 20px;
//   white-space: nowrap;
// }
