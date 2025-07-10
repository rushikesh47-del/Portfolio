import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/batman.glb');
  const { actions } = useAnimations(animations, group);

  return (
    <group
      scale={[35, 35, 35]}
      position={[0, -2, 5]} // ✅ Y-axis upar shift
      ref={group}
      {...props}
      dispose={null}
    >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={10}>
          <group name="Batmanfbx" rotation={[Math.PI / 3, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.H_BatMan_D}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <group name="Object_6" rotation={[-Math.PI / 3, 0, 0]} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/batman.glb');
