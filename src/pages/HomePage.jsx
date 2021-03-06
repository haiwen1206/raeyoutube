import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import axios from "axios";
import ListPage from "./ListPage";

const HomePage = () => {
    const [search, setSearch] = useState("");
    const [tubeData, setTubeData] = useState("");
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        const YOUR_API_KEY = 'AIzaSyCweQnhnhrFXc8_op1fQi38ganfGWnC3AA';
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
            })
            .catch(function (error) {
                console.log("失敗", error);
            });
    };
    return (
        <StyledDiv>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    placeholder="請輸入搜尋字"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    ref={register}
                    required="required"
                    name="search" />
                <button
                    type="submit"
                    value="Submit"
                >
                    送出
                </button>
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
`;

export default HomePage;
