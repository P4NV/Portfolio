import React, { useState } from 'react';
import Projects from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import ExperiencePage from './pages/ExperiencePage';
import Page4 from './pages/04';
import Page5 from './pages/05';
import Page6 from './pages/06';


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
    const closeSkills = () => setSkillsVisible(false);

    // Third card = ExperiencePage

    const [ExperienceVisible, setExperienceVisible] = useState(false);
    const openExperience = () => setExperienceVisible(true);
    const closeExperience = () => setExperienceVisible(false);

    // Fourth card = W-I-P Page

    const [Page4Visible, setPage4Visible] = useState(false);
    const openPage4 = () => setPage4Visible(true);
    const closePage4 = () => setPage4Visible(false);

    // Fifth card = W-I-P Page

    const [Page5Visible, setPage5Visible] = useState(false);
    const openPage5 = () => setPage5Visible(true);
    const closePage5 = () => setPage5Visible(false);

    // sixth card = W-I-P Page

    const [Page6Visible, setPage6Visible] = useState(false);
    const openPage6 = () => setPage6Visible(true);
    const closePage6 = () => setPage6Visible(false);

    


    return (
        <>
            <table className="h-4/6 w-8/12 table-fixed border-separate border-spacing-y-4 border-spacing-x-8 mt-10  m-auto p-2 overflow-visible ">
                <tbody>
                    <tr>
                        <td
                            role="button"
                            onClick={openProjects}
                            className="card border border-white rounded-lg text-center w-1/2 h-1/3 text-white select-none ">

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
                            className="card border border-white rounded-lg text-center w-1/2 h-1/3 text-white">
                            
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
                        <td
                            role='button'
                            onClick={openExperience}
                            className="card border border-white rounded-lg text-center w-1/2 h-1/3 text-white">
                            <div className="card-inner">
                                <h2>Experience</h2>
                                <br/>
                                <hr/>
                                <br/>
                                <p>What i've experienced so far</p>
                            </div>
                        </td>
                        <td 
                            role='button'
                            onClick={openPage4}
                            className="card border border-white rounded-lg text-center w-1/2 h-1/3 text-white">
                            <div className="card-inner">
                                <h2 style={{fontSize: '5.5rem'}}>-W.I.P-</h2>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td 
                            role='button'
                            onClick={openPage5}
                            className="card border border-white rounded-lg text-center w-1/2 h-1/3 text-white">
                            <div className="card-inner">
                                <h2 style={{fontSize:'5.5rem'}}>-W.I.P-</h2>
                            </div>
                        </td>
                        <td 
                            role='button'
                            onClick={openPage6}
                            className="card border border-white rounded-lg text-center w-1/2 h-1/3 text-white">
                            <div className="card-inner">
                                <h2 style={{fontSize:'5.5rem'}}>-W.I.P-</h2>
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

            {/* Experience overlay */}

            <div
                className={`Experience-container ${ExperienceVisible ? 'show' : ''}`}
                aria-hidden={!ExperienceVisible}
            >
                <div className="flex justify-end">
                    <button
                        onClick={closeExperience}
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
                    <ExperiencePage />
                </div>
            </div>

            {/* Page4 overlay */}

            <div
                className={`Page4-container ${Page4Visible ? 'show' : ''}`}
                aria-hidden={!Page4Visible}
            >
                <div className="flex justify-end">
                    <button
                        onClick={closePage4}
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
                    <Page4 />
                </div>
            </div>

            {/* Page4 overlay */}

            <div
                className={`Page5-container ${Page5Visible ? 'show' : ''}`}
                aria-hidden={!Page5Visible}
            >
                <div className="flex justify-end">
                    <button
                        onClick={closePage5}
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
                    <Page5 />
                </div>
            </div>

            {/* Page6 overlay */}

            <div
                className={`Page6-container ${Page6Visible ? 'show' : ''}`}
                aria-hidden={!Page6Visible}
            >
                <div className="flex justify-end">
                    <button
                        onClick={closePage6}
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
                    <Page6 />
                </div>
            </div>
        </>
    )

}