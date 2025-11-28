import React, { useState } from 'react';
import Projects from './pages/ProjectsPage';

export default function ContentContainer(){
    // Visible state (not a toggle) — you call `openProjects` to show,
    // and `closeProjects` to hide. This lets you drive a one-way entrance
    // animation from an initially invisible state.
    const [projectsVisible, setProjectsVisible] = useState(false);

    const openProjects = () => setProjectsVisible(true);
    const closeProjects = () => setProjectsVisible(false);

    return (
        <>
            <table className="h-4/6 w-8/12 table-fixed border-separate border-spacing-y-4 border-spacing-x-8  m-auto p-2 ">
                <tbody>
                    <tr>
                        <td
                            role="button"
                            tabIndex={0}
                            onClick={openProjects}
                            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openProjects(); }}
                            className="card border border-white text-center w-1/2 h-1/3 text-white select-none cursor-pointer"
                        >
                            <div className="card-inner">
                                <h2>About Me</h2>
                                <p>This is a brief introduction about myself.</p>
                                <p className="text-sm mt-2 italic">Click to show Projects</p>
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
                                <h2>Contact</h2>
                                <p>Feel free to reach out to me!</p>
                            </div>
                        </td>
                        <td className="card border border-white text-center w-1/2 h-1/3 text-white">
                            <div className="card-inner">
                                <h2>Skills</h2>
                                <p>Here are some of my skills and expertise.</p>
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
        </>
    )

}