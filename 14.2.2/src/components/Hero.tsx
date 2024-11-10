import "@/style/hero.css"
import Image from "next/image"
import Link from "next/link"


export default function Hero(){
    return(
    
<div className="header-container">
    <div className="header-boxes-con">
        {/*left*/}
        <div>
            <Image src={"/pic3.png"} alt="Ai" width={200} height={200} className="header-image" />
        </div>
        {/*right*/}
<div className="hero-right-div">
    <h1 className="title-hero">I am Ifra Zahoor Front-End Developer</h1>
    <p className="des-hero">A front-end developer is responsible for creating the visual and interactive elements of a website or web application. They use technologies like HTML, CSS, and JavaScript to build responsive, 
user-friendly interfaces that provide an engaging experience.</p>
 <div className="btnnav">
 <Link href={"/.contact"}><button className="hero-btn">Contact Me</button></Link>
 </div>
</div>
    </div>
</div>

        
    )
}