import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOfferById } from "../api/offer";


const ProductDetail = () => {

    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        getOfferById(id)
            .then(res => {
                console.log(res);
                setProduct(res);
            })
            .catch(err => console.log(err))
    }, [id])

    return (
        <p>{product ? product.title : ""}</p>
    )
}

export default ProductDetail;