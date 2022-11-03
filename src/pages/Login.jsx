import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
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
            
                <FormInput label="Adresse mail" type="email" placeholder="Email" value={email} onChange={setEmail} error="Entrez une adresse mail valide" />
                <FormInput label="Mot de passe" type="password" placeholder="Mot de passe" value={password} onChange={setPassword} error="Entrez votre mot de passe" />
                
                <Button type="submit">Connexion</Button>
                <Button onClick={() => navigate('/register')} >Créer un compte</Button>
            </Form>
        </>
    
    )
}

export default Login;