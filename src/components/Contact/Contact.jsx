import { useContext } from "react"
import { AppContext } from "../../App"
import "./Contact.scss"

export default function Contact() {
    const {visitorData,setVisitorData} = useContext(AppContext)

    const handleSubmit = (e)=>{
        e.preventDefault()
        // console.log(visitorData)
        setVisitorData({
            name:"",
            email:"",
            subject:"",
            message:"",
        })
    }
    const handleChange = (e)=>{
        setVisitorData({
            ...visitorData,
            [e.target.name]:e.target.value
        })
    }
    return(
        <main id="Contact">
            <h1>Contact</h1>
            <h2>I would love to hear from you</h2>

            <form id="Contact-form" onSubmit={handleSubmit}>
                <input name="name" value={visitorData.name}type="text" placeholder="Name"  onChange={handleChange}/>
                <input name="email" value={visitorData.email}type="email" placeholder="Email" onChange={handleChange}/>
                <input name="subject" value={visitorData.subject}type="text" placeholder="subject" onChange={handleChange}/>
                <textarea name="message" value={visitorData.message}rows="3" cols="50" type="text" placeholder="message" onChange={handleChange}/>
                <button>Submit</button>
            </form>
        </main>
    )
}