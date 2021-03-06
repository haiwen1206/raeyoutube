import React from "react";
import styled from "styled-components";

import Container from "../../components/layout/Container";
import Button from "../../components/common/Button";

// main
const Plan = () => {
  return (
    <StyledPlanSection>
      <Container>
        <StyledPlanContent>
          <StyledPlanTitle>
            Do you  search for fantasy travel experience?
          </StyledPlanTitle>
          <StyledPlanSubTitle>
            DreamTravel can help you create one.
          </StyledPlanSubTitle>
          <Button href="#">Let's plan!</Button>
        </StyledPlanContent>
      </Container>
    </StyledPlanSection>
  );
};

// style
const StyledPlanSection = styled.section`
  padding: 30px 0;
  color: #fff;
  background: #77C2AF;
`;

const StyledPlanContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledPlanTitle = styled.h2`
  font-weight: 400;
  font-size: 30px;
  line-height: 5rem;
`;

const StyledPlanSubTitle = styled.h4`
  font-weight: 800;
  font-size: 23px;
  margin-bottom: 80px;
`;

export default Plan;
