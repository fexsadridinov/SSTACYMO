import * as THREE from 'three'
import {Canvas} from "@react-three/fiber";
import {Environment, PerspectiveCamera, Center } from "@react-three/drei";
import HackerRoom from "../components/HackerRoom.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {Suspense} from "react";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";

const Hero = () => {
    const isSmall = useMediaQuery( {maxWidth: 440} );
    const isMobile = useMediaQuery ({maxWidth: 768} );
    const isTablet = useMediaQuery( {minWidth: 768, maxWidth: 1024});

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section className="min-h-screen w-full flex flex-col relative pt-28 md:pt-10" id="home">
            <div className="w-full mx-auto flex flex-col sm:mt-36 c-space gap-3 relative z-20">
                <p className=" hero_tag text-pink-400">
                    Hello there! <span />
                    <span className={"waving-hand"}>
                        🕊️
                    </span>
                </p>
            </div>

            <div className="w-full h-full absolute inset-0 z-10">
                <Canvas
                    className="w-full h-full"
                    // Turn on physically correct lighting & set tone mapping
                    gl={{
                        physicallyCorrectLights: true,
                        toneMapping: THREE.ACESFilmicToneMapping,
                        outputEncoding: THREE.sRGBEncoding,
                    }}
                >
                    <Suspense fallback={<CanvasLoader />}>
                        {/* Environment adds reflections & ambient lighting (replace 'studio' with other presets or your own HDR) */}
                        <Environment preset="dawn" />

                        {/* Keep your existing camera if desired */}
                        <PerspectiveCamera makeDefault position={[0, 0, 20]} />

                        {/* Wrap HackerRoom in HeroCamera as before */}
                        <HeroCamera isMobile={isMobile}>
                            <HackerRoom
                                position={sizes.deskPosition}
                                rotation={[0, -Math.PI, 0]}
                                scale={sizes.deskScale}
                            />
                        </HeroCamera>
                        <ambientLight intensity={0.1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.1} />
                    </Suspense>
                </Canvas>
            </div>
            <div className="absolute bottom-7 left-0 right-0 w-full z-30 c-space">
                <a href="#about" className="w-fit">
                    <Button name="Let's work together" isBeam
                    containerClass="sm:w-fit w-full sm:min-w-96" />
                </a>
            </div>
        </section>
    )
}
export default Hero
