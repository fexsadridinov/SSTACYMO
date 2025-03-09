import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";
import { useState, useMemo } from "react";
import * as THREE from "three";

export const About = () => {
    const [hasCopied, setHasCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText("anastasia@sstacymo.com");
        setHasCopied(true);
        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };

    const tintedMaterial = useMemo(() => {
        const textureLoader = new THREE.TextureLoader();
        const globeTexture = textureLoader.load("//unpkg.com/three-globe/example/img/earth-day.jpg");
        const bumpTexture = textureLoader.load("//unpkg.com/three-globe/example/img/earth-topology.png");
        return new THREE.MeshStandardMaterial({
            map: globeTexture,
            bumpMap: bumpTexture,
            bumpScale: 0.5, // Adjust bump intensity as needed
            color: "#FFC0CB", // This applies a pink tint
        });
    }, []);

    return (
        <section
            className="c-space my-20"
            id="about"
            style={{ scrollMarginTop: "95px" }}
        >
            <div className="grid xl:grid-cols-3 grid-cols-1 gap-5">
                {/* Avatar container */}
                <div className="bg-gradient-to-r from-pink-100 to-pink-200 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
                    <img
                        src="/assets/about-me.jpg"
                        alt="About me"
                        className="w-full sm:h-[276px] h-full object-contain rounded-lg"
                    />
                    <div>
                        <p className="grid-headtext">I'm Stacy</p>
                        <p className="grid-subtext">
                            A dedicated professional specializing in UGC and Social Media Marketing,
                            leveraging innovative content strategies to drive authentic engagement and community growth.
                        </p>
                    </div>
                </div>

                {/* Globe container */}
                <div className="bg-gradient-to-r from-pink-100 to-pink-300 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
                    <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                        <Globe
                            height={326}
                            width={326}
                            backgroundColor="rgba(0, 0, 0, 0)"
                            backgroundImageOpacity={0.5}
                            showAtmosphere
                            showGraticules
                            globeMaterial={tintedMaterial}
                            globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            labelsData={[
                                {
                                    lat: 40.7128,
                                    lng: -74.0060,
                                    text: "I'm here!",
                                    color: "pink",
                                    size: 20,
                                },
                            ]}
                        />
                    </div>
                    <div>
                        <p className="grid-headtext">I work remotely across most timezones.</p>
                        <p className="grid-subtext">
                            While based in New York City, I provide the entire spectre of services worldwide.
                        </p>
                    </div>
                </div>

                {/* Contact container */}
                <div className="bg-gradient-to-b from-amber-100 to-pink-200 rounded-lg sm:p-7 p-4 flex flex-col gap-5 justify-center text-center">
                    <img
                        src="/assets/new-email.svg"
                        alt="Contact me"
                        className="mx-auto object-contain w-1/2 max-w-[100px] sm:max-w-[150px] md:max-w-[120px] lg:max-w-[100px]"
                    />
                    <div className="space-y-2">
                        <p className="text-xl font-semibold mb-2 text-amber-700">
                            Contact me
                        </p>
                        <div className="copy-container" onClick={handleCopy}>
                            <img
                                src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"}
                                alt="copy"
                            />
                            <p className="lg:text-xl md:text-xl font-medium text-amber-500">
                                anastasia@sstacymo.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
