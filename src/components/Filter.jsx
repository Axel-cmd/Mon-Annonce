import { useState, useEffect } from "react";
import { Accordion, Button, Stack } from "react-bootstrap";
import { getOffersCategories } from "../api/offer";
import FilterItem from "./FilterItem";


const Filter = ({ changeFilterValue }) => {

    const [categories, setCategories] = useState([]);
    const [currentCategories, setCurrentCategories] = useState([]);

    useEffect(() => {
        getOffersCategories()
            .then(result => {
                setCategories(result)
                // console.log(result) 
            })
    }, [])

    const handleOnClickCategory = (category) => {
        if(currentCategories.includes(category)) {
            const filterCurrentCategories = currentCategories.filter(c => c !== category);
            setCurrentCategories(filterCurrentCategories);
            changeFilterValue(filterCurrentCategories)

        } else {
            setCurrentCategories([...currentCategories, category]);
            changeFilterValue([...currentCategories, category])
        }
    }

    const handleClearCategories = ( ) => {
        setCurrentCategories([]);
        changeFilterValue([])
    }

    return (
        <Accordion style={{ marginTop: "1%", opacity: '.8'}}>
            <Accordion.Item>

                <Accordion.Header >
                    <p>Filtres de recherche</p>
                </Accordion.Header>
                <Accordion.Body>

                    <div style={{display: "flex",flexWrap: "wrap"}}>

                        {categories.map((value, index) => (
                            <FilterItem key={index} label={value.label} handleOnClick={() => handleOnClickCategory(value)} variant={`${ currentCategories.includes(value) ? "primary" : "outline-primary"}`}/>
                        ))}

                        <FilterItem variant="danger" label="Effacer" handleOnClick={handleClearCategories} />

                    </div>

                </Accordion.Body>
            </Accordion.Item>

        </Accordion>
    )
}

export default Filter;