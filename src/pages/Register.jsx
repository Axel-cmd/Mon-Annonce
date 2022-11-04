import UserForm from "../form/UserForm";
import { Button, Container, Row } from "react-bootstrap";
import { userRegister } from "../api/user";

const Register = () => {

    const handleOnSubmit = (data) => {
        console.log(data)
        userRegister(data)
            .then(res => {
                console.log(res)
            })
    }   

    return (
        <Container>
            <Row className="mt-5 text-center">
                
                <h1>Register</h1>

            </Row>
            <Row className="mt-5">
                <UserForm onSubmit={handleOnSubmit} action='Créer le compte'/>

            </Row>
            <Button style={{width: "100%"}} className="mt-2" type="submit">Connexion</Button>
        </Container>    
    )
}

export default Register;