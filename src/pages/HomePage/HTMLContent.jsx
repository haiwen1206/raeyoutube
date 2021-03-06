import React, { useRef, Suspense, useEffect } from "react";
import styled from "styled-components";
import { useGLTFLoader, useProgress, OrbitControls, Html } from "drei";
import { useControl } from "react-three-gui"
import Loader from "./Loader"

import { a, useTransition } from "@react-spring/web";



const Model = () => {
    const gltf = useGLTFLoader('/scene.gltf', true);
    return <primitive object={gltf.scene} dispose={null} />;
}

const HTMLContent = () => {
    const orbit = useRef()
    const transform = useRef()
    const mode = useControl("mode", { type: "select", items: ["translate"] })
    useEffect(() => {
        if (transform.current) {
            const controls = transform.current
            controls.setMode(mode)
            const callback = event => (orbit.current.enabled = !event.value)
            controls.addEventListener("dragging-changed", callback)
            return () => controls.removeEventListener("dragging-changed", callback)
        }
    })
    function Loader() {
        const { active, progress, errors, item, loaded, total } = useProgress()
        return <Html center style={{ color: 'white' }}>{progress} % loaded</Html>
    }

    // function Loader() {
    //     const { active, progress } = useProgress();
    //     const transition = useTransition(active, {
    //         from: { opacity: 1, progress: 0 },
    //         leave: { opacity: 0 },
    //         update: { progress },
    //     });
    //     return transition(
    //         ({ progress, opacity }, active) =>
    //             active && (
    //                 <a.div className='loading' style={{ opacity }}>
    //                     <div className='loading-bar-container'>
    //                         <a.div className='loading-bar' style={{ width: progress }}></a.div>
    //                     </div>
    //                 </a.div>
    //             )
    //     );
    // }

    return (
        <> <Suspense fallback={<Loader />}>
            <mesh position={[0, 0, 0]}><Model /></mesh></Suspense>
            <OrbitControls ref={orbit} />
        </>
    );
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
export default HTMLContent;
