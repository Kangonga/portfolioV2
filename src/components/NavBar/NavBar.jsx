import { useState,useContext } from "react"
import "./NavBar.scss"
import { AppContext } from "../../App"

export default function NavBar(){
    const {appContext,setAppContext} = useContext(AppContext)
    const [isTabOpen,setTabOpen] = useState(false)
    return (
        <>
            <main id="NavBar__main">
                <ul id="NavList" >
                    {["Home","About","Work","Portfolio","Contact"].map((item,index)=>{
                        return <li key={`${item} ${index}`} className="NavBar__list-item">
                                <a
                                 onClick={()=>setAppContext({...appContext, activeTab:item})}
                                 href={`#${item}`}
                                 className={appContext.activeTab===item?"NavBar__list-active":""}
                                 >
                                    {item}
                                </a>
                            </li>
                    })
                    }
                </ul>
                <section id="NavBar__dropdown" >
                    <button onClick={()=>setTabOpen(!isTabOpen)}>{isTabOpen?"Close":"Show"}</button>
                    {isTabOpen &&<ul id="NavBar__dropdown-list" >
                   {["Home","About","Work","Portfolio","Contact"].map((item,index)=>{
                       return <li key={`${item} ${index}`} className="NavBar__dropdown-item">
                               <a
                                 onClick={()=>setAppContext({...appContext, activeTab:item})}
                                 href={`#${item}`}
                                 className={appContext.activeTab===item?"NavBar__list-active":""}
                                >
                                   {item}
                               </a>
                           </li>
                   })
                   }
               </ul>}
                </section>
                

            </main>   
        </>
    )
}