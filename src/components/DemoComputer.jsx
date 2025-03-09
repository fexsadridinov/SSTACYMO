import {useGLTF} from '@react-three/drei'

const DemoComputer = (props) => {
    const { nodes, materials } = useGLTF('/models/easel_standee.glb')
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_4.geometry}
                material={materials.White_Board}
                position={[0.084, 7.952, 1.684]}
                rotation={[2.986, 0, Math.PI]}
                scale={[-1.996, 2.558, 0.068]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_6.geometry}
                material={materials.Wood_Stand}
                position={[-0.028, 0.083, -0.455]}
                scale={7.127}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_8.geometry}
                material={materials.Support}
                position={[-0.028, 0.083, -0.455]}
                scale={7.127}
            />
        </group>
    )
}
useGLTF.preload('/models/easel_standee.glb')

export default DemoComputer;