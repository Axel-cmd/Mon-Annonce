import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { format } from "timeago.js"

const CardProduct = ({card}) => {

    const { title, description, updated_at}  = card;


    return (
        <Card className="mt-4">
            <Row>
                <Col md='2' >
                    <Card.Img style={{width: "100%"}} src="https://via.placeholder.com/150" />
                </Col>
                <Col style={{height: "100%"}} >
                    <Card.Body style={{height: "100%"}} >
                        <Card.Title style={{textTransform: ""}} >{title}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Card.Text>
                        {format(updated_at)}
                        </Card.Text>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    )
}

export default CardProduct