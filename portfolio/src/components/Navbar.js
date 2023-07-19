import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";

function Navbar() {
  const [isNavbarExpanded, setNavbarExpanded] = useState(false);

  const currentLocation = useLocation();

  useEffect(() => {
    setNavbarExpanded(false);
  }, [currentLocation]);

  return (
    <div className="navbar" id={isNavbarExpanded ? "open" : "close"}>
      <div className="toggleIcon">
        <button
          onClick={() => {
            setNavbarExpanded((prevState) => !prevState);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="navLinks">
        <Link to="/"> Home </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/bio"> Bio </Link> 
      </div>
    </div>
  );
}

export default Navbar;
