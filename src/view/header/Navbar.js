import React, {Component} from "react";

import {
  NavbarBrand,
  Navbar,
  } from "reactstrap";

class Navbar extends Component(){
  render(){
  return(
        <Navbar className="fixed-top navbar-light bg-light">
                  <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                    <div>
                      <h6>
                      <img src={Logo} width="80" height="80"/> Institut Seni Budaya Indonesia
                      </h6>
                    </div>
                    
                  </NavbarBrand>
        </Navbar>
  );
  }
}

export default Navbar;