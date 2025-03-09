import { myProjects } from "../constants/index.js";
import { useState } from "react";

const projectCount = myProjects.length;
const Projects = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

    const currentProject = myProjects[selectedProjectIndex];
    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            if(direction === 'previous') {
                return prevIndex === 0 ? projectCount - 1
                    : prevIndex - 1;
            } else {
                return prevIndex === projectCount - 1 ? 0
                    : prevIndex + 1;
            }
        })
    }
    return (
        <section className="c-space my-20"
                 id="work">
                <div className="grid lg:grid-cols-3 grid-cols-1 mt-12 gap-5 h-106 w-full items-center">
                    <div className="lg:h-1/2 lg:justify-center flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-amber-400">
                        <div className="absolute top-0 right-0">
                        </div>
                        <div className="lg:col-span-1 flex flex-col gap-5 bg-gradient-to-b from-yellow-500 to-pink-500 bg-clip-text text-transparent my-5">
                            <p
                                className=" text-2xl bg-gradient-to-b from-yellow-500 to-pink-700 bg-clip-text text-transparent">
                                {currentProject.title}
                            </p>
                            <p
                                className="bg-gradient-to-b from-yellow-500 to-pink-500 bg-clip-text text-transparent">
                                {currentProject.desc}
                            </p>
                            <p
                                className="bg-gradient-to-b from-yellow-500 to-pink-500 bg-clip-text text-transparent">
                                {currentProject.subdesc}
                            </p>
                        </div>
                        <div className="flex justify-between items-center mt-7">
                            <button className="arrow-btn"
                            onClick={() => handleNavigation('previous')}>
                                <img src="/assets/left-arrow.png"
                                     alt="left-arrow"
                                     className="w-4 h-4"/>
                            </button>
                            <button className="arrow-btn"
                                    onClick={() => handleNavigation('next')}>
                                <img src="/assets/right-arrow.png"
                                     alt="right-arrow"
                                     className="w-4 h-4"/>
                            </button>
                        </div>
                    </div>
                    <div className="lg:col-span-2 bg-transparent rounded-lg w-full md:h-full">
                        <div className="relative w-full aspect-[9/16] md:aspect-auto rounded-lg">
                            <img
                                src="/assets/iphone-mockup.png"
                                alt="iPhone Frame"
                                className="w-fit h-fit object-contain display-none md:block"
                            />
                            <video
                                src={currentProject.video}
                                autoPlay
                                loop
                                muted
                                className="rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:w-[85%} lg:h-[85%] w-[94%] h-[94%] object-contain"
                            />
                        </div>
                    </div>
                </div>
        </section>
    )
}
export default Projects
