import UserForm from "../form/UserForm";
import { Button, Container, Row } from "react-bootstrap";
import { userRegister } from "../api/user";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate();

    const handleOnSubmit = (data) => {

        const formData = new FormData();
        formData.append("email", data.email);
        formData.append("password", data.password);
        formData.append("firstname", data.firstname);
        formData.append("lastname", data.lastname);
        formData.append("phone", data.phone);
        formData.append("address", data.address);
        formData.append("zip_code", data.zipCode);
        formData.append("city", data.city);
        formData.append("country", data.country);
        formData.append("identifical_file", data.identificalFile);
        formData.append("profile_picture", data.profilPicture);
        
        userRegister(formData)
            .then(res => {
                console.log(res)
                navigate('/login');
            })
            .catch(err => console.log(err))
    }   

    return (
        <Container className="mt-5 mb-5 pt-3">
            <Row className="mt-3 text-center">
                
                <h1>Register</h1>

            </Row>
            <Row className="mt-5">
                <UserForm onSubmit={handleOnSubmit} action='Créer le compte'/>

            </Row>
            <Button style={{width: "100%"}} className="mt-2" type="submit" onClick={() => navigate('/login')} >Se connecter</Button>
        </Container>    
    )
}

export default Register;