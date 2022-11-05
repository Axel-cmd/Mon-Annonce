import React, { useState } from "react";
import { Form, Button, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import { useAuth } from "../contexts/auth.context";


const Login = () => {

    const { login } = useAuth();
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [wrongCredentials, setWrongCrendentials] = useState(false);


    const handleOnSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;

        if(form.checkValidity() === false){
            event.stopPropagation();
        }else {
            login({email, password})
                .then(result => {
                    setWrongCrendentials(false);
                    navigate('/myProfil')
                } )
                .catch(err => {
                    if(err.response.status === 400) {
                        setWrongCrendentials(true);
                    }
                    console.log(err)
                })
        }
        

        setValidated(true)
    }


    return (
        <Container>

            <Row className="mt-5 text-center">
                <h1>Login</h1>
            </Row>

            <Row className="mt-5 ">
                <Form noValidate validated={validated} onSubmit={handleOnSubmit} >
                
                    <FormInput label="Adresse mail" type="email" placeholder="Email" value={email} onChange={setEmail} error="Entrez une adresse mail valide" />
                    <FormInput label="Mot de passe" type="password" placeholder="Mot de passe" value={password} onChange={setPassword} error="Entrez votre mot de passe" />

                    {wrongCredentials && (
                        <p className="mt-2 text-danger">Adresse mail ou mot de passe invalide</p>
                    )}


                    <Button style={{width: "100%"}} className="mt-5" type="submit">Connexion</Button>
                    <Button style={{width: "100%"}} className="mt-2" onClick={() => navigate('/register')} >Créer un compte</Button>
                </Form>
            </Row>
            
        </Container>
    
    )
}

export default Login;