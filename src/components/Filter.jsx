import { useState, useEffect } from "react";
import { Accordion, Button, Stack } from "react-bootstrap";
import { getOffersCategories } from "../api/offer";


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
            <Accordion.Header >
                <p>Filtres de recherche</p>
            </Accordion.Header>
            <Accordion.Body>

                <div style={{display: "flex",flexWrap: "wrap"}}>

                    {categories.map((value, index) => (
                        <div key={index} style={{marginRight: "2%", marginBottom: "2%"}} >
                            <Button variant={`${ currentCategories.includes(value) ? "primary" : "outline-primary"}`} onClick={() => handleOnClickCategory(value)} >{value.label}</Button>
                        </div>
                    ))}
                    <div style={{marginRight: "2%", marginBottom: "2%"}} >

                        <Button variant="danger" onClick={handleClearCategories} >Effacer</Button>

                    </div>

                </div>
                
                

            </Accordion.Body>
        </Accordion>
    )
}
{/* <div style={{ marginTop: "2%", opacity: '.8'}}>
            <Stack direction="horizontal" >

                <p>Filtres de recherche</p>
                <Button size="sm" variant="link" >clear</Button>
            </Stack>
            <div style={{display: "flex",flexWrap: "wrap"}}>
                {categories.map((value, index) => (
                    <div key={index} style={{marginRight: "2%", marginBottom: "2%"}} >
                        <Button variant={`${ currentCategories.includes(value) ? "primary" : "outline-primary"}`} onClick={() => handleOnClickCategory(value)} >{value.label}</Button>
                    </div>
                ))}
            </div>
        </div> */}
export default Filter;