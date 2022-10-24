import React, { useState } from 'react';
import { Row, Col, Card, Badge, ButtonGroup, Button, Nav, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';


// components
import Statistics from './Statistics';
import AboutDocuments from './AboutDocuments';
import Comments from './Comments';
import Attachments from './Attachments';
import Activities from './Activities';

// images
import avatar1 from '../../../../assets/images/users/avatar-9.jpg';
import avatar2 from '../../../../assets/images/users/avatar-10.jpg';
import avatar3 from '../../../../assets/images/users/avatar-1.jpg';
import avatar4 from '../../../../assets/images/users/avatar-3.jpg';
import grupogradin from '../../../../assets/images/users/grupo-gradin.jpg';

// dummy data
import { activity, DocumentsTypes } from '../data';

const DocumentDetail = () => {
    const document: DocumentsTypes = {
            id: 17,
            name:"Seguro2022",
            origen:"Entrada",
            empresainterna:"JJ Gradín",
            contacto: "AXA SEGUROS GENERALES SA",
            area:"Seguros",
            permisos:"todos",
            tipodocument:"Contrato",
            tag:"",
            notas: "Aseguradora AXA, Seguro 2022",
            createUser: [
              {
                image: grupogradin,
                name: "Grupo Gradín",
              },
            ], 
            url: "",
            documentDate: '15 de Octubre',
            createDate: '15 de Octubre',
        };
    const [activeTab, setactiveTab] = useState<string>('comments');

    //handles tab activation
    const handleSelect = (eventKey: string | null) => {
        setactiveTab(eventKey!);
    };

    return (
        <>
            <Row>
                <Col xs={12}>
                    <div className="page-title-box">
                        <h4 className="page-title">
                            Documento: {document.name}{' '}
                            <Badge bg="success" className="fs-13 fw-normal me-1">
                                {document.area}
                            </Badge>
                            <Badge bg="" className="badge-soft-primary fs-13 fw-normal">
                                {document.tipodocument}
                            </Badge>
                        </h4>
                        <div className="page-title-right">
                            <ButtonGroup className="ms-2 d-none d-sm-inline-block me-1">
                                <Button variant="soft-primary" className="btn btn-soft-primary btn-sm">
                                    <i className="uil uil-edit me-1"></i>Editar
                                </Button>
                            </ButtonGroup>
                            <ButtonGroup className="d-none d-sm-inline-block">
                                <Button className="btn btn-soft-danger btn-sm">
                                    <i className="uil uil-trash-alt me-1"></i>Eliminar
                                </Button>
                            </ButtonGroup>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xs={12}>
                    <Card>
                        <Card.Body className="p-0">
                            <h6 className="card-title border-bottom p-3 mb-0 header-title">Documento</h6>
                                <Col md={6} xl={6}>
                                    <div className="mt-8">
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
                                    </div>
                                </Col>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col>
                    <AboutDocuments document={document} />
                </Col>
            </Row>
        </>
    );
};

export default DocumentDetail;
