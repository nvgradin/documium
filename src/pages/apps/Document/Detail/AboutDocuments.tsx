import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';

// components
import CreateUser from './TeamMembers';

// types
import { DocumentsTypes } from '../data';

interface AboutDocumentProps {
    document: DocumentsTypes;
}

const AboutDocument = ({ document }: AboutDocumentProps) => {
    return (
        <Card>
            <Card.Body>
                <h6 className="mt-0 header-title">Notas</h6>

                <div className="text-muted mt-3">
                    <p>
                        {document.notas}
                    </p>
                    <div className="tags">
                        <h6 className="fw-bold">Tags</h6>
                        <div className="text-uppercase">
                            <Link to="#" className="badge badge-soft-primary me-2">
                                Seguro
                            </Link>
                            <Link to="#" className="badge badge-soft-primary me-2">
                                2022
                            </Link>
                        </div>
                    </div>

                    <Row>
                        <Col lg={3} md={6}>
                            <div className="mt-4">
                                <p className="mb-2 text-uppercase fs-13 fw-bold">
                                    <i className="uil-calender text-danger"></i> Fecha de Registro
                                </p>
                                <h5 className="fs-16">{document.createDate}</h5>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className="mt-4">
                                <p className="mb-2 text-uppercase fs-13 fw-bold">
                                    <i className="uil-calender text-danger"></i> Fecha de Documento
                                </p>
                                <h5 className="fs-16">{document.documentDate}</h5>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className="mt-4">
                                <p className="mb-2 text-uppercase fs-13 fw-bold">
                                    <i className="uil-file-question-alt text-danger"></i> Tipo de Documento
                                </p>
                                <h5 className="fs-16">{document.tipodocument}</h5>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className="mt-4">
                                <p className="mb-2 text-uppercase fs-13 fw-bold">
                                    <i className="uil-books text-danger"></i> Área
                                </p>
                                <h5 className="fs-16">{document.area}</h5>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className="mt-4">
                                <p className="mb-2 text-uppercase fs-13 fw-bold">
                                    <i className="uil-users-alt text-danger"></i> Contacto
                                </p>
                                <h5 className="fs-16">{document.contacto}</h5>
                            </div>
                        </Col>
                    </Row>

                    <div className="assign team mt-4">
                        <CreateUser createUser={document.createUser} />
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default AboutDocument;
