import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';

// images
import serverDown from '../../assets/images/server-down.png';

const ServerError = () => {
    return (
        <div className="account-pages mt-5 mb-5">
            <Container>
                <Row className="justify-content-center">
                    <Col xl={4} lg={5} xs={8}>
                        <div className="text-center">
                            <div>
                                <img src={serverDown} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} className="text-center">
                        <h3 className="mt-3">Opps, algo salió mal</h3>
                        <p className="text-muted mb-4">
                        Error del servidor 500. Nos disculpamos y estamos solucionando el problema.
                            <br /> Vuelva a intentarlo posteriormente.
                        </p>
                        <Link to="/" className="btn btn-lg btn-primary">
                            Volvamos al Dashboard
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ServerError;
