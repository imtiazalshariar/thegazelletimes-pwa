"use client";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function ImmersiveAd() {
  return (
    <Canvas>
      <ambientLight />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={"hotpink"} />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
}
