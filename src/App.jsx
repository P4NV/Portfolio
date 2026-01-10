import './App.css';

import Head from './components/head.jsx';
import ExpandableCard from './components/Cardbuttons.jsx';

function App() {


  return (
    <>
      <div className='background'>  
        <div className="stars"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
      </div>
      <div className='content-container'>
        <Head />
      <div className='button-wrapper'>
        <div className='button-container '>
          <ExpandableCard title="About Me" preview="My role & mindset">
              <section className=" pt-0">
                  <h2>About Me</h2>

                  <div className="">
                      <p>
                          I am a dedicated front-end developer with a strong foundation in
                          modern web technologies and a commitment to delivering high-quality,
                          scalable solutions. My expertise lies in transforming complex
                          requirements into intuitive, performant user interfaces that meet
                          both business objectives and user needs.
                      </p>
                  </div>

                  <div className="">
                      <p>
                          Throughout my career, I have gained extensive experience in developing
                          responsive web applications using industry-standard frameworks and best
                          practices. My technical proficiency encompasses HTML5, CSS3, JavaScript,
                          and popular frameworks such as React, Vue, or Angular. I have successfully
                          contributed to projects ranging from enterprise-level applications to
                          dynamic client-facing platforms.
                      </p>
                  </div>

                  <div className="">
                      <p>
                          My development methodology emphasizes clean, maintainable code, adherence
                          to web standards, and a thorough understanding of cross-browser compatibility.
                          I prioritize accessibility, performance optimization, and responsive design
                          principles to ensure optimal user experiences across all devices and platforms.
                      </p>
                  </div>

                  <div className="">
                      <p>
                          I excel in collaborative environments, working closely with designers,
                          back-end developers, and stakeholders to translate vision into reality.
                          My strong problem-solving abilities and attention to detail enable me to
                          deliver solutions that are both technically sound and aligned with project
                          goals.
                      </p>
                  </div>

                  <div className="">
                      <p>
                          Committed to continuous professional development, I actively stay current
                          with emerging technologies and industry trends, ensuring that my skill set
                          remains relevant in the rapidly evolving landscape of web development.
                      </p>
                  </div>
              </section>
          </ExpandableCard>
            <ExpandableCard title="Projects" preview="Selected work">
                <div className="max-h-96 overflow-y-auto pr-2 scrollbar-hide ">
                    <div className="grid grid-cols-3 gap-8">

                        <div className="flex flex-col">
                            <div className="w-full h-64 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center text-white text-lg font-medium mb-4">
                                Project Image 1
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Project Title One</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                A comprehensive web application built with modern technologies.
                                Features responsive design, seamless user experience, and optimized performance.
                            </p>
                        </div>

                        <div className="flex flex-col">
                            <div className="w-full h-64 bg-gradient-to-br from-pink-400 to-red-500 rounded-lg flex items-center justify-center text-white text-lg font-medium mb-4">
                                Project Image 2
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Project Title Two</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                An innovative solution designed to solve real-world problems.
                                Implements best practices in front-end development and user interface design.
                            </p>
                        </div>

                        <div className="flex flex-col">
                            <div className="w-full h-64 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center text-white text-lg font-medium mb-4">
                                Project Image 3
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Project Title Three</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                A dynamic platform showcasing advanced functionality and clean code architecture.
                                Built with accessibility and scalability in mind.
                            </p>
                        </div>

                        <div className="flex flex-col">
                            <div className="w-full h-64 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg flex items-center justify-center text-white text-lg font-medium mb-4">
                                Project Image 4
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Project Title Four</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                A responsive e-commerce platform with real-time inventory management.
                                Integrated secure payment processing and user authentication.
                            </p>
                        </div>

                        <div className="flex flex-col">
                            <div className="w-full h-64 bg-gradient-to-br from-orange-400 to-red-600 rounded-lg flex items-center justify-center text-white text-lg font-medium mb-4">
                                Project Image 5
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Project Title Five</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Interactive dashboard for data visualization and analytics.
                                Features real-time updates and customizable widget layouts.
                            </p>
                        </div>

                        <div className="flex flex-col">
                            <div className="w-full h-64 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-lg font-medium mb-4">
                                Project Image 6
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Project Title Six</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Social media management tool with scheduling and analytics.
                                Built with modern API integration and cloud storage solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </ExpandableCard>
            <ExpandableCard title="Experience" preview="Development path">
                <p>🚀 Project One</p>
                <p>🚀 Project Two</p>
            </ExpandableCard>
            <ExpandableCard title="Beyond Code" preview={`Thinking in systems,\nbuilding hands-on`}>
                <p>🚀 Project One</p>
                <p>🚀 Project Two</p>
            </ExpandableCard>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
