// ModelViewer.jsx
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useLoader } from '@react-three/drei';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';

const Model = () => {
  try {
    const geometry = useLoader(STLLoader, '/models/example.stl'); // Ensure this path is correct
    console.log('STL model loaded successfully.');
    return (
      <mesh geometry={geometry} scale={[0.5, 0.5, 0.5]} position={[0, 0, 0]}>
        <meshStandardMaterial color="gray" />
      </mesh>
    );
  } catch (error) {
    console.error('Error loading the STL model:', error);
    return (
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="red" />
      </mesh>
    );
  }
};

const ModelViewer = () => (
  <div className="flex flex-1 justify-center items-center bg-black h-screen">
    <Canvas camera={{ position: [0, 0, 5] }} style={{ background: 'black' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={<div className="text-white">Loading 3D Model...</div>}>
        <Model />
      </Suspense>
      <OrbitControls />
    </Canvas>
  </div>
);

export default ModelViewer;
