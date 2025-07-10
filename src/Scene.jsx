import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { Model } from './Model';

export default function Scene({ scrollValue }) {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault fov={25} position={[0, 10.5, 10]} />
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
      <Environment preset="city" />
      <Model scrollValue={scrollValue} />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}
