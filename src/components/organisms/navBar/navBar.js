import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import routeNames from "../../../routesNames";
import { motion } from "framer-motion";
import Particles from "../../atoms/particles/particles";
import "./navBar.css";

const NavBar = () => {
  const [selected, setSelected] = useState(routeNames.home);

  return (
    <>
      <div id="page">
        <div id="background" />
        <div id="responsive">Eh l website responsive mr george</div>
        <Particles />
        <motion.div
          id="navBar"
          initial={{ y: -50, rotateX: -90 }}
          transition={{ duration: 0.5 }}
          animate={{ y: 0, rotateX: 0 }}
        >
          <div id="navBarContainer">
            <h1>Chady Ayoub</h1>
            <ul id="navBarLinksContainer">
              <li
                style={
                  selected === routeNames.home
                    ? { backgroundColor: "#fff8", color: "#000" }
                    : {}
                }
              >
                <Link
                  onClick={() => setSelected(routeNames.home)}
                  to={routeNames.home}
                >
                  Home
                </Link>
              </li>
              <li
                style={
                  selected === routeNames.contact
                    ? { backgroundColor: "#fff8", color: "#000" }
                    : {}
                }
              >
                <Link
                  onClick={() => setSelected(routeNames.contact)}
                  to={routeNames.contact}
                >
                  Contact
                </Link>
              </li>
              <li
                style={
                  selected === routeNames.myWork
                    ? { backgroundColor: "#fff8", color: "#000" }
                    : {}
                }
              >
                <Link
                  onClick={() => setSelected(routeNames.myWork)}
                  to={routeNames.myWork}
                >
                  My projects
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>
        <div id="pageContent">
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default NavBar;
