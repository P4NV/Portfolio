import { useEffect } from 'react';

export default function SkillsPage(){

    const Skills = [
        { id: 1, name: 'Html', level: 'Advanced', Image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
        { id: 2, name: 'Css', level: 'Advanced', Image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"},
        { id: 3, name: 'JavaScript', level: 'Intermediate', Image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
        { id: 4, name: 'React', level: 'Intermediate', Image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { id: 5, name: 'TailwindCSS', level: 'Intermediate', Image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    ];
    
    // useEffect(() => {
    //     startSkillsLoop();
    //     return () => stopSkillsLoop();
    // }, []);
    

    // function startSkillsLoop() {
    //     const container = document.querySelector('.skills-container');
    //     if (!container || container.dataset.skillsLoopActive) return;
    //     container.dataset.skillsLoopActive = '1';

    //     // Save originals so we can restore later
    //     const originals = Array.from(container.children).map(n => n.cloneNode(true));

    //     // Build wrapper and track
    //     const wrapper = document.createElement('div');
    //     wrapper.className = 'skills-marquee-wrapper';
    //     wrapper.style.width = '100%';
    //     wrapper.style.overflow = 'hidden';
    //     wrapper.style.position = 'relative';

    //     const track = document.createElement('div');
    //     track.className = 'skills-marquee-track';
    //     track.style.display = 'flex';
    //     track.style.gap = '1rem';
    //     track.style.alignItems = 'center';
    //     track.style.willChange = 'transform';
    //     track.style.backfaceVisibility = 'hidden';
    //     track.style.transform = 'translate3d(0,0,0)';

    //     // Append two sets of items (clones) to create seamless loop
    //     originals.forEach((n) => track.appendChild(n.cloneNode(true)));
    //     originals.forEach((n) => track.appendChild(n.cloneNode(true)));

    //     wrapper.appendChild(track);

    //     // Replace container children with wrapper (store originals on container for stop)
    //     container.innerHTML = '';
    //     container.appendChild(wrapper);
    //     container.__skillsOriginals = originals;

    //     // Ensure styles exist and compute duration dynamically for consistent speed
    //     if (!document.getElementById('skills-marquee-styles')) {
    //         const s = document.createElement('style');
    //         s.id = 'skills-marquee-styles';
    //         s.textContent = `
    //             @keyframes skills-marquee {
    //                 from { transform: translate3d(0,0,0); }
    //                 to { transform: translate3d(-50%,0,0); }
    //             }
    //             .skills-marquee-track {
    //                 display: flex;
    //             }
    //         `;
    //         document.head.appendChild(s);
    //     }

    //     // Wait for layout so scrollWidth is correct
    //     requestAnimationFrame(() => {
    //         // total width of one set (half of track because we doubled)
    //         const totalTrackWidth = track.scrollWidth;
    //         const oneSetWidth = totalTrackWidth / 2 || 1;

    //         // speed in px per second (adjust for desired speed)
    //         const speed = 60; // px/s
    //         const duration = (oneSetWidth + 0) / speed; // seconds to move one set width

    //         // Apply animation using pixel-based transform to avoid fractional percent rounding
    //         track.style.animation = `skills-marquee ${duration}s linear infinite`;
    //         // Ensure keyframes move exactly by pixel width using inline animation via transform on loop using CSS var fallback
    //         // Using translate3d(-50%,0,0) in keyframes is fine because we duplicated content equally.
    //     });
    // }

    // function stopSkillsLoop() {
    //     const container = document.querySelector('.skills-container');
    //     if (!container || !container.dataset.skillsLoopActive) return;
    //     delete container.dataset.skillsLoopActive;

    //     // Restore originals if stored
    //     const originals = container.__skillsOriginals;
    //     if (originals && originals.length) {
    //         container.innerHTML = '';
    //         originals.forEach(n => container.appendChild(n.cloneNode(true)));
    //         delete container.__skillsOriginals;
    //     } else {
    //         // fallback: clear wrapper
    //         const wrapper = container.querySelector('.skills-marquee-wrapper');
    //         if (wrapper) container.removeChild(wrapper);
    //     }
    // }

    
    return (
        <div>
            <div className="skills-container flex flex-row gap-10 flex-nowrap overflow-hidden ">
                {Skills.map((skill) => (
                    <div key={skill.id} className="skill-item flex flex-col items-center justify-center gap-2">
                        <span className="">{skill.name}</span>
                        <div
                            className="w-24 h-24 "
                            style={{ backgroundImage: `url(${skill.Image})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
