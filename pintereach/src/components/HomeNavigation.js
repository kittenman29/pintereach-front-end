import React, { setGlobal } from 'reactn';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import Home from './Home';
import { withRouter } from 'react-router';
import axios from 'axios';

export default class HomeNavigation extends React.Component {
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
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Pintereach</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/login" >Log Out</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Article Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Add New Article
                  </DropdownItem>
                  <DropdownItem>
                    Edit Article
                  </DropdownItem>
                  <DropdownItem />
                  <DropdownItem>
                    Delete Article
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

HomeNavigation = withRouter(HomeNavigation);
// export default HomeNavigation;