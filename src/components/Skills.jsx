import React from 'react'

const Skills = () => {
    const skills = {
        programmingLanguages: ["JavaScript", "Java", "C", "Python(Basic)", "PHP"],
        tools: ["Git", "GitHub"],
        frameworksAndLibraries: ["Tailwind CSS", "React", "Laravel"]
    };

    return (
        <>
            <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl">Skills</h2>
                <div className="flex flex-col gap-2">
                    <div>
                        <h3 className="font-bold text-xl">Programming Languages:</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.programmingLanguages.map((language, index) => (
                                <span key={index}>{language}</span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl">Tools:</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.tools.map((tool, index) => (
                                <span key={index}>{tool}</span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl">Frameworks and Libraries:</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.frameworksAndLibraries.map((framework, index) => (
                                <span key={index}>{framework}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );


}

export default Skills