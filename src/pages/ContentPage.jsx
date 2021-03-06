import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

const ContentPage = ({ tubeData, currentPage }) => {
    let renderData = tubeData.slice(10 * (currentPage - 1), 10 * currentPage);
    return (
        <div>
            {renderData && renderData.map((tubeData, index) => {
                let url = 'https://www.youtube.com/watch?v=' + `${tubeData.id.videoId}`;
                if (!tubeData.id.videoId) url = 'https://www.youtube.com/watch?v=c91bNchSC5Q&list=' + `${tubeData.id.playlistId}`;
                return (
                    <a href={url} target="_blank"> <img key={index} src={tubeData.snippet.thumbnails.high.url} alt="" key={index} /></a>
                );
            })}
        </div>
    );
};

export default ContentPage;