import styled from "styled-components";
import { BREAKPOINTS } from "../../util";

const Container = styled.div`
  width: 80%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: ${BREAKPOINTS.md}px) {
    flex-direction: column;
  }
`;
// const Container = (props) => {
//   const { otherClass } = props;
//   if (otherClass) {
//     const className = `${otherClass} container`;
//     return <div className={className}>{props.children}</div>;
//   } else {
//     return <div className="container">{props.children}</div>;
//   }
// };

export default Container;
