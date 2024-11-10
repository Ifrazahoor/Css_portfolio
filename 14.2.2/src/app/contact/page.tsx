import "../contact/contact.css";

export default function Contact(){
    return(
        <main className="contact-main">
            <div className="form-container">
                <h1 className="con-title">Contact Us</h1>
                <form action="" className="form">               
                     <input type="text" placeholder="Entre Your Name" />
                     <input type="email" placeholder="xyz@gmail.com" />
                     <input className="msg" type="text" placeholder="Your Message" />

                </form>
                <button className="btn-sub">Submit</button>
            </div>
        </main>
    )
}