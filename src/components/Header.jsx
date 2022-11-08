import React from "react"
import { Container, Nav, Navbar, Image } from "react-bootstrap";
import NavItem from "./NavItem";

const Header = () => {

    return (
        <Navbar fixed="top" bg="primary" >
            <Container>
                <Navbar.Brand className="text-white" >MON ANNONCE</Navbar.Brand>
                <span style={{flexGrow: 1}} ></span>
                <Nav style={{marginRight: "6%"}} >

                    <NavItem url={"/"} label="Accueil" />
                    <NavItem url={"/products"} label="Recherche" />
                    
                </Nav>
                <Image roundedCircle src={"https://via.placeholder.com/150"} style={{width: "30px", height: "30px", objectFit: "cover"}} />
            </Container>
        </Navbar>
    )
}

export default Header;