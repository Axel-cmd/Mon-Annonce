import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOfferById, getUploadedFile } from "../api/offer";
import { Container, Button, Image, Row, Col, Stack, Card, NavItem } from "react-bootstrap";
import { useCallback } from "react";
import ContactForm from "../form/ContactForm";


const ProductDetail = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [productImg, setProductImg] = useState(null)

    useEffect(() => {
        getOfferById(id)
            .then(res => {
                console.log(res);
                setProduct(res);

                

            })
            .catch(err => console.log(err))
    }, [id])

    useEffect(() => {
        if(!product) return;
        getUploadedFile(product.productPicture)
            .then(res => {
                console.log(res)
            })
    }, [product])

    const handleGoBack = useCallback(() => navigate(-1))

    return (
        <Container className="mt-5 pt-3">


            <Button variant="secondary" onClick={() => navigate(-1)}>Retour</Button>

            <Image src={productImg ?? "https://via.placeholder.com/150"} className="mt-3" style={{width: "100%", height: "200px", objectFit: "cover"}}/>

            <h2 className="mt-3" style={{width: "100%", textAlign: "center"}}>{product ? product.title : ""}</h2>

            <Row>

                <Col md="8" sm="8" lg="10" >
                    <p className="mt-4" >{product ? product.description : ""}</p>
                    <p style={{width: "100%", textAlign: "right"}} ><span style={{fontSize: "3rem"}} >{product ? product.price : ""}</span>€</p>
                
                </Col>
                <Col>
                    {product && (
                        <Card style={{textAlign: "center"}} >
                            <Card.Body>

                                <div style={{width: "100%"}} className="mb-3" >
                                    <Image roundedCircle="true" style={{width: "50px", height: "50px"}} src="https://via.placeholder.com/150" />
                                </div>

                                <Card.Title className="mb-5" >{product.Author.lastname}<br /> {product.Author.firstname}</Card.Title>

                                {/* direction vers le profil public de l'utilisateur  */}
                                <Button variant="primary" onClick={() => navigate(`/profil/${product.Author.id}`)} >Voir le profil</Button>

                            </Card.Body>
                        </Card>
                    )}
                </Col>

            </Row>
            <Row>
                <ContactForm />
            </Row>


        </Container>
    )
}

export default ProductDetail;