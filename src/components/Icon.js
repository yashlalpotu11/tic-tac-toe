import React from 'react';
import { FaTimes, FaRegCircle } from "react-icons/fa";
import {GiClick} from "react-icons/gi";

const Icon = ({name}) =>{
    switch (name) {
        case 'circle':
            return <FaRegCircle className="icon"/>

        case 'cross':
            return <FaTimes className="icon"/>
    
        default:
            // return <GiClick className="icon"/>
            return ""
    }
}

export default Icon;

