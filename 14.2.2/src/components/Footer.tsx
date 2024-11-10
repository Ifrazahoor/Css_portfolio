import "@/style/footer.css"
import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


export default function Footer(){
    return(
        <footer>
        <div className="footer">
            <p>© Ifra | 2024 ALL Right Reserved.Media</p>
            <div className="footer-col">
            <h4 className="folow">Follow us</h4>
            <div className="social-links">
<a href="#"><FaFacebook  className="links"/>
</a>
<a href="#"><FaSquareInstagram  className="links"/>
</a>
<a href="#"><FaXTwitter className="links" />
</a>
<a href="#"><FaLinkedin  className="links"/>
</a>
            </div>
        </div>
        </div>
    
        </footer>
    )
}