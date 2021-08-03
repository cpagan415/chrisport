import React from 'react';
import '../../App.css';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { SiIndeed } from "react-icons/si";


function Footer(){
    return (
        <>
        <div class="footerContainer">
            <FaGithub class="icon" />
            <FaLinkedinIn class="icon" />
            <SiIndeed class="icon"/>
            </div>
        </>
    )
}

export default Footer;
