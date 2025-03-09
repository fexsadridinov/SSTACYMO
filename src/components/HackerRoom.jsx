import { useGLTF } from '@react-three/drei'
const HackerRoom = (props) => {
    const { nodes, materials } = useGLTF('models/heart_in_love.glb')
    return (
        <group {...props} dispose={null}>
            <mesh
                geometry={nodes.Heart_Heart_0.geometry}
                material={materials.Heart}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={100}
            />
            <mesh
                geometry={nodes.Marble_Marble_0.geometry}
                material={materials.Marble}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
            />
        </group>
    )
}

useGLTF.preload('models/heart_in_love.glb')

export default HackerRoom;