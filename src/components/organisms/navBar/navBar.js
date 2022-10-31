import React from "react";
import { Link, Outlet } from "react-router-dom";
import routeNames from "../../../routesNames";
import "./navBar.css";

const NavBar = () => (
  <div id="page">
    <div id="navBar">
      <div id="navBarContainer">
        <h1>Nurato</h1>
        <ul id="navBarLinksContainer">
          <li>
            <Link to={routeNames.home}>Home</Link>
          </li>
          <li>
            <Link to={routeNames.contact}>Contact</Link>
          </li>
          <li>
            <Link to={routeNames.myWork}>My projects</Link>
          </li>
        </ul>
      </div>
    </div>
    <div id="pageContent">
      <Outlet />
    </div>
  </div>
);
export default NavBar;
