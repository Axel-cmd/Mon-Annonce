import React, { useEffect, useState } from "react";
import { Form, Button, Container, Row } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import FormInputFile from "../components/FormInputFile";


 const AddProduct = ({ product, create, onSubmit }) => {

    // const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [status, setStatus] = useState('');
    const [productPicture, setProductPicture] = useState('');

    useEffect(() => {
        console.log(product);
        setTitle(product.title);
        setDescription(product.description);
        setPrice(product.price);
        setCategory(product.category);
        setStatus(product.status);
        setProductPicture(product.productPicture);
        
    }, [product]);

    const handleOnSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;

        if(form.checkValidity() === false){
            event.stopPropagation();
        }else {
            // envoyer les données du formulaire dans la callback passé en props 
            onSubmit({
                title,
                description,
                price,
                category,
                status,
                productPicture
            })
        }
        

        setValidated(true)
    }

    return (
        <Form noValidate validated={validated} onSubmit={handleOnSubmit}>
        <Container>

            <Row className="mt-3 text-center">
                <h1>Add Product</h1>
            </Row>

            <Row className="mt-5 ">
                <Form onSubmit={handleOnSubmit} >
                
                    <FormInput label="Title" type="title" placeholder="Title" value={title} onChange={setTitle} error="Write down the title" />
                    <FormInput label="Description" type="description" placeholder="Description" value={description} onChange={setDescription} error="Write down a description" />
                    <FormInput label="Price" type="price" placeholder="Price" value={price} onChange={setPrice} error="Write down the price" />
                    <label htmlFor="category">Category</label>
                    <Form.Select aria-label="Select Category">
                        <option>Category</option>
                        <option value="1">Sport</option>
                        <option value="2">Home & Decoration</option>
                        <option value="3">Fashion</option>
                    </Form.Select>
                    <label htmlFor="status">Status</label>
                    <Form.Select aria-label="Select Status">
                        <option>Status</option>
                        <option value="1">Good</option>
                        <option value="2">Very good</option>
                        <option value="3">New</option>
                    </Form.Select>
                    <FormInputFile label="Product Picture" type="file" placeholder="productPicture" value={productPicture} onChange={setProductPicture} error="" />

                    <Button style={{width: "100%"}} className="mt-5" type="submit">{create}</Button>
                </Form>
            </Row>
            
        </Container>
        </Form>
      
    )
}

export default AddProduct;