import {useState} from 'react';
import React from 'react';

import "./Table.css"
import Border from "../Border/Border.js"
import Home from "../Home/Home.js";
import Project from '../Projects/Projects.js';
import Experience from '../Experience/Experience.js';

export default function Table(){
    const [containt, setContaint] = useState(<Home />);

    function handleClick(containPage){
        switch(containPage){
            case "Home":
                setContaint(<Home />);
                break;
            case "Experience":
                setContaint(<Experience />);
                break;
            case "Projects":
                setContaint(<Project />);
                break;
            defalt:
                setContaint(<Home />);
        }
    }

    return(
        <table className = "fullSize">
            <tr className = "fullSize">
                <td className = "leftCol">{containt}</td>
                <td className = "rightCol">
                    <Border size={"small"} content={
                        <div className="listGroup">
                            <div className = "list" onClick={() => {handleClick("Home")}}>Home</div>
                            <div className = "list" onClick={() => {handleClick("Experience")}}>Experience</div>
                            <div className = "list" onClick={() => {handleClick("Projects")}}>Projects</div>
                        </div>
                    } />
                </td>
            </tr>
        </table>
    );
}