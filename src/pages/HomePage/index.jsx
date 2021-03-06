import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { useSpring, a } from "react-spring/three";
import styled from "styled-components";
import HTMLContent from "./HTMLContent"
import Header from "../../components/Header";
import { useProgress, Html } from "drei";



const HomePage = () => {
    const Sphere = () => {
        const mesh = useRef(null);
        useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.0005));
        const [expand, setExpand] = useState(false);
        const props = useSpring({
            scale: expand ? [1, 1, 1] : [1.4, 1.4, 1.4],
        });
        return (<a.mesh onClick={() => setExpand(!expand)} scale={props.scale} castShadow ref={mesh}>
            <HTMLContent />
        </a.mesh>);
    }
    function Loader() {
        const { active, progress, errors, item, loaded, total } = useProgress()
        return <Html center style={{ color: 'black' }}>{progress} % loaded</Html>
    }
    return (
        <>
            <Header />
            <Suspense fallback={<Loader />}>
                <Canvas colorManagement camera={{ position: [-5, 302, 100], fov: 35 }}>
                    <color attach="background" args={['black']} />
                    <ambientLight intensity={0.3} />
                    <directionalLight
                        castShadow
                        position={[0, 50, 0]}
                        intensity={1.5}
                        shadow-mapSize-width={1024}
                        shadow-mapSize-height={1024}
                        shadow-camera-far={50}
                        shadow-camera-left={-10}
                        shadow-camera-right={10}
                        shadow-camera-top={50}
                        shadow-camera-bottom={-10}
                    />
                    <Sphere />
                </Canvas></Suspense></>
    );
}

// style
const StyledContainerDiv = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default HomePage;



