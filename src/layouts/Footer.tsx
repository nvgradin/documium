import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container-fluid">
                <Row>
                    <Col sm={6}>
                        {currentYear} &copy; Desarrollo por <Link to="#">Nazareth Gradín</Link>
                    </Col>

                    <Col sm={6}>
                        <div className="text-sm-end footer-links d-none d-sm-block">
                            <Link to="#">Grupo Gradín</Link>
                        </div>
                    </Col>
                </Row>
            </div>
        </footer>
    );
};

export default Footer;
