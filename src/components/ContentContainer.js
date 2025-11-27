


export default function ContentContainer(){

    return(

        <>
        <table className="w-3/5 m-auto mt-16">
            <tbody>
                <tr>
                    <td className="w-1/2 border-2 p-4 rounded-3xl bg-gray-800">
                        <h2 className="text-2xl text-white">About Me</h2>
                        <p className="text-white">This is a brief introduction about myself.</p>
                    </td>
                    <td className="w-1/2 border-2 p-4 rounded-3xl bg-gray-800">
                        <h2 className="text-2xl text-white">Skills</h2>
                        <p className="text-white">Here are some of my skills and expertise.</p>
                    </td>
                </tr>
                <tr>
                    <td className="w-1/2 border-2 p-4 rounded-3xl bg-gray-800 mt-4">
                        <h2 className="text-2xl text-white">Projects</h2>
                        <p className="text-white">Here are some of the projects I've worked on.</p>
                    </td>
                </tr>
                <tr>
                    <td className="w-1/2 border-2 p-4 rounded-3xl bg-gray-800 mt-4">
                        <h2 className="text-2xl text-white">Contact</h2>
                        <p className="text-white">Feel free to reach out to me!</p>
                    </td>
                </tr>
            </tbody>
        </table>
        </>

    )

}