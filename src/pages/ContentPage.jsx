import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

const ContentPage = ({ tubeData, currentPage }) => {
    let renderData = tubeData.slice(10 * (currentPage - 1), 10 * currentPage);
    return (
        <div>
            {renderData && renderData.map((tubeData, index) => {
                return (
                    <img src={tubeData.snippet.thumbnails.high.url} alt="" key={index} />
                );
            })}
        </div>
    );
};

export default ContentPage;