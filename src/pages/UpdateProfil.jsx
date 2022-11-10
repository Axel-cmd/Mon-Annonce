import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { putUserById } from "../api/user";
import { useAuth } from "../contexts/auth.context";

import UserForm from "../form/UserForm";

const UpdateProfil = () => {

    const { user, setUser } = useAuth();

    const navigate = useNavigate();
    
    const handleUpdateProfil = (data) => {
        const formData = new FormData();
        formData.append("email", data.email);
        formData.append("firstname", data.firstname);
        formData.append("lastname", data.lastname);
        formData.append("phone", data.phone);
        formData.append("address", data.address);
        formData.append("zip_code", data.zipCode);
        formData.append("city", data.city);
        formData.append("country", data.country);
        putUserById({id: user.id, data: formData})
            .then(r => {
                console.log(r);
                setUser(r)
                navigate('/myProfil')
            })


    }

    return(
        <Container className="mt-5 mb-5 pt-3">
            <Row className="mt-3 text-center">
                
                <h1>Mettre à jour votre profil</h1>

            </Row>
            <Row className="mt-5">
                <UserForm defaultValue={user} onSubmit={handleUpdateProfil} action='Mettre à jour'/>

            </Row>
            <Button style={{width: "100%"}} className="mt-2" type="submit" onClick={() => navigate('/myProfil')} >Annuler</Button>
        </Container> 
    )
}

export default UpdateProfil;