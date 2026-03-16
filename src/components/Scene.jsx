import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float } from '@react-three/drei';
import { useRef } from 'react';

const AnimatedSphere = () => {
  const sphereRef = useRef();
  
  return (
    <Float speed={4} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={sphereRef} args={[1, 100, 200]} scale={2.4}>
        <MeshDistortMaterial
          color="#3b82f6"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

export const Scene = () => {
  return (
    <div className="absolute inset-0 -z-10 h-screen w-full">
      <Canvas>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 1, 1]} />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
};