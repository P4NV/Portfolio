


export default function ContentContainer(){

    return (
        <>
            <table className="h-4/6 w-8/12 table-fixed border-separate border-spacing-y-4 border-spacing-x-8  m-auto p-2 ">
                <tbody >
                    <tr>
                        <td className="card border border-white text-center w-1/2 text-white " >
                            <div className="card-inner">
                                <h2>About Me</h2>
                                <p>This is a brief introduction about myself.</p>
                            </div>
                        </td>
                        <td className="card border border-white text-center w-1/2 text-white">
                            <div className="card-inner">
                                <h2>Skills</h2>
                                <p>Here are some of my skills and expertise.</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="card border border-white text-center w-1/2 text-white">
                            <div className="card-inner">
                                <h2>Projects</h2>
                                <p>Here are some of the projects I've worked on.</p>
                            </div>
                        </td>
                        <td className="card border border-white text-center w-1/2 text-white">
                            <div className="card-inner">
                                <h2>Skills</h2>
                                <p>Here are some of my skills and expertise.</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="card border border-white text-center w-1/2 text-white">
                            <div className="card-inner">
                                <h2>Contact</h2>
                                <p>Feel free to reach out to me!</p>
                            </div>
                        </td>
                        <td className="card border border-white text-center w-1/2 text-white">
                            <div className="card-inner">
                                <h2>Skills</h2>
                                <p>Here are some of my skills and expertise.</p>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )

}