import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { format } from "timeago.js"

const CardProduct = ({card}) => {

    const { title, description, updated_at, price }  = card;


    return (
        <Card className="mt-4">
            <Row>
                <Col md='2' >
                    <Card.Img style={{width: "100%"}} src="https://via.placeholder.com/150" />
                </Col>
                <Col style={{height: "100%"}} >
                    <Card.Body style={{height: "100%"}} >

                        <Row>
                            <Col md='10' >
                                
                                <Card.Title>{title}</Card.Title>
                                
                                <Card.Text  >
                                    {description}
                                </Card.Text>

                                <Card.Text >
                                    {format(updated_at)}
                                </Card.Text>
                            </Col>
                            
                            <Col>
                                <Card.Text>
                                    {price}
                                </Card.Text>

                                <Button variant="primary" >
                                    Détail
                                </Button>

                            </Col>



                        </Row>




                        
                       
                        
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    )
}

export default CardProduct