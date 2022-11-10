
import React, { useState } from "react";
import { Form, Button, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";

const ResetPassword = () => {

    return(
        <>
            <Container className="mt-5 pt-3">
                <Row className="mt-3 text-center">
                <h2 class="text-center">Mot de passe oublié ?</h2>
                  <p>Vous pouvez le renitialiser ici.</p>
                </Row>

                <Row className="mt-5 ">
                    <Form>
                    
                        <FormInput label="Adresse mail" type="email" placeholder="Email" error="Entrez une adresse mail valide" />

                        <Button style={{width: "100%"}} className="mt-5" type="submit">Envoyer le mail de récupération</Button>
                    </Form>
                </Row>

            </Container>
        </>
    )
}

export default ResetPassword;