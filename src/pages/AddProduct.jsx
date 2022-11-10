import React, { useEffect, useState } from "react";
import ProductForm from "../form/ProductForm";
import { Form, Button, Container, Row } from "react-bootstrap";
import { addOffer } from "../api/offer";
import { useNavigate } from "react-router-dom";

 const AddProduct = () => {

    const navigate = useNavigate();

    const handleOnSubmit = (data) => {

        console.log(data);
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("description", data.description);
        formData.append("price", data.price);
        formData.append("category", data.category);
        formData.append("status", data.status);
        formData.append("productPicture", data.productPicture);
       
        addOffer(formData)
            .then(res => {
                console.log(res)
                navigate('/products');
            })
            .catch(err => console.log(err))
    }   

    return (
        <Container className="mt-5 mb-5 pt-3">
            <Row className="mt-3 text-center">
                
                <h1>Add Product</h1>

            </Row>
            <Row className="mt-5">
                <ProductForm onSubmit={handleOnSubmit} create='Create Product'/>

            </Row>
        </Container>    
    )
}
export default AddProduct;