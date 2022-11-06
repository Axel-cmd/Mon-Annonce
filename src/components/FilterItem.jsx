import React from "react";
import { Button } from "react-bootstrap";

const FilterItem = ({variant, label, handleOnClick}) => {
    return (
        <div style={{marginRight: "2%", marginBottom: "2%"}} >
            <Button variant={variant} onClick={handleOnClick} >{label}</Button>
        </div>
    )
}

export default FilterItem;