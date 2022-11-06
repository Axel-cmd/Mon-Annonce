import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { getOffersCategories } from "../api/offer";


const Filter = ({ changeFilterValue }) => {

    const [categories, setCategories] = useState([]);
    const [currentFilter, setCurrentFilter] = useState('');


    useEffect(() => {
        getOffersCategories()
            .then(result => {
                setCategories(result)
                console.log(result) 
            })
    }, [])

    const handleOnClickFilter = (value) => {
        if(value === currentFilter) {
            setCurrentFilter('');
            changeFilterValue('')
        } else {
            setCurrentFilter(value)
            changeFilterValue(value)
        }
    }


    return (
        <div style={{display: "flex", marginTop: "2%", flexWrap: "wrap"}}>
            {categories.map((value, index) => (
                <div key={index} style={{marginRight: "2%", marginBottom: "2%"}} >
                    <Button variant={`${ currentFilter === value.machine_name ? "secondary" : "outline-secondary"}`} onClick={() => handleOnClickFilter(value.machine_name)} >{value.label}</Button>
                </div>
            ))}
        </div>
    )
}

export default Filter;