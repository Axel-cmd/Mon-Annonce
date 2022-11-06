import React, {useState} from "react";
import { Form } from "react-bootstrap";

const Searchbar = ({ filterValue }) => {
 
    const [search, setSearch] = useState('');

    const handleOnSearch = (e) =>{
        setSearch(e.target.value);
        filterValue(e.target.value.toLowerCase());
    }

    return (
        <Form.Control className="me-auto" placeholder="Rechercher une offre..." onChange={handleOnSearch} value={search} />
    )
}

export default Searchbar;