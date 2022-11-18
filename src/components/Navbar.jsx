import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from "../assets/home-logo.png"

function Navbar(props) {


    return (
        <nav className="navbar">
            <Link to={"/"}>
                <img src={logo} alt="logo" className="logo-nav"/>
            </Link>
        </nav>
    )
}

export default Navbar