import React, { useState } from 'react';
import Projects from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';

export default function ContentContainer(){
    // Visible state (not a toggle) — you call `openProjects` to show,
    // and `closeProjects` to hide. This lets you drive a one-way entrance
    // animation from an initially invisible state.
    const [projectsVisible, setProjectsVisible] = useState(false);
    const openProjects = () => setProjectsVisible(true);
    const closeProjects = () => setProjectsVisible(false);

    // for the second card = Skills and expertise

    const [SkillsVisible, setSkillsVisible] = useState(false);
    const openSkills = () => setSkillsVisible(true);
    const closeSkills = () => setSkillsVisible(false)


    return (
        <>
            <table className="h-4/6 w-8/12 table-fixed border-separate border-spacing-y-4 border-spacing-x-8  m-auto p-2 ">
                <tbody>
                    <tr>
                        <td
                            role="button"
                            onClick={openProjects}
                            className="card border border-white text-center w-1/2 h-1/3 text-white select-none ">

                            <div className="card-inner">
                                <h2>My work / projects</h2>
                                <br/>
                                <hr/>
                                <br/>
                                <p>This is a brief introduction what im capable of</p>
                            </div>
                        </td>
                        <td 
                            role='button'
                            onClick={openSkills}
                            className="card border border-white text-center w-1/2 h-1/3 text-white">
                            
                            <div className="card-inner">
                                <h2>Skills and Expertise</h2>
                                <br/>
                                <hr/>
                                <br/>
                                <p>Here are some of my skills and expertise</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="card border border-white text-center w-1/2 h-1/3 text-white">
                            <div className="card-inner">
                                <h2>Projects</h2>
                                <p>Here are some of the projects I've worked on.</p>
                            </div>
                        </td>
                        <td className="card border border-white text-center w-1/2 h-1/3 text-white">
                            <div className="card-inner">
                                <h2>Skills</h2>
                                <p>Here are some of my skills and expertise.</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="card border border-white text-center w-1/2 h-1/3 text-white">
                            <div className="card-inner">
                                <h2>Little about myself</h2>
                                <p></p>
                            </div>
                        </td>
                        <td className="card border border-white text-center w-1/2 h-1/3 text-white">
                            <div className="card-inner">
                                <h2>Contact</h2>
                                <p>Feel free to reach out to me!</p>
                                <div>
                                    <a href="mailto:ex000static@gmail.com" className="text-blue-400 underline">img-placeholder</a>
                                    <a>linkedin-placeholder</a>
                                    <a>github-placeholder</a>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* Projects overlay — keep it in the DOM but invisible by default so
                you can animate it in. Use the `show` class to drive the entrance. */}
            <div
                className={`Projects-container ${projectsVisible ? 'show' : ''}`}
                aria-hidden={!projectsVisible}
            >
                <div className="flex justify-end">
                    <button
                        onClick={closeProjects}
                        className="mx-2 px-3 py-2 bg-red-600 text-white rounded-lg"
                        aria-label="Close projects"
                    >
                        Close
                    </button>
                </div>
                <div className="mt-2 h-full overflow-auto">
                    <Projects />
                </div>
            </div>

            {/* skills card container */}
            
            <div
                className={`Skills-container ${SkillsVisible ? 'show' : ''}`}
                aria-hidden={!SkillsVisible}
            >
                <div className="flex justify-end">
                    <button
                        onClick={closeSkills}
                        className="mx-2 px-3 py-2 bg-red-600 text-white rounded-lg"
                        aria-label="Close skills"
                    >
                        Close
                    </button>
                </div>
                <div>
                   <p>dfsdgasgasgasgasdg</p>
                </div>
                <div className="mt-96 overflow-hidden flex  items-center justify-center box-content">
                    <SkillsPage />
                </div>
            </div>
        </>
    )

}