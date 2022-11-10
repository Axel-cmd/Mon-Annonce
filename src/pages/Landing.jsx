import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/auth.context';
const Landing = () => {

    const navigate = useNavigate();
    const { token } = useAuth();
    

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
                        La meilleur plateforme d'occasion est enfin la !
                        </Card.Text>
                        <Button variant="primary" onClick={() => navigate('/products')} >Découvrir</Button>
                        
                    </Card.Body>
                </Card>
            </Container>
        </div>
        {!token && (
            <>
                <h3 style={{textAlign:"center", marginTop:"25px"}}>Identifiez-vous pour une meilleure expérience</h3>
                <Container style={{ display: 'flex', alignItems:"stretch", justifyContent: "space-evenly", flexDirection:"row", marginTop:"25px", marginBottom:"25px" }}>
                    <Card style={{ width: '25rem' }}>
                        <Card.Body>
                            <Card.Title>Se connecter</Card.Title>
                            <Card.Text>
                            Connectez vouz si vous avez déja créer un compte
                            </Card.Text>
                            <Button onClick={() => navigate('/login')} style={{marginLeft: "10px"}} variant="success">Se connecter</Button>{' '}
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '25rem' }}>
                        <Card.Body>
                            <Card.Title>S'inscrire</Card.Title>
                            <Card.Text>
                            Créer un compte pour profitez d'une experience utilisateur maximum
                            </Card.Text>
                            <Button onClick={() => navigate('/register')} style={{marginLeft: "10px"}} variant="success">S'inscrire</Button>{' '}
                        </Card.Body>
                    </Card>
                </Container>
            </>
        )}

        </>
    )
}

export default Landing;