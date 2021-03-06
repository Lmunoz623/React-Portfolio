import React from "react";
import { Link, useLocation } from "react-router-dom";
function Navbar() {
    const location = useLocation();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
                <span className="navbar-toggler-icon"></span>
            </button>
             <div className="collapse navbar-collapse" id="navbarMenu">
                 <ul className="navbar-nav ml-auto">
                     <li className="nav-item">
                         <Link to="/about" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                             About
                         </Link>
                     </li>
                    <li className="nav-item">
                        <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                            Portfolio
                        </Link>                    
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                            Contact
                        </Link>                    
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;