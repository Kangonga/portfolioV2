import { useState } from "react"
import "./NavBar.scss"

export default function NavBar(){
    const [active,setActive] = useState("Home")
    const [isTabOpen,setTabOpen] = useState(false)
    return (
        <>
            <main id="NavBar__main">
                <ul id="NavList" >
                    {["Home","About","Work","Portfolio","Contact"].map((item,index)=>{
                        return <li key={`${item} ${index}`} className="NavBar__list-item">
                                <a
                                 onClick={()=>setActive(item)}
                                 href={`#${item}`}
                                 className={active===item?"NavBar__list-active":""}
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
                                onClick={()=>setActive(item)}
                                href={`#${item}`}
                                className={active===item?"NavBar__list-active":""}
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