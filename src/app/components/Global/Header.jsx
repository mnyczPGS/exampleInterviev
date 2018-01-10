import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Container } from 'reactstrap';
import logo from './../../../assets/logo.png';

export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="Header">
        <Container>
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="menu">
            <div className="item">
              <NavLink exact to="/" activeClassName="active">About us</NavLink>
            </div>
            <div className="item">
              <NavLink to="/skicams" activeClassName="active">Skicams</NavLink>
            </div>
            <div className="item">
              <NavLink to="/contact" activeClassName="active">Contact</NavLink>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}