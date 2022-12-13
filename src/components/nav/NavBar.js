import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { logout } from "../helpers/logout";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const UserNav = () => {
    const navigate = useNavigate();
    const onLogout = () => {
        logout.logout(navigate);
      };


    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <Nav className="me-auto">
                <Nav.Link className="navbar__Nav.Link" href="/mainPage">Main Page</Nav.Link>
                <Nav.Link className="navbar__link" href="/logSession">Log New Training Session</Nav.Link>
                <Nav.Link className="navbar__link" href="/competitions">Competitions</Nav.Link>
                <Nav.Link className="navbar__link" href="/searchGyms">Gym Search</Nav.Link>
                <Nav.Link className="navbar__link" href="" onClick={onLogout}>Logout</Nav.Link>
        </Nav>
        </Container>
        </Navbar>
    )
}