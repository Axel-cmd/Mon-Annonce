import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import FormInput from "../components/FormInput";
import FormInputFile from "../components/FormInputFile";


const UserForm = ({ action, onSubmit, defaultValue }) => {

    const [validated, setValidated] = useState(false);


    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [profilPicture, setProfilPicture] = useState(null);
    const [identificalFile, setIdentificalFile] = useState(null)


    const handleOnSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;

        if(form.checkValidity() === false){
            event.stopPropagation();
        }else {
            // envoyer les données du formulaire dans la callback passé en props 
            onSubmit({
                firstName,
                lastName,
                phone,
                email,
                password,
                address,
                country,
                city,
                zipCode,
                profilPicture,
                identificalFile
            })
        }
        

        setValidated(true)
    }

    useEffect(() => {
        // modifier la valeur des state par défaut 


        
    }, [defaultValue])

    return (
        <Form noValidate validated={validated} onSubmit={handleOnSubmit}>
            <Row className="mb-3">
                <FormInput as={Col} md="4" label="Prénom" value={firstName} onChange={setFirstName} error="Entrez votre prénom" type="text" placeholder="Prénom" />
                <FormInput as={Col} md="4" label="Nom de famille" type="text" placeholder="Nom" value={lastName} onChange={setLastName} error="Veuillez entrer votre nom" />
                <FormInput as={Col} md="4" label="Tél." type="text" placeholder="06 00 00 00 00" value={phone} onChange={setPhone} error="Veuillez entrer votre numéro de téléphone" />
            </Row>
            <Row className="mb-3">
                <FormInput as={Col} md="6" label="Adresse mail" type="email" placeholder="example@mail.com" value={email} onChange={setEmail} error="Veuillez entrer une adresse email valide" />
                <FormInput as={Col} md="6" label="Mot de passe" type="password" placeholder="Mot de passe" value={password} onChange={setPassword} error="Veuillez entrer un mot de passe" />
            </Row> 

            <Row className="mb-3">
                <FormInput as={Col} md="12" label="Adresse" type="text" placeholder="3 rue de l'exemple" value={address} onChange={setAddress} error="Veuillez entrer votre adresse" />
            </Row>

            <Row className="mb-3">
                <FormInput as={Col} md="4" label="Pays" type="text" placeholder="France" value={country} onChange={setCountry} error="Veuillez entrer votre pays" />
                <FormInput as={Col} md="4" label="Ville" type="text" placeholder="Paris" value={city} onChange={setCity} error="Veuillez entrer votre ville" />
                <FormInput as={Col} md="4" label="Code postal" type="text" placeholder="75000" value={zipCode} onChange={setZipCode} error="Veuillez entrer votre code postal" />
            </Row>

            <Row className="mb-3">
                <FormInputFile as={Col} md="6" label="Photo de profil" type="file" onChange={setProfilPicture} error="Veuillez sélectionner une photo de profil"  />
                <FormInputFile as={Col} md="6" label="Carte d'identité" type="file" onChange={setIdentificalFile} error="Veuillez insérer votre pièce d'identité"  />
            </Row>

            <Button className="mt-5" style={{width: "100%"}} type="submit">{action}</Button>
        </Form>
    )
}

export default UserForm;