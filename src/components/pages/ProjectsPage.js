export default function Projects(){

    return (
        <div>

            <h1 className="text-white text-center mt-10">Projects Page</h1>
            <div className="container mx-auto px-4 mt-8">
                <div className="grid grid-rows-5 grid-cols-3 gap-4">
                    {Array.from({ length: 15 }).map((_, i) => (
                        <div
                            key={i}
                            className="bg-gray-800 text-white p-4 rounded flex items-center justify-center"
                        >
                            Item {i + 1}
                        </div>
                    ))}
                </div>
            </div>
        
        
        </div>

    )

}