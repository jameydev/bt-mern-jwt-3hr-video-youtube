import { Container, Card, Button } from 'react-bootstrap';

export default function Hero() {
    return (
        <div className="py-5">
            <Container className="d-flex justify-content-center">
                <Card className="p-5 d-flex flex-column align-items-center">
                    <h1 className="text-center mb">
                        MERN Authentication
                    </h1>
                    <p className="text-center mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptas.
                    </p>
                    <div className="d-flex">
                        <Button variant="primary" href="/login" className="me-3">
                            Login
                        </Button>
                        <Button href="/register" variant="secondary">
                            Register
                        </Button>
                    </div>
                </Card>
            </Container>
        </div>
    );
}