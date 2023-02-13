import "./About.scss"
import {images} from "../../Assets"
import cv from "../../Assets/KevinCV.pdf"

export default function About(){
    return(
    <main id="About">
        <section id="About__Container">
            <section className="About__Container-profile">
                <h1>About me</h1>
                <p>
                    Hi there! My name is Kevin Guchu.
                    I help businesses, agencies and designers bring their concepts to life using code. 
                </p>
                <br />
               <p>
                    Being adaptable, whether to new technologies and situations. is very important to me, thus I am always learning something new. And I enjoy it.
               </p>
            </section>

            <section className="About__Container-skills">
                <h1>Skills</h1>
                <p>
                These are some of my most used tools of trade.

                </p>
                <div className="About__Container-skillsList">
                        <figure>
                            <img src={images.javascript} alt="" />
                        </figure>
                        <figure>
                            <img src={images.node} alt="" />
                        </figure>
                        <figure>
                            <img src={images.react} alt="" />
                        </figure>
                        <figure>
                            <img src={images.Angular} alt="" />
                        </figure>
                        <figure>
                            <img src={images.typescript} alt="" />
                        </figure>
                </div>
                
            </section>

            
        </section>
        <section className="About__links">
                <a href={cv}  target="_blank" rel="noreferrer">
                    Download cv
                </a>
                <a href="#Contact">
                    Contact me
                </a>
        </section>
    </main>
    )
}