import { useContext, useState } from "react"

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Navigate, useNavigate } from "react-router-dom";

import "./Home.scss"
import { AppContext } from "../../App"

export default function Home(){
    const {appContext,setAppContext} = useContext(AppContext)
    const navigate = useNavigate()
    const handleClick = (e)=>{
        // if(e.target.id=="gitIcon"){
        //     navigate("https://github.com/Kangonga")
        // }
        console.log(e?.target.id)
    }
    return(
        <>
            <main id="Hero" >
                <section id="Hero__Text-Container">
                    <p className="Hero__Text-intro">Hello, World.</p>

                    <p className="Hero__Text-main">I am Kevin</p>

                    <p className="Hero__Text-subtext">
                        | Full stack software Engineer |
                    </p>
                    <a
                        className="Hero__link-aboutMe" 
                        href="#About" onClick={()=>{handleClick();setAppContext({...appContext,activeTab:"About"})}}>
                    About me &gt;&gt;
                </a>
                <section className="Hero-icons">
                <a href="https://github.com/Kangonga">
                <GitHubIcon id="gitIcon"/>
                </a>
                <a href="www.linkedin.com/in/kevin-guchu">
                <LinkedInIcon id="linkedInIcon"/>
                </a>
                </section>
                
                </section>

                
            </main>
        </>
    )
}