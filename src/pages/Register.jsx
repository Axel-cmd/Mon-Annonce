import UserForm from "../form/UserForm";

const Register = () => {

    const handleOnSubmit = (data) => {
        console.log(data)
    }   

    return (
        <>
            <h1>Register</h1>
            <UserForm onSubmit={handleOnSubmit} action='Créer le compte'/>
        </>    
    )
}

export default Register;