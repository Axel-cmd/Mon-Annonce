import React from 'react';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap'
import { searchOffer } from '../api/offer';
import CardProduct from '../components/CardProduct';
import Searchbar from '../components/Searchbar';

const Products = () => {

    const [keySearch, setKeySearch] = useState('');
    const [category, setCategory] = useState('')

    const [products, setProducts] = useState([]);

    const filterValue = (value) => {
        setKeySearch(value);
    }

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
            <Searchbar filterValue={filterValue} />
            {products.map((value, index) => (
                <CardProduct card={value} key={index} />
            ))}
        </Container>


    )
}

export default Products;