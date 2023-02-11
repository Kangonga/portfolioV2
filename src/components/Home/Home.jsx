import { useContext, useState } from "react"
import "./Home.scss"
import { AppContext } from "../../App"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Home(){
    const {appContext,setAppContext} = useContext(AppContext)
    const [slideUp, setSlideUp] = useState(false)
    const handleClick = ()=>{
        
    }
    return(
        <>
            <main id="Hero" className={slideUp?"slideUp":""}>
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
                <GitHubIcon />
                <LinkedInIcon />
                </section>
                
                </section>

                
            </main>
        </>
    )
}