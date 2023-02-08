import { useState } from "react"
import "./NavBar.css"

export default function NavBar(){
    const [active,setActive] = useState("Home")
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
            </main>   
        </>
    )
}