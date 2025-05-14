import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import Loader from '../Loader';

const Earth = () => {
  const earth = useGLTF('/planet/scene.gltf');

  return (
    <primitive
      object={earth.scene}
      scale={2.0}
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
    />
  );
};

function EarthCanvas() {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true, alpha: true }}
      camera={{ position: [0, 0, 5], fov: 45, near: 0.1, far: 200 }}
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