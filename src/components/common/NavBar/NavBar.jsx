import React from "react";
import { NavLink } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import "./NavBar.css";

export default class NavBar extends React.Component {
  state = {
    isOpen: false
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    //To Do
  };
  render() {
    return (
      <nav>
        <Navbar color="light" light expand="md">
          <Nav className="ml-auto" navbar>
            <NavItem className="searchbar">
              <form
                className="form-inline my-2 my-sm-0"
                onSubmit={this.handleSubmit}
              >
                <button
                  className="btn btn-outline-white shadow-none my-2 my-sm-0"
                  type="submit"
                  style={{ position: "relative", top: "4px" }}
                >
                  <h4>⌕</h4>
                </button>
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </NavItem>
          </Nav>
          <Nav>
            <NavLink
              className="butler navlogo text-decoration-none text-dark"
              to="/"
            >
              <h1> FESTIV</h1>
            </NavLink>
          </Nav>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="btn btn-primary" to="/admin">
                  Admin
                </NavLink>

                <NavLink className="btn btn-danger ml-2" to="/tickets">
                  Tickets
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </nav>
    );
  }
}
