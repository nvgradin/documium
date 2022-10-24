import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';

// components
import CreateUser from './TeamMembers';

// types
import { ContactsTypes } from '../data';

interface AboutContactProps {
    contact: ContactsTypes;
}

const AboutContact = ({ contact }: AboutContactProps) => {
    return (
        <Card>
            <Card.Body>
                <h6 className="mt-0 header-title">Detalles de la Empresa</h6>

                <div className="text-muted mt-3">
                    <p>
                    {contact.Notas}
                    </p>
                    <Row>
                        <Col lg={3} md={6}>
                            <div className="mt-4">
                                <p className="mb-2 text-uppercase fs-13 fw-bold">
                                    <i className="uil-bag-alt text-danger"></i> CIF
                                </p>
                                <h5 className="fs-16">{contact.CIF}</h5>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className="mt-4">
                                <p className="mb-2 text-uppercase fs-13 fw-bold">
                                    <i className="uil-envelope text-danger"></i> Email
                                </p>
                                <h5 className="fs-16">{contact.Email}</h5>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className="mt-4">
                                <p className="mb-2 text-uppercase fs-13 fw-bold">
                                    <i className="uil-phone text-danger"></i> Teléfono
                                </p>
                                <h5 className="fs-16">{contact.Telefono}</h5>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className="mt-4">
                                <p className="mb-2 text-uppercase fs-13 fw-bold">
                                    <i className="uil-globe text-danger"></i> Web
                                </p>
                                <h5 className="fs-16">{contact.Web}</h5>
                            </div>
                        </Col>
                    </Row>

                    <div className="assign team mt-4">
                        <CreateUser createUser={contact.createUser} />
                    </div>

                    <div className="mt-4">
                        <h6 className="fw-bold">Archivos</h6>

                        <Row>
                            <Col xl={4} md={6}>
                                <div className="p-2 border rounded mb-2">
                                    <div className="d-flex">
                                        <div className="avatar-sm fw-bold me-3 flex-shrink-0">
                                            <span className="avatar-title rounded bg-soft-primary text-primary">
                                                <i className="uil-file-plus-alt fs-18"></i>
                                            </span>
                                        </div>
                                        <div className="flex-grow-1">
                                            <Link to="#" className="d-inline-block mt-2">
                                                Seguro2022.pdf
                                            </Link>
                                        </div>
                                        <div className="float-end mt-1">
                                            <Link to="#" className="p-2">
                                                <i className="uil-download-alt fs-18"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={4} md={6}>
                                <div className="p-2 border rounded mb-2">
                                    <div className="d-flex">
                                        <div className="avatar-sm fw-bold me-3 flex-shrink-0">
                                            <span className="avatar-title rounded bg-soft-primary text-primary">
                                                <i className="uil-file-plus-alt fs-18"></i>
                                            </span>
                                        </div>
                                        <div className="flex-grow-1">
                                            <Link to="#" className="d-inline-block mt-2">
                                                Seguro2021.pdf
                                            </Link>
                                        </div>
                                        <div className="float-end mt-1">
                                            <Link to="#" className="p-2">
                                                <i className="uil-download-alt fs-18"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default AboutContact;
