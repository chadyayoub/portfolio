import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navBar.css";

const NavBar = () => (
  <Fragment>
    <div className="navBar">
      <h1>Jhon doe</h1>
      <ul className="navBarLinksContainer">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
    <div className="pageContent">
      <Outlet />
    </div>
  </Fragment>
);
export default NavBar;
