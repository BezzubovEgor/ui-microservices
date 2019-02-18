import React from 'react';

import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';

export const Header = () => (
    <Navbar color="light" light expand="md">
        <Nav>
            <NavItem>
                <NavLink href="#home">Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#todolist">ToDo list</NavLink>
            </NavItem>
        </Nav>
    </Navbar>
)