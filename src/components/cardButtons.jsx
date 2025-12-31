import { useState } from "react";


import "./cardButtons.css";



export default function Cardbuttons(props) {

    // const handleClick = (URL) => {
    //     window.open(URL, "_blank");
    // }
    // onClick={() => handleClick(props.url)}
    
    const [expanded,setExpanded] = useState(false);
    const [animating, setAnimating] = useState(false)

    function handleClick(){
        if(animating) return; // prevent double-click while animating

        setAnimating(true);
        setExpanded(prev => !prev);

        // Remove animation class after it finishes
        setTimeout(() => {
            setAnimating(false);
        }, 1300); // matches animation duration
    }
    

    return (
        <div
            className={`card-button ${expanded ? "expanded-card-button" 
                     : animating ? "collapsing-card-button" : "" }`}
            onClick={handleClick}>

            <h1>{props.title}</h1>
            <p>{props.description}</p>

        </div>
    )

}
