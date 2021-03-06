import React from "react";
import { useProgress } from "drei";
import { a, useTransition } from "@react-spring/web";
import styled from "styled-components";

const Loader = () => {
    const { active, progress } = useProgress();
    const transition = useTransition(active, {
        from: { opacity: 1, progress: 0 },
        leave: { opacity: 0 },
        update: { progress },
    });
    return (
        <>123</>
    )
}

// style
const StyledLoadingDiv = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: #171717;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const StyledLoadingBarContainerDiv = styled.div`
  width: 100px;
  height: 32px;
  background: #272727;
`;

const StyledLoadingBarDiv = styled.div`
  height: 32px;
  background: #f15946;
`;

export default Loader;