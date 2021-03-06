import React from "react";
import styled from "styled-components";

import Container from "../../components/layout/Container";
import TransportationCard from "../../components/common/TransportationCard";
import { ReactComponent as Arrow } from "../../images/arrow.svg";
import { BREAKPOINTS } from "../../util";
import Airplane from "../../images/airplane.jpg";
import Train from "../../images/train.jpg";
import Bus from "../../images/bus.jpeg";

// main
const TransportationSection = () => {
  return (
    <StyledTransportationSection>
      <Container>
        <StyledTransportationContent>
          <StyledTransportationItems>
            {transportations.map((Transportation) => {
              //const { id, tag, title, content, image, url } =Transportation;
              return (
                <TransportationCard
                  key={Transportation.id}
                  {...Transportation}
                ></TransportationCard>
              );
            })}
          </StyledTransportationItems>
          <StyledTransportationLink href="#">
            Explore more of your transportation
            <span
              style={{
                width: "38px",
                height: "18px",
                display: "inline-block",
                verticalAlign: "middle",
                paddingBottom: "5px"
              }}
            >
              <Arrow fill="blue" />
            </span>
          </StyledTransportationLink>
        </StyledTransportationContent>
      </Container>
    </StyledTransportationSection>
  );
};

// data
const transportations = [
  {
    id: "airplane",
    tag: "Transportation",
    title: "Airplane",
    content: `Petra Airlines was an airline based in Amman, Jordan. The company was founded in 2005 as a subsidiary of RUM Group.`,
    image: `${Airplane}`,
    url: "#"
  },
  {
    id: "train",
    tag: "Transportation",
    title: "Train",
    content: `Village Train welcomes you on Lesvos island! Our train is ready to guide you at the best places and highlights of Molyvos and Petra villages.`,
    image: `${Train}`,
    url: "#"
  },
  {
    id: "bus",
    tag: "Transportation",
    title: "Bus",
    content: `Buses from Amman to Petra, what are your options from local Bus to taxi like service or hiring a car with a driver Desert High way.`,
    image: `${Bus}`,
    url: "#"
  }
];

// style
const StyledTransportationSection = styled.section`
  display: flex;
`;
const StyledTransportationContent = styled.div`
  display: flex;
  flex-flow: column;
  padding: 50px 0px 120px;
`;
const StyledTransportationItems = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  @media screen and (max-width: ${BREAKPOINTS.md}px) {
    flex-direction: column;
  }
`;
const StyledTransportationLink = styled.a`
  padding-left: 0.5rem;
  font-size: 21px;
  padding: 50px 0;
  color: #263043;
`;

export default TransportationSection;
