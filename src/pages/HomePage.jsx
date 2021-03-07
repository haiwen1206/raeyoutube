import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import axios from "axios";
import ListPage from "./ListPage";
import Search from "../image/search.png";
import { useSelector, useDispatch } from "react-redux";

const HomePage = () => {
    const [search, setSearch] = useState("");
    const [tubeData, setTubeData] = useState("");
    const { register, handleSubmit } = useForm();

    const dispatch = useDispatch();
    const cacheData = useSelector((state) => state);

    const onSubmit = (data) => {
        const result = cacheData.filter(element => element.cacheWord === data.search);
        if (result.length !== 0) {
            setTubeData(result[0] && result[0].cacheItem);
        }
        if (result.length === 0) {
            console.log('callAPI');
            const YOUR_API_KEY = 'AIzaSyDTeV11KkECv_Kt09X8Z0JKHgCLMdYdURk';
            axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {
                    part: 'snippet',
                    q: data,
                    maxResults: 50,
                    key: YOUR_API_KEY,
                }
            })
                .then(function (response) {
                    console.log("成功", response.data.items);
                    setTubeData(response.data.items);
                    dispatch({
                        type: "SAVE_CACHE_DATA",
                        payload: {
                            cacheWord: data.search,
                            cacheItem: response.data.items
                        }
                    })
                })
                .catch(function (error) {
                    console.log("失敗", error);
                });
        }
    };
    // console.log('tubeData', tubeData);
    // console.log('cacheData', cacheData);
    return (
        <StyledDiv>
            <StyledForm onSubmit={handleSubmit(onSubmit)} autocomplete="off">
                <StyledInput
                    type="text"
                    placeholder=""
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    ref={register}
                    required="required"
                    name="search" />
                <StyledBorderDiv>
                    <StyledButton
                        type="submit"
                        value="Submit"
                    >
                        <StyledImg src={Search} alt="" />
                    </StyledButton>
                </StyledBorderDiv>
            </StyledForm>
            <ListPage tubeData={tubeData} />
        </StyledDiv>
    );
};
const StyledDiv = styled.div`
width: 100%;
 `;

const StyledForm = styled.form`
width:90.7%;
height: 100px;
margin:10px auto;
background-color: #FF5956;
padding-top: 50px;
`;

const StyledInput = styled.input`
vertical-align:middle;
background-color: #FF5956;
border-top: 0px;
border-left: 0px;
border-right: 0px;
border-color: white;
color: white;
:focus{
    outline:none;
}
:-webkit-autofill {
     background-color: transparent!important;
     background-image: none !important;
     color: white !important;
     -webkit-box-shadow: 0 0 0px 100px #FF5956 inset !important; 
     -webkit-text-fill-color: #fff !important;
 }

@media (max-width: 978px) {
    font-size: 20px;
    width:60%;
}
@media (min-width: 980px) {
    font-size: 30px;
    width:40%;
}
`;

const StyledButton = styled.button`
-webkit-box-shadow: none;
background-color: transparent;
vertical-align:middle;
outline:none;
border:none;
:focus{
    outline:none;
}
`;

const StyledImg = styled.img`
@media (max-width: 978px) {
    width:20px;
}
@media (min-width: 980px) {
    width:30px;
}
`;

const StyledBorderDiv = styled.div`
border:white;
display:inline;
border-color:white;
border-width: 0px;
border-bottom-width: 2px;
border-style:solid;
padding: 10px;
vertical-align:middle;
@media (max-width: 978px) {
    padding: 4px;
}
`;

export default HomePage;
