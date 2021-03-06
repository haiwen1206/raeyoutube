import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

const ContentPage = ({ tubeData, currentPage }) => {
    let renderData = tubeData.slice(10 * (currentPage - 1), 10 * currentPage);
    return (
        <div>
            {renderData && renderData.map((tubeData, index) => {
                const url = 'https://www.youtube.com/watch?v=' + `${tubeData.id.videoId}`;
                return (
                    <a href={url} target="_blank"> <img key={index} src={tubeData.snippet.thumbnails.high.url} alt="" key={index} /></a>
                );
            })}
        </div>
    );
};

export default ContentPage;