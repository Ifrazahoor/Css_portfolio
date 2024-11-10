import "../about/about.css";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaPython } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";




import Image from "next/image"
import Link from "next/link";



export default function About(){
    return(
        <div className="about">
            <div className="img">
<Image src={"/pi.jpg"} alt="pic" height={200} width={200} className="imag"/>
            </div>
            <div className="aboutsec">
                <div className="h1about">
                    <h1>ABOUT</h1>
                </div>
                <div className="h3head">
                    <h3>i,m Professional Web Designer And & Developer</h3>
                </div>
                <div className="paraabout">
                    <p>I,m Ifra Zahoor, a professional UI/UX designer with a passion for creating intuitive and engaging digital experiences. I specialize in crafting user interfaces that are both visually appealing and highly functional, ensuring a seamless interaction between users and the product. My approach is driven by a deep understanding of user behavior, focusing on making interfaces intuitive, easy to navigate, and aesthetically aligned with the brand. By conducting thorough user research, wireframing, and prototyping, I ensure that every design decision enhances usability and meets user needs. My goal is to create designs that not only look great but also deliver a superior user experience, making every interaction meaningful.

</p>
                </div>
                <div className="para2">
                    <p>I,m a professional web designer and developer with a passion for creating visually appealing and highly functional websites. I specialize in using modern web technologies like HTML, CSS, and JavaScript to design responsive, user-friendly interfaces. My approach focuses on blending aesthetics with performance to deliver seamless digital experiences. Whether it's building from scratch or revamping an existing site, I ensure each project is tailored to my client's unique needs. My goal is to craft websites that not only look great but also provide excellent usability and engagement.</p>
                </div>
                <div className="btnabout">
                <Link href={"/.cv"}><button className="btnabout1">Download CV</button></Link>
                </div>
                <div className="skills">
                    <h1 className="sub-title">My <span>Skills</span></h1>
                    <section>
                        <div className="container1" id="skills">
                            <h1 className="heading">Technical Skills</h1>
                            <div className="technical-bars">
                                <div className="bar"><FaHtml5 />
                                <div className="indfo">
                                    <span>HTML</span>
                                    </div>
                            
                            <div className="progress-line html">
                                <span></span>
                                </div>
                            </div>
                            
                                <div className="bar"><FaCss3Alt />
                                 <div className="indfo">
                                    <span>CSS</span>
                            </div>
                            <div className="progress-line css">
                                <span></span>
                            </div>
                            </div>
                                <div className="bar"><TbBrandJavascript />
                                <div className="indfo">
                                    <span>JavaScript</span>
                            </div>
                            <div className="progress-line javascript">
                                <span></span>
                            </div>
                            </div>
                                <div className="bar"><FaPython />
                                <div className="indfo">
                                    <span>Python</span>
                            </div>
                            <div className="progress-line python">
                                <span></span>
                            </div>
                            </div>
                                <div className="bar"><FaReact />
                                <div className="indfo">
                                    <span>React</span>
                            </div>
                            <div className="progress-line react">
                                <span></span>
                            </div>
                            </div>
                        </div>
                        </div>
                        
                    </section>
                </div>
            </div>
        </div>
    )
}