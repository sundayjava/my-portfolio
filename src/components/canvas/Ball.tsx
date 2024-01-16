import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "./CanvasLoader";

const Ball = (props: any) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          map={decal}
          rotation={[2 * Math.PI, 0, 6.25]}
        />
      </mesh>
    </Float>
  );
};

interface MyObject {
    icon: string;
  }

const BallCanvas = ({ icon }: MyObject) => {
    
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      {/*This allows us to have a loader while our model is loading*/}
      <Suspense fallback={<CanvasLoader />}>
        {/*This allows us to move the model left and right*/}
        <OrbitControls enableZoom={false} />
        {/*The main components that contains the image*/}
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
