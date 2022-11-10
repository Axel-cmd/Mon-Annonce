import React from "react"
import { useEffect, useState } from "react";
import { Container, Nav, Navbar, Image } from "react-bootstrap";
import { getUploadedFile } from "../api/offer";
import { useAuth } from "../contexts/auth.context";
import NavItem from "./NavItem";

const Header = () => {

    const [profil, setProfil] = useState(null)

    const { user, token } = useAuth();

    useEffect(() => {
        // user.profile_picture
        if(user && user.profile_picture){

            getUploadedFile(user.profile_picture)
                .then(value => {
                    const url = window.URL || window.webkitURL;
                    const blobUrl = url.createObjectURL(value);
                    setProfil(blobUrl)
                })
        }

    }, [user])

    return (
        <Navbar fixed="top" bg="primary" >
            <Container>
                <Navbar.Brand className="text-white" >MON ANNONCE</Navbar.Brand>
                <span style={{flexGrow: 1}} ></span>
                <Nav style={{marginRight: "6%"}} >

                    <NavItem url={"/"} label="Accueil" />
                    <NavItem url={"/products"} label="Recherche" />
                    
                </Nav>
                <Image roundedCircle src={token ? profil ? profil : "https://via.placeholder.com/150" : "https://via.placeholder.com/150"} style={{width: "30px", height: "30px", objectFit: "cover"}} />
            </Container>
        </Navbar>
    )
}

export default Header;