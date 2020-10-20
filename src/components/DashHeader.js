import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem
} from 'reactstrap';
import routes from '../routes';
import { Link } from "react-router-dom";

const DashHeader = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const id = props.id;
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <Link className="nav-link" to={routes.wall.replace(":id",id)}>Posts</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to={routes.profile.replace(":id",id)}>Profile</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to={routes.posts.replace(":id",id)}>Add Posts</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to={routes.friends.replace(":id",id)}>Add friends</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default DashHeader;