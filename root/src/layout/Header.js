import React from 'react';

import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';

export const Header = () => (
    <Navbar color="light" light expand="md" className="d-flex justify-content-center">
        <Nav>
            <NavItem>
                <NavLink href="#home">Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#todolist">ToDo list (React)</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#feedback">Angular feedback form</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#vue">Only vue service</NavLink>
            </NavItem>
        </Nav>
    </Navbar>
)