import { useContext } from "react"
import "./Home.scss"
import { AppContext } from "../../App"

export default function Home(){
    const {appContext,setAppContext} = useContext(AppContext)
    return(
        <>
            <main id="Hero">
                <section id="Hero__Text-Container">
                    <p className="Hero__Text-intro">Hello, World.</p>

                    <p className="Hero__Text-main">I am Kevin</p>

                    <p className="Hero__Text-subtext">
                        | Full stack software Engineer |
                    </p>
                
                </section>

                <a href="#About" onClick={()=>setAppContext({...appContext,activeTab:"About"})}>About me</a>
            </main>
        </>
    )
}