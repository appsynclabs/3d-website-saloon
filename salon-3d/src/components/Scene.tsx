import { Environment, Float, PresentationControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Model from './Model';

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#d4af37" />
      <directionalLight position={[-10, -10, -5]} intensity={1} color="#ffffff" />

      <Environment preset="studio" />

      <PresentationControls
        global={false}
        cursor={true}
        snap={true}
        speed={1}
        zoom={1}
        rotation={[0, 0, 0]}
        polar={[-Math.PI / 4, Math.PI / 4]}
        azimuth={[-Math.PI / 4, Math.PI / 4]}
      >
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <Model />
        </Float>
      </PresentationControls>
    </Canvas>
  );
}
