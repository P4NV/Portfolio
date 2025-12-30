import { ButtonGroup,Button } from "@heroui/react";


export default function Head() {

    return ( 
        <>
            <div className="head-content mt-10">
                <h1 className="text-5xl">Front-End Developer</h1>
                <ButtonGroup className='pt-3' variant="outlined" size="lg" hideSeparator  >
                    <Button href="#projects" className="text-white px-5">git</Button>
                    <Button href="#technologies" className="text-white px-5">linked</Button>
                    <Button href="#about" className="text-white px-5 ">email</Button>
                </ButtonGroup>   
            </div>    
        </>
    )


}