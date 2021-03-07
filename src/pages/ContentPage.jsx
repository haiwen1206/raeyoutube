import React from "react";
import styled from "styled-components";

const ContentPage = ({ tubeData, currentPage }) => {
    let renderData = tubeData && tubeData.slice(10 * (currentPage - 1), 10 * currentPage);
    return (
        <div>
            {renderData && renderData.map((tubeData, index) => {
                let url = 'https://www.youtube.com/watch?v=' + `${tubeData.id.videoId}`;
                if (!tubeData.id.videoId) url = 'https://www.youtube.com/watch?v=c91bNchSC5Q&list=' + `${tubeData.id.playlistId}`;
                return (
                    <a href={url} target="_blank" rel="noreferrer" key={index}> <StyledImg key={index} src={tubeData.snippet.thumbnails.high.url} alt="" key={index} /></a>
                );
            })}
        </div>
    );
};

const StyledImg = styled.img`
@media (max-width: 978px) {
    width: 45%;
}
@media (min-width: 980px) {
    width: 30%;
}

`;

export default ContentPage;