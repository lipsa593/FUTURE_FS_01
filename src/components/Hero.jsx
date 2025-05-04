import 'boxicons/css/boxicons.min.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Stage } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import React, { useEffect } from 'react';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';

const Model = () => {
  try {
    const geometry = useLoader(STLLoader, '/models/example.stl'); // Ensure the path is correct
    console.log('STL model loaded successfully.');
    return (
      <mesh geometry={geometry}>
        <meshStandardMaterial color="gray" />
      </mesh>
    );
  } catch (error) {
    console.error('Error loading the STL model:', error);
    // Render a fallback sphere if the model fails to load
    return (
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="red" />
      </mesh>
    );
  }
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught in ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

const Hero = () => {
  useEffect(() => {
    console.log('Hero component mounted.');
    return () => {
      console.log('Hero component unmounted.');
    };
  }, []);

  return (
    <main className="flex flex-1 flex-col justify-between h-full">
      <div className="flex p-10 relative">
        <div className="flex flex-col flex-1"> {/* Content moved to the left */}
          <div className="introducing-container w-[230px] md:w-[300px] h-[33px] flex items-center justify-center mb-5 relative">
            <div>
              <i className="bx bxs-star-half"> Developer Profile</i>
            </div>
          </div>
          <div className='lg:max-w-[700px] sm:max-w-[400px] max-w-[250px] leading-relaxed'> 
            <h1 className='lg:text-6xl sm:text-5xl text-3xl font-extrabold mb-5 bg-gradient-radial from-violet-400 to-white bg-clip-text text-transparent'>
              Hi, I'm Lipsa Porel
            </h1>
            <p className='max-w-[900px] lg:text-xl'>
              Aspiring Data Analyst & Full Stack Developer | Building Projects, Practicing DSA & Seeking Internships
            </p>
          </div>
        </div>

        <div className="flex flex-1 h-[500px]">
          <ErrorBoundary>
            <Canvas
              camera={{ position: [0, 1, 5], fov: 50 }}
              gl={{ antialias: false, preserveDrawingBuffer: true }}
              frameloop="demand"
              shadows
            >
              <ambientLight intensity={1.5} />
              <Environment preset="sunset" />
              <Stage environment="city" intensity={0.6}>
                <Model />
              </Stage>
              <OrbitControls enableZoom={false} autoRotate />
            </Canvas>
          </ErrorBoundary>
        </div>
      </div>
    </main>
  );
};

export default Hero;