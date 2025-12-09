import Mail from "../public/icons/mail.png"
import GitHub from "../public/icons/github.png"
import Contact from "../public/icons/telephone.png"
import MailWhite from "../public/icons/mailWhite.png"
import GitHubWhite from "../public/icons/githubWhite.png"
import ContactWhite from "../public/icons/telephoneWhite.png"

export default function Header() {
    
    return (
        <>
            <div className="w-2/5 h-16  mt-16 rounded-3xl flex items-center 
                            bg-transparent shadow-inner shadow-white"  >

                <h1 className="text-3xl text-white m-auto">Front-End developer</h1>
                
            </div>
            <div className="Icons flex gap-6 text-white shadow-inner shadow-white bg-white bg-opacity-10 px-6 py-1  rounded-3xl mt-4">

                <a id="Mail-Icon" href="mailto:ex000static@gmail.com" target="_blank" className="">
                    <img src={Mail} className="icon base" alt="mail" width="40" />
                    <img src={MailWhite} className="icon hover" alt="mail hover" width="40" />
                </a>

                <a id="Git-Icon" href="https://github.com/P4NV" target="_blank">
                    <img src={GitHub} className="icon base" alt="github" width="40"  />
                    <img src={GitHubWhite} className="icon hover" alt="github hover" width="40"  />
                </a>

                <a id="Phone-Icon" href="tel:+385958187670" target="_blank">
                    <img src={Contact} className="icon base" alt="contact" width="40" />
                    <img src={ContactWhite} className="icon hover" alt="contact hover" width="40" />
                </a>

            </div>
        </>
    );


}