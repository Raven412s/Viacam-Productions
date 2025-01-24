"use client";

import React, { useRef, useEffect, useState } from "react";
import { useGLTF, OrbitControls, Environment } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Model component to load and animate the GLTF model
export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/3dCamera.glb") as any;
  const groupRef = useRef<any>(null);

  const [autoRotate, setAutoRotate] = useState(true); // State to control auto-rotation

  if (!nodes?.mesh_0?.geometry || !materials?.[""]) {
    console.error("Mesh or material is missing in the GLTF file!");
    return null;
  }

  useFrame(() => {
    if (autoRotate && groupRef.current) {
      groupRef.current.rotation.y += 0.01; // Adjust speed as necessary
    }
  });

  return (
    <group {...props} ref={groupRef} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={materials[""]}
      />
    </group>
  );
}

// Preload the GLTF file
useGLTF.preload("/3dCamera.glb");

// Scene component to set up the Canvas, lighting, environment, and model
export default function Scene() {
  const cameraRef = useRef<any>(null);

  useEffect(() => {
    const camera = cameraRef.current;

    // GSAP Scroll Animation for Camera
    gsap.timeline({
      scrollTrigger: {
        trigger: ".canvas-container",
        start: "50% center", // Start when canvas reaches 50% of viewport
        end: "bottom top",
        scrub: true,
      },
    })
      .to(camera?.position, {
        x: 10, // Move the camera position horizontally
        y: 5, // Move the camera upward
        z: 10, // Adjust the depth
      })
      .to(camera?.lookAt, {
        x: 0, // Focus on the center of the scene
        y: 0,
        z: 0,
      });
  }, []);

  return (
    <div
      className="canvas-container"
      style={{
        height: "200vh",
        width: "100%",
        position: "relative",
        zIndex: 10,
      }}
    >
      {/* Canvas */}
      <Canvas
        shadows
        camera={{ position: [15, 2, 15], fov: 8 }}
        style={{
          height: "100vh",
          width: "100vw",
          position: "sticky",
          top: 0,
        }}
      >
        <perspectiveCamera ref={cameraRef} />

        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} castShadow />

        {/* Environment */}
        <Environment preset="sunset" background={false} />

        {/* Model */}
        <Model />

        {/* Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxAzimuthAngle={Math.PI / 4}
          minAzimuthAngle={-Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>
    </div>
  );
}
