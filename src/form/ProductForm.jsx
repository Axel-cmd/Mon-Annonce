import React, { useEffect, useState } from "react";
import { Form, Button, Container, Row } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import FormInputFile from "../components/FormInputFile";


 const AddProduct = ({ product, create, onSubmit }) => {

    // const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [status_id, setStatus] = useState('');
    const [productPicture, setProductPicture] = useState('');


    useEffect(() => {
        if (product){
            // console.log(product);
            setTitle(product.title);
            setDescription(product.description);
            setPrice(product.price);
            setCategory(product.category);
            setStatus(product.status_id);
            setProductPicture(product.productPicture);
        }
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
                status_id,
                productPicture
            })
        }
        // console.log("hello !!", category);
    }

    return (
        
        <Container>
            <Row className="mt-5 ">
                <Form onSubmit={handleOnSubmit} >
                
                    <FormInput label="Title" type="title" placeholder="Title" value={title} onChange={setTitle} error="Write down the title" />
                    <FormInput label="Description" type="description" placeholder="Description" value={description} onChange={setDescription} error="Write down a description" />
                    <FormInput label="Price" type="price" placeholder="Price" value={price} onChange={setPrice} error="Write down the price" />
                    <label htmlFor="category">Category</label>
                    <Form.Select aria-label="category" onChange={setCategory}>
                        <option value="REAL_ESTATE">Immobilier</option>
                        <option value="IT">High-tech</option>
                        <option value="AUTOMATION">Domotique</option>
                        <option value="HOME_FURNISHINGS">Mobilier de maison</option>
                        <option value="OTHER_FURNITURE">Autres mobilies</option>
                        <option value="CLOTHES">Vêtements</option>
                        <option value="OTHERS">Autres</option>
                    </Form.Select>
                    <label htmlFor="status_id">status</label>
                    <Form.Select aria-label="Select Status" onChange={setStatus}>
                        <option value="1">Brouillon</option>
                        <option value="2">Publié</option>
                        <option value="3">Supprimé</option>
                    </Form.Select>
                    <FormInputFile label="Product Picture" type="file" placeholder="productPicture" value={productPicture} onChange={setProductPicture} error="" />

                    <Button className="mt-5" style={{width: "100%"}} type="submit">{create}</Button>
                </Form>
            </Row>
            
        </Container>
      
    )
}

export default AddProduct;