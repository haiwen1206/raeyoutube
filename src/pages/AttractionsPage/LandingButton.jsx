import React from "react";
import styled from "styled-components";

import { ReactComponent as Arrow } from "../../images/arrow.svg";

// styled
const StyledLandingBtn = styled.a`
  background: #fff;
  padding: 0 30px 0 0;
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.4);
  position: absolute;
  top: -15%;
  z-index: 5;
  width: 100%;
  color: #263043;
  border-radius: 8px;
  max-width: 550px;
  left: 50%;
  display: flex;
  align-items: center;
  transform: translate(-50%, 50%);
`;

const StyledLandingBtnText = styled.p`
  min-height: 38px;
  padding: 20px 15px;
  line-height: 21px;
  display: inline-block;
  margin-bottom: 0;
  font-size: 15px;
  max-width: 480px;
`;

const StyledLandingBtnSpan = styled.span`
  width: 38px;
  height: 18px;
  display: inline-block;
  vertical-align: middle;
`;

const LandingBtn = () => {
  return (
    <StyledLandingBtn href="https://www.oursky.com/product-development">
      <StyledLandingBtnText>
        Learn more about how we digitally transform businesses by creating
        amazing digital products.
      </StyledLandingBtnText>
      <StyledLandingBtnSpan>
        <Arrow fill="blue" />
      </StyledLandingBtnSpan>
    </StyledLandingBtn>
  );
};

export default LandingBtn;
