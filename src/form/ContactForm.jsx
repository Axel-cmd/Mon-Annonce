import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import FormInput from "../components/FormInput";

const ContactForm = () => {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [validated, setValidated] = useState(false);

    const handleOnSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;

        // setValidated(true)


        if(form.checkValidity() === false){
            event.stopPropagation();
        }else {
            // envoyer les données du formulaire dans la callback passé en props 
            
            console.log(email, message);
            setEmail('');
            setMessage('');
            
        }
        
        setValidated(true)

    }

    return(
        <Card className="mt-3 mb-5 pt-3 pl-5 pr-5 pb-3">
            <h3 className="mb-3" style={{width: "100%", textAlign: "center"}}>Contact</h3>

            <Form noValidate validated={validated} onSubmit={handleOnSubmit}>
                <FormInput label="Adresse mail" value={email} onChange={setEmail} error="Veuillez entrer une adresse mail valide" placeholder="Email" type="email" />
                <FormInput label="Message" value={message} onChange={setMessage} error="Veuillez entrer un message" type="text" textArea={true}  />

                <div style={{width:"100%",display: "flex", justifyContent: "center"}} >
                    <Button className="mt-3" onClick={handleOnSubmit} >Envoyer</Button>
                </div>


            </Form>

        </Card>
    )

}

export default ContactForm;