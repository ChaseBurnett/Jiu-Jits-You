import { Link, useNavigate } from "react-router-dom";
import { logout } from "../helpers/logout";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavBar.css"

export const UserNav = () => {
    const navigate = useNavigate();
    const onLogout = () => {
        logout.logout(navigate);
      };


    return (
        <Navbar bg="dark" variant="dark" >
            <Container>
            <Navbar.Brand classname ="nav" href="/mainPage">Jiu Jits You</Navbar.Brand>
            <Nav className="m-auto">
                <Nav.Link className="navbar__link" href="/mainPage">Main Page</Nav.Link>
                <Nav.Link className="navbar__link" href="/logSession">Log New Training Session</Nav.Link>
                <Nav.Link className="navbar__link" href="https://ibjjf.com/events/championships">Competitions</Nav.Link>
                <Nav.Link className="navbar__link" href="https://rb.gy/rizaha">Gym Search</Nav.Link>
                <Nav.Link className="navbar__link" href="" onClick={onLogout}>Logout</Nav.Link>
        </Nav>
        </Container>
        </Navbar>
    )
}