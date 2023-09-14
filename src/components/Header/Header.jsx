import "./Header.css";
import Logo from "../../images/Logo.svg"

const Header = () => {
  return (
    <nav className="navbar">
        <div className="logo">
            <img src={Logo} alt="logo" />
        </div>
        <ul className="navbar-menu">
            <li><a href="#">Order</a></li>
            <li><a href="#">Order Review</a></li>
            <li><a href="#">Manage Inventory</a></li>
            <li><a href="#">Login</a></li>
        </ul>
    </nav>
  )
}

export default Header