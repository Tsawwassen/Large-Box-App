import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';

class Navigation extends Component {

  constructor(props){
    super(props);
    this.state = {
    }
  }

  render () {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Warehouse Label App</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/lba">Large Box App</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;