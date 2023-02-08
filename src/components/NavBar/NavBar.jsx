export default function NavBar(){
    return (
        <>
            <main id="NavBar__main">
                <ul id="NavList" >
                    {["Home","About","Work","Portfolio","Contact","Footer"].map((item,index)=>{
                        return <li key={`${item} ${index}`} className="NavBar__list-item">
                                <div> </div>
                                <span>{item}</span>
                            </li>
                    })
                    }
                </ul>
            </main>   
        </>
    )
}