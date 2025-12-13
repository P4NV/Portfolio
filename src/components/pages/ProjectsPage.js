

export default function Projects(){

    const Projects = [
        { id: 1, title: 'Project 1', description: 'Description for project 1' },
        { id: 2, title: 'Project 2', description: 'Description for project 2' },
        { id: 3, title: 'Project 3', description: 'Description for project 3' },
        { id: 4, title: 'Project 4', description: 'Description for project 4' },
        { id: 5, title: 'Project 5', description: 'Description for project 5' },
        { id: 6, title: 'Project 6', description: 'Description for project 6' },
        { id: 7, title: 'Project 7', description: 'Description for project 7' },
        { id: 8, title: 'Project 8', description: 'Description for project 8' },
        { id: 9, title: 'Project 9', description: 'Description for project 9' },
        { id: 10, title: 'Project 10', description: 'Description for project 10' },
        { id: 11, title: 'Project 11', description: 'Description for project 11' },
        { id: 12, title: 'Project 12', description: 'Description for project 12' },
        { id: 13, title: 'Project 13', description: 'Description for project 13' },
        { id: 14, title: 'Project 14', description: 'Description for project 14' },
        { id: 15, title: 'Project 15', description: 'Description for project 15' },
    ];
    
    return (
        <div>
            <h1 className="text-white text-center mt-10">Projects Page</h1>
            <div className="container mx-auto px-4 mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Projects.map((project) => (
                        <div
                            key={project.id}
                            className=" bg-white bg-opacity-10 shadow-inner shadow-white text-white p-4 rounded flex flex-col items-center justify-center"
                        >
                            <div>
                                <h3>{project.title}</h3>
                                <p className="text-sm">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

}