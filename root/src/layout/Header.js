import React from 'react';

import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';

export const Header = () => (
    <Navbar color="light" light expand="md" className="d-flex justify-content-center">
        <Nav>
            <NavItem>
                <NavLink href="#home">Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#react-service">ToDo list (React)</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#angular-service">Angular feedback form</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#vue-service">Only vue service</NavLink>
            </NavItem>
        </Nav>
    </Navbar>
)