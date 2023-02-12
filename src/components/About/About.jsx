import "./About.scss"

export default function About(){
    return(
    <main id="About">
        <section id="About__Container">
            <section className="About__Container-profile">
                <h1>About me</h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non saepe id alias repellat beatae sunt suscipit exercitationem consequuntur vitae qui. Excepturi, dolorum praesentium velit soluta tempore aperiam adipisci ipsam autem!
                    Nihil itaque quasi enim recusandae, aut eveniet iure aspernatur quisquam temporibus autem quod non in accusamus eius labore error possimus laudantium tempora qui animi dolores voluptas nisi architecto! Omnis, soluta.
                </p>
               
            </section>

            <section className="About__Container-skills">
                <h1>Skills</h1>
                <div className="About__Container-skillsList">
                    <div className="skills-item">html css</div>
                    <div className="skills-item">html css</div>
                    <div className="skills-item">html css</div>
                    <div className="skills-item">html css</div>
                </div>
                
            </section>
        </section>
    </main>
    )
}