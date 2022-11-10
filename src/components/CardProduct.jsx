import React, {useCallback} from "react";
import { useEffect } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { format } from "timeago.js"

const CardProduct = ({card}) => {

    const navigate = useNavigate();
    const { id, title, description, updated_at, price }  = card;

    const handleOnClick = useCallback(() => navigate(`/product/${id}`, {replace: true}), [navigate, id])

    useEffect(() => {
        console.log(card)
    }, [])


    return (
        <Col>
        <Card className="mt-4">
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text> <span style={{fontSize: "3rem"}}>{price}</span> €</Card.Text>
                <Button variant="primary" onClick={handleOnClick} >Détail</Button>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Publié {format(updated_at, "fr_FR")}</small>
            </Card.Footer>
        </Card>
        </Col>
    )
}

export default CardProduct



// <Card className="mt-4">
//             <Row>
//                 <Col md='2' >
//                     <Card.Img style={{width: "100%"}} src="https://via.placeholder.com/150" />
//                 </Col>
//                 <Col style={{height: "100%"}} >
//                     <Card.Body style={{height: "100%"}} >

//                         <Row>
//                             <Col md='10' >
                                
//                                 <Card.Title>{title}</Card.Title>
                                
//                                 <Card.Text  >
//                                     {description}
//                                 </Card.Text>

//                                 <Card.Text >
//                                     {format(updated_at)}
//                                 </Card.Text>
//                             </Col>
                            
//                             <Col>
//                                 <Card.Text>
//                                     {price}
//                                 </Card.Text>

//                                 <Button variant="primary" onClick={handleOnClick} >
//                                     Détail
//                                 </Button>

//                             </Col>



//                         </Row>




                        
                       
                        
//                     </Card.Body>
//                 </Col>
//             </Row>
//         </Card>