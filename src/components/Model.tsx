import { useEffect, useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mesh } from 'three';

gsap.registerPlugin(ScrollTrigger);

export default function Model() {
  const meshRef = useRef<Mesh>(null);

  useEffect(() => {
    if (!meshRef.current) return;

    // Use GSAP ScrollTrigger to rotate the model based on scroll
    gsap.to(meshRef.current.rotation, {
      y: Math.PI * 2,
      x: Math.PI / 2,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1, // Smooth scrolling effect
      }
    });

    // Animate material properties
    gsap.to(meshRef.current.material, {
      metalness: 1,
      roughness: 0.1,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "center center",
        scrub: true,
      }
    });

  }, []);

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1, 0.3, 200, 32]} />
      <meshPhysicalMaterial
        color="#ffffff"
        metalness={0.5}
        roughness={0.5}
        clearcoat={1}
        clearcoatRoughness={0.1}
      />
    </mesh>
  );
}
