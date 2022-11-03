import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth.context";


const Login = () => {

    const { login } = useAuth();
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleOnSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;

        if(form.checkValidity() == false){
            event.stopPropagation();
        }
        
        login({email, password})
            .then(result => navigate('/myProfil') )

        setValidated(true)
    }


    return (
        <>
            <h1>Login</h1>
            <Form noValidate validated={validated} onSubmit={handleOnSubmit} >
                <Form.Group hasValidation>
                    <Form.Label>Adresse mail</Form.Label>
                    <Form.Control
                        required
                        type="email"
                        placeholder="mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid" >Entrez une adresse mail valide</Form.Control.Feedback>
                </Form.Group>
                <Form.Group hasValidation>
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid" >Entrez votre mot de passe</Form.Control.Feedback>
                </Form.Group>
                <Button type="submit">Connexion</Button>
                <Button onClick={() => navigate('/register')} >Créer un compte</Button>
            </Form>
        </>
    
    )
}

export default Login;