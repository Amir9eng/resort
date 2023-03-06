import logo from "../../assets/logo.png"
import {NavLink} from "react-router-dom"

const Navbar = () => {
  return <nav>
    <div className="logo">
      <img className="h-full w-full" src={logo} alt="" />
    </div>
    <ul className="nav-links">
      <li className="nav-link"><NavLink to="/">Home</NavLink></li>
      <li className="nav-link"><NavLink to="/about">About</NavLink></li>
      <li className="nav-link"><NavLink to="/packages">Packages</NavLink></li>
      <li className="nav-link"><NavLink to="/attraction">Attraction</NavLink></li>
      <li className="nav-link"><NavLink to="events">Events and Meetings</NavLink></li>
      <li className="nav-link"><NavLink to="food">Food Court</NavLink></li>
      <li id="nav-cta" className="nav-link"><NavLink to="reservation">Reservation</NavLink></li>
    </ul>
  </nav>;
};

export default Navbar;
