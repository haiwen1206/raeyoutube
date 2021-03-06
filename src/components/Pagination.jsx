import React from "react";
import styled from "styled-components";

const Pagination = ({ pageConfig, onCatch, currentPage }) => {
    let pages = []
    const handleClick = (i) => {
        onCatch && onCatch(i);
    }
    for (let i = 1; i <= pageConfig.totalPage; i++) {
        if (i === currentPage) {
            pages.push(<StyledLi onClick={() => handleClick(i)} key={i}><StyledActiveA href="#">{i}</StyledActiveA></StyledLi>);
        } else {
            pages.push(<StyledLi onClick={() => handleClick(i)} key={i}><StyledA href="#">{i}</StyledA></StyledLi>);
        }
    }

    if (pageConfig.totalPage < 3) {
        for (let i = pageConfig.totalPage; i < 3; i++) {
            pages.push(<StyledInvalidLi key={i + 1}>{i + 1}</StyledInvalidLi>);
        }
    }
    return (
        <StyledDiv>
            <StyledUL>
                {pages}
            </StyledUL>
        </StyledDiv>
    )
};

const StyledDiv = styled.div`
width: 100%;
margin-top:50px;
margin-bottom:50px;
`;

const StyledUL = styled.ul`
display: inline-block;
padding: 0;
margin: 0;
`;

const StyledLi = styled.li`
display: inline;
`;

const StyledA = styled.a`
color: black;
float: left;
padding: 8px 16px;
text-decoration: none;
`;

const StyledActiveA = styled.a`
color: black;
float: left;
width:30px;
height: 30px;
line-height: 30px;
text-decoration: none;
background-color: #FF5956;
border-radius:1000px;
color: white;
`;

const StyledInvalidLi = styled.li`
display: inline;
color: #e0e0e0;
float: left;
padding: 8px 16px;
text-decoration: none;
`;

export default Pagination;