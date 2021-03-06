import React from "react";
import styled from "styled-components";

const StyledFooterListTitle = styled.p`
  font-size: 15px;
  line-height: 28px;
  margin-bottom: 1rem;
`;

const StyledFooterListItem = styled.li`
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 14px;
`;

const FooterList = (props) => {
  const { title, items } = props;
  return (
    <>
      <StyledFooterListTitle>{title}</StyledFooterListTitle>
      <ul className="footer_list__items">
        {items.map((item, index) => {
          return (
            <StyledFooterListItem key={"footer_list__item_" + index}>
              {item}
            </StyledFooterListItem>
          );
        })}
      </ul>
    </>
  );
};

export default FooterList;

// .footer__logo svg {
//   fill: #fff;
// }
// .footer_list__title {

// }
// .footer_list__item {
//   color: rgba(255, 255, 255, 0.75);
//   margin-bottom: 14px;
// }
