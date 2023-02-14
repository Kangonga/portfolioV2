import { images } from "../../Assets"
import "./Portfolio.scss"

export default function Portfolio (){
    return(
        <>
        <main id="Portfolio">
            <h1>My projects</h1>
            
            <div className="Portfolio-projects">
                <div className="Portfolio__project-List">
                    <figure>
                        <img src={images.Angular} alt="" />
                    </figure>
                    <h4>Modern portfolio</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <div className="Portfolio__project-List">
                    <figure>
                    <img src={images.css} alt="" />
                    </figure>
                    <h4>Modern portfolio</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <div className="Portfolio__project-List">
                    <figure>
                    <img src={images.sass} alt="" />
                    </figure>
                    <h4>Modern portfolio</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

            </div>

        </main>
        </>
    )
}