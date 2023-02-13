import "./Contact.scss"

export default function Contact() {
    return(
        <main id="Contact">
            <h1>Contact</h1>
            <h2>I would love to hear from you</h2>

            <form action="" id="Contact-form">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email"/>
                <input type="text" placeholder="subject"/>
                <textarea rows="3" cols="50" type="text" placeholder="message"/>
            </form>
        </main>
    )
}