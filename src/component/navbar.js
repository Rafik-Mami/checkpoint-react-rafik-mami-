import React from "react";
import { Navbar } from "react-bootstrap";

function navbar() {
  return (
    <Navbar>
      <Navbar.Brand href="#home" className="tit">
        {" "}
        Your Movies
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
    </Navbar>
  );
}

export default navbar;
