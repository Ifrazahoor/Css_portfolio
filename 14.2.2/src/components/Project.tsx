import "../style/project.css";
import Image from "next/image";
export default function Project(){
    return(
        <div className="projects">
            <div className="heading-projects">
                <h1>My Projects</h1>
                <div className="Project1">
                    <div className="box1">
                        <div className="headingportfolio">
                            <h4>Startup</h4>
                        </div>
                        <Image src={"/bign.jpg"} alt="dynamic" height={200} width={200} className="imag"/>
                    </div>
                    <div className="box1">
                        <div className="headingspotify">
                            <h4>Beginner</h4>
                        </div>
                        <Image src={"/bi.jpg"} alt="resume" height={200} width={200} className="imag"/>
                    </div>
                    <div className="box1">
                        <div className="headingecommerce">
                            <h4>Expert</h4>
                        </div>
                        <Image src={"/expert.jpg"} alt="food" height={200} width={200} className="imag"/>
                    </div>
                </div>
            </div>
        </div>
    )
}