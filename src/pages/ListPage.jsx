import React, { useState, useEffect } from "react";
import Pagination from "../components/Pagination";
import ContentPage from "./ContentPage";

const ListPage = ({ tubeData }) => {
    const [pageConfig, setPageConfig] = useState({
        currentPage: 1,
        startPage: 1,
        totalPage: 0
    });

    useEffect(() => {
        setPageConfig(
            {
                currentPage: 1,
                startPage: 1,
                totalPage: Math.ceil(tubeData.length / 10)
            }
        );
    }, [tubeData]);

    return (
        <div>
            <ContentPage tubeData={tubeData} currentPage={pageConfig.currentPage} />
            <Pagination currentPage={pageConfig.currentPage} tubeData={tubeData} pageConfig={pageConfig} onCatch={(value) => {
                setPageConfig(
                    {
                        currentPage: value,
                        startPage: 1,
                        totalPage: Math.ceil(tubeData.length / 10)
                    }
                );
            }} />
        </div>
    );
};


export default ListPage;