import { ButtonGroup,Button } from "@heroui/react";
import './head.css'


export default function Head() {
    const whiteGit = "https://github.com/P4NV";
    const whiteLink = "https://www.linkedin.com/in/antonio-pavin-764383335/";
    const whiteMail = "mailto:ex000static@gmail.com";

    return ( 
        <>
            <div className="head-content mt-10">
                <h1 className="text-5xl ">Front-End Developer</h1>
                <hr/>
                <ButtonGroup className='buttonGroup pt-6' variant="outlined" size="lg" hideSeparator  >
                    <Button onClick={() => window.open(whiteGit, '_blank')} className="social-B-1 text-white px-5"><img src="../src/assets/github.png" alt="Github"  /></Button>
                    <Button onClick={() => window.open(whiteLink, '_blank')} className="social-B-2 text-white px-5"><img src="../src/assets/linkedin-sign.png" alt="LinkedIn" /></Button>
                    <Button onClick={() => window.open(whiteMail, '_blank')} className="social-B-3 text-white px-5 "><img src="../src/assets/mail.png" alt="Email" /></Button>
                </ButtonGroup>   
            </div>    
        </>
    )
}
