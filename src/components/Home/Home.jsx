import { useContext } from "react"

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import "./Home.scss"
import { AppContext } from "../../App"

export default function Home(){
    const {appContext,setAppContext} = useContext(AppContext)
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
                        href="#About" onClick={()=>{setAppContext({...appContext,activeTab:"About"})}}>
                    About me &gt;&gt;
                </a>
                <section className="Hero-icons">
                    <a href="https://github.com/Kangonga">
                        <GitHubIcon id="gitIcon" style={{color: "red"}}/>
                    </a>
                    <a href="https://linkedin.com/in/kevin-guchu">
                        <LinkedInIcon id="linkedInIcon" />
                    </a>
                </section>
                
                </section>

                
            </main>
        </>
    )
}