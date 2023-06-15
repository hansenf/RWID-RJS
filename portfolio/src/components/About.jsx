import React from "react";

const About = () => {
    return (
        <div
            name="about"
            id="about"
            className="w-full h-screen bg-[#0a192f] text-gray-300"
        >
            <div className="flex flex-col justify-center w-full h-full">
                <div className="py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="sm-text-right pb-8 pl-4">
                            About
                        </p>
                    </div>
                    <div></div>
            </div> 
            <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                <div className="sm:text-right text-4xl font-bold">
                    <p>
                        Hi. I'm Hansen Feriandy, nice to meet you. Please take a look around.
                    </p>
                </div>
                <div>
                    <p>
                    A software developer with experience in building Responsive and 
                    Scalable Web apps. I am well-knowledged in UI/UX principles and 
                    practices. In addition to software development, I am also a 
                    technical writer--simplifying topics/concepts on the web.
                    </p>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default About;