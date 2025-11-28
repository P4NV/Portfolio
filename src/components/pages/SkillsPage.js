 export default function SkillsPage(){

    const Skills = [

        { id: 1, name: 'Html', level: 'Advanced' },
        { id: 2, name: 'Css', level: 'Advanced' },
        { id: 3, name: 'JavaScript', level: 'Intermediate' },
        { id: 4, name: 'React', level: 'Intermediate' },
        { id: 5, name: 'TailwindCSS', level: 'Intermediate' },
    ];
    
    return (
        <div>
            
            <div className="flex flex-row gap-6 flex-wrap" >
                    {Skills.map((skill) => (
                        <div
                            key={skill.id}
                            className="bg-gray-800 text-white p-4 rounded flex items-center justify-center "
                        >
                            <h3>{skill.name}</h3>
                            <p className="text-sm">{skill.level}</p>
                        </div>
                    ))}
                </div>

        </div>
    )
    

 }