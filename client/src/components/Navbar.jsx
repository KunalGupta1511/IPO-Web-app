import { useState } from "react"
import { Link , useNavigate} from "react-router-dom";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [navOpen, setNavOpen] = useState(false);
    const navigate = useNavigate();

    function toggleMenu() {
        setMenuOpen(preValue => !preValue);
    }

    function toggleNavbar() {
        setNavOpen(preValue => !preValue);
    }
    return <>
        <nav>
            <div className="logo-container">
                <img src="./src/assets/logo.png" alt="BlueStock Logo" className="logo" />
                <div className="main-title">BlueStock</div>
            </div>
            <ul className={`nav-list ${navOpen ? "activate" : ""}`}>
                <li className="nav-links">IPO</li>
                <li className="nav-links">Community</li>
                <li className="nav-links products">Products <svg width="11" height="5" viewBox="0 0 11 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.69733 5L10.6314 0.5H0.763298L5.69733 5Z" fill="#9A9A9A" />
                </svg>
                </li>
                <li className="nav-links brokers">Brokers<svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.92188 -1.19071e-07L3.25805 1.12002L7.05993 5.46503L8.92188 -1.19071e-07ZM0.921875 7L1.25113 7.37629L5.86453 3.33956L5.53528 2.96327L5.20603 2.58698L0.592623 6.62371L0.921875 7Z" fill="#9A9A9A" />
                </svg>
                </li>
                <li className="nav-links news">Live News<button>NEW</button></li>
            </ul>
            <div className={`signIn-signUp ${menuOpen ? "activate" : navOpen ? "join" : ""}`}>
                <button className="sign-in"onClick={()=>{navigate("/signin")}}>Sign In</button>
                <button className="sign-up" onClick={()=>{navigate("/signup")}}>Sign Up Now</button>
            </div>
            <svg onClick={toggleMenu} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.41992 2.39062H6.29492C5.43213 2.39062 4.73242 3.09033 4.73242 3.95312V7.07812C4.73242 7.94092 5.43213 8.64062 6.29492 8.64062H9.41992C10.2827 8.64062 10.9824 7.94092 10.9824 7.07812V3.95312C10.9824 3.09033 10.2827 2.39062 9.41992 2.39062ZM9.41992 10.2031H6.29492C5.43213 10.2031 4.73242 10.9028 4.73242 11.7656V14.8906C4.73242 15.7534 5.43213 16.4531 6.29492 16.4531H9.41992C10.2827 16.4531 10.9824 15.7534 10.9824 14.8906V11.7656C10.9824 10.9028 10.2827 10.2031 9.41992 10.2031ZM9.41992 18.0156H6.29492C5.43213 18.0156 4.73242 18.7153 4.73242 19.5781V22.7031C4.73242 23.5659 5.43213 24.2656 6.29492 24.2656H9.41992C10.2827 24.2656 10.9824 23.5659 10.9824 22.7031V19.5781C10.9824 18.7153 10.2827 18.0156 9.41992 18.0156ZM18.7949 2.39062H15.6699C14.8071 2.39062 14.1074 3.09033 14.1074 3.95312V7.07812C14.1074 7.94092 14.8071 8.64062 15.6699 8.64062H18.7949C19.6577 8.64062 20.3574 7.94092 20.3574 7.07812V3.95312C20.3574 3.09033 19.6577 2.39062 18.7949 2.39062ZM18.7949 10.2031H15.6699C14.8071 10.2031 14.1074 10.9028 14.1074 11.7656V14.8906C14.1074 15.7534 14.8071 16.4531 15.6699 16.4531H18.7949C19.6577 16.4531 20.3574 15.7534 20.3574 14.8906V11.7656C20.3574 10.9028 19.6577 10.2031 18.7949 10.2031ZM18.7949 18.0156H15.6699C14.8071 18.0156 14.1074 18.7153 14.1074 19.5781V22.7031C14.1074 23.5659 14.8071 24.2656 15.6699 24.2656H18.7949C19.6577 24.2656 20.3574 23.5659 20.3574 22.7031V19.5781C20.3574 18.7153 19.6577 18.0156 18.7949 18.0156Z" fill="black" />
            </svg>
            <div className="images">
                <img src="./src/assets/search_icon.png" alt="search icon" className="search icon" />
                <img onClick={toggleNavbar} src="./src/assets/menu.png" alt="menu icon" className="icon" />
            </div>
        </nav>
    </>
}