import React, {useState} from "react";
import { Form } from 'react-bootstrap';

const FormInputFile = ({ label, type, onChange, error, placeholder, as, md }) => {

    const [fileText, setFileText] = useState('')

    const handleOnChange = (e) => {
        setFileText(e.target.value);
        onChange(e.target.files[0])
    }

    return (
        <Form.Group {...as ? as={as} : null} {...md ? md={md} : null} >
            <Form.Label>{label}</Form.Label>
            <Form.Control
                required
                type={type}
                placeholder={placeholder}
                value={fileText}
                onChange={handleOnChange}
            />
            <Form.Control.Feedback type="invalid" >{error}</Form.Control.Feedback>
        </Form.Group>
    )
}


export default FormInputFile;