import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
const Landing = () => {

    return (
        <>
        <div className='landing_dom'>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://m.media-amazon.com/images/I/71GvfkldKiL._SX3000_.jpg"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="	https://m.media-amazon.com/images/I/71xFBU0m73L._SX3000_.jpg"
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://m.media-amazon.com/images/I/71BPr276hfL._SX3000_.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <Container className='content_landing_card'>
                <Card>
                    <Card.Body>
                        <Card.Title>Découvrer des annonces dans toute la france</Card.Title>
                        <Card.Text>
                        LA meilleur plateforme d'occasion est enfin la !
                        </Card.Text>
                        <Button variant="primary">Découvrir</Button>
                    </Card.Body>
                </Card>
            </Container>
        </div>
        </>
    )
}

export default Landing;