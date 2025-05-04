import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import Loader from '../Loader';

const Earth = () => {
  try {
    const earth = useGLTF('/planet/scene.gltf', true); // Ensure this path is correct
    console.log('GLTF model loaded successfully:', earth);

    return (
      <primitive
        object={earth.scene}
        scale={2.0}
        position-y={0}
        rotation-y={0}
      />
    );
  } catch (error) {
    console.error('Error loading the GLTF model:', error);
    // Render a fallback sphere if the model fails to load
    return (
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="blue" />
      </mesh>
    );
  }
};

function EarthCanvas() {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [0, 0, 5],
      }}
    >
      <Suspense fallback={<Loader />}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
    </Canvas>
  );
}

export { EarthCanvas };
export default EarthCanvas;