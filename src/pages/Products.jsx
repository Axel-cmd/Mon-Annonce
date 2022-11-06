import React from 'react';
import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap'
import { searchOffer } from '../api/offer';
import CardProduct from '../components/CardProduct';
import Filter from '../components/Filter';
import Searchbar from '../components/Searchbar';

const Products = () => {

    const [keySearch, setKeySearch] = useState('');
    const [categories, setCategories] = useState([])

    const [products, setProducts] = useState([]);

    const handleSearchValue = (searchValue) => {
        setKeySearch(searchValue);
    }

    const handleFilterValue = (filter) => {
        setCategories(filter)
    }

    useEffect(() => {
        searchOffer({key: keySearch, categories}) 
            .then(res => {
                // console.log(res);
                setProducts(res);
            })
    }, [categories, keySearch])


    return (
        <Container> 
            <h1>SearchProduct</h1>
            <Searchbar searchByValue={handleSearchValue} />


            <Filter changeFilterValue={handleFilterValue} />

            <Row xs={1} md={3} className="g-4">
                {products.map((value, index) => (
                    <CardProduct card={value} key={index} />
                ))}
            </Row>
        </Container>


    )
}

export default Products;