import React from "react";
import { Form } from 'react-bootstrap';

const FormInput = ({ label, type, value, onChange, error, placeholder, as, md, textArea = false}) => {

    const handleOnChange = (e) => {
        onChange(e.target.value);
    }

    return (
        <Form.Group {...as ? as={as} : null} {...md ? md={md} : null} >
            <Form.Label>{label}</Form.Label>
            <Form.Control
                as={textArea ? "textarea" : "input"}
                required
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={handleOnChange}
            />
            <Form.Control.Feedback type="invalid" >{error}</Form.Control.Feedback>
        </Form.Group>
    )
}

export default FormInput;