import { Navbar as NavbarBs, Container , Nav, Button} from "react-bootstrap"
import { NavLink } from "react-router-dom"
import shopcat from "../assets/shoping2.svg"
export const Navbar = () => {
    return <NavbarBs sticky="top" className="bg-white mb-3 shadow-sm">
        <Container >
            <Nav className="me-auto">
                <Nav.Link to="/" as={NavLink}>
                      Home
                </Nav.Link>
                <Nav.Link to="/store" as={NavLink}>
                      Store
                </Nav.Link>
                <Nav.Link to="/about" as={NavLink}>
                      About
                </Nav.Link>
            </Nav>
           
            <Button variant="outline-primary" 
                className ="rounded-circle p-3 d-flex justify-content-center align-items-center" style={{ width: "4rem", height: "4rem", position:"relative" }}>
                <img src={shopcat} alt="shoping cat" />
                <div className="rounded-circle bg-danger" style={{
                    position: "absolute",
                    width: "2rem",
                    height:"2rem",
                    bottom: 0,
                    right: 0,
                    transform: "translate(25%, 25%)",
                    color:"white"

                }}>
                    3
                </div>
            </Button>
        </Container>
    </NavbarBs>
}