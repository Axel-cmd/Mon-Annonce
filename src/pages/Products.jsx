import React from 'react';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap'
import { searchOffer } from '../api/offer';
import CardProduct from '../components/CardProduct';

const Products = () => {

    const [keySearch, setKeySearch] = useState('');
    const [category, setCategory] = useState('')

    const [products, setProducts] = useState([]);


    useEffect(() => {
        searchOffer({key: keySearch, category}) 
            .then(res => {
                console.log(res);
                setProducts(res);
            })
    }, [category, keySearch])


    return (
        <Container> 
            <h1>SearchProduct</h1>
            {products.map((value, index) => (
                <CardProduct card={value} key={index} />
            ))}
        </Container>


    )
}

export default Products;