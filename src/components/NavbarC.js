import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import {
 Navbar,
 Nav,
 NavDropdown,
 Form,
 FormControl,
 Button
} from "react-bootstrap";

export default class NavbarC extends Component {
  handleLogOut = async event => {
    event.preventDefault();
    try {
      Auth.signOut();
      this.props.auth.setAuthStatus(false);
      this.props.auth.setUser(null);
    }catch(error) {
      console.log(error.message);
    }
  }
  render() {
    return (
     <navbar bg="primary" variant="dark" expand="md">
       <Navbar.Brand href="#home">Publishing-App</Navbar.Brand>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src="../BryantLake.JPG" width="150" height="50" alt="LBFP logo" />
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a href="/" style={{ textDecoration: 'none' }} className="navbar-item">
              Home
            </a>
            </div>

          <div className="navbar-end">
            <div className="navbar-item">
              {this.props.auth.isAuthenticated && this.props.auth.user && (
              <p >Hello {this.props.auth.user.username}</p>
              )}
              <div className="buttons">
                {!this.props.auth.isAuthenticated && (
                  <div>
                    <a href="/register" style={{ textDecoration: 'none' }} className="button is-primary">
                      <strong>Register </strong>
                    </a>
                    <a href="/login" style={{ textDecoration: 'none' }} className="button is-light">
                      Log in
                    </a>
                  </div>
                )}
                {this.props.auth.isAuthenticated && (
                  <a href="/" onClick={this.handleLogOut} style={{ textDecoration: 'none' }} className="button is-light">
                    Log out
                  </a>
                )}
         
                   <div className="buttons">
                  <div>
                    <a href="/Test"  className="button is-light">
                      Test
                    </a>
                  </div>
                </div>
         
              </div>
            </div>
          </div>
        </div>
      </nav>
          <Form inline>
         <FormControl type="text" placeholder="Search" className="mr-sm-2" />
         <Button variant="outline-light">Search</Button>
       </Form>
 
      </navbar>
    )
  }
}
