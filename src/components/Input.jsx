import React from "react";
import { InputGroup, FloatingLabel, Form } from 'react-bootstrap';

const Input = ({ prefix, type, label, onChange, value, isValid, error}) => {

    return (
        <InputGroup>
            { prefix && (
                <InputGroup.Text>{prefix}</InputGroup.Text>
            )}
            <FloatingLabel label={label}>
                <Form.Control 
                    type={type}
                    name={label}
                    value={value}
                    onChange={onChange}
                    isValid={isValid}
                />
            </FloatingLabel>
            <Form.Control.Feedback type="invalid" >{error}</Form.Control.Feedback>
        </InputGroup>
    )
}

export default Input;