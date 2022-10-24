import React from 'react';
import { Row, Col, Card, Button, ButtonGroup, Badge, ProgressBar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import FeatherIcons from 'feather-icons-react';

// dummy data
import { documents, DocumentsTypes } from './data';

// single document
const SingleDocument = (props: { document: DocumentsTypes }) => {
    const document = props.document || {};
    const variant = document.origen === 'Entrada' ? 'salida' : 'interno';
    const displayCount = 3;

    let modifiedCreateUser;

    if (document.createUser.length <= displayCount || document.createUser.length - displayCount === 1) {
        modifiedCreateUser = document.createUser;
    } else {
        modifiedCreateUser = document.createUser.filter((m, index) => index < displayCount);
    }

    return (
        <Card>
            <Card.Body>
                <Badge bg={variant} className="float-end">
                    {document.origen}
                </Badge>
                <p className={classNames('text-' + variant, 'text-uppercase', 'fs-12', 'mb-2')}>{document.tipodocument}</p>
                <h5>
                    <Link to="#" className="text-dark">
                        {document.name}
                    </Link>
                </h5>
                <p className="text-muted mb-4">{document.notas}</p>

                <div>
                    {(modifiedCreateUser || []).map((user, index) => {
                        return (
                            <Link key={index} to="#">
                                {user.image && (
                                    <img src={user.image} className="avatar-sm m-1 rounded-circle" alt="" />
                                )}
                                {user.variant && (
                                    <div className="avatar-sm fw-bold d-inline-block m-1">
                                        <span
                                            className={classNames(
                                                'avatar-title',
                                                'rounded-circle',
                                                'bg-soft-' + user.variant,
                                                'text-' + user.variant
                                            )}>
                                            {user.name[0]}
                                        </span>
                                    </div>
                                )}
                            </Link>
                        );
                    })}
                    {document.createUser.length > modifiedCreateUser.length && (
                        <Link to="#">
                            <div className="avatar-sm fw-bold d-inline-block m-1">
                                <span className="avatar-title rounded-circle bg-soft-warning text-warning">
                                    {document.createUser.length - displayCount}+
                                </span>
                            </div>
                        </Link>
                    )}
                </div>
            </Card.Body>
            <Card.Body className="border-top">
                <Row className="align-items-center">
                    <Col sm="auto">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item pe-2">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={<Tooltip id="button-tooltip">Due date</Tooltip>}>
                                    <Link to="#" className="text-muted d-inline-block">
                                        {' '}
                                        <i className="uil uil-calender me-1"></i> {document.createDate}{' '}
                                    </Link>
                                </OverlayTrigger>
                            </li>
                            <li className="list-inline-item pe-2">
                                <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip">Tasks</Tooltip>}>
                                    <Link to="#" className="text-muted d-inline-block">
                                        {' '}
                                        <i className="uil uil-bars me-1"></i> {document.contacto}{' '}
                                    </Link>
                                </OverlayTrigger>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

const Documents = () => {
    return (
        <>
            <Row>
                <Col xs={12}>
                    <div className="page-title-box">
                        <h4 className="page-title">Document</h4>
                        <div className="page-title-right">
                            <div className="mt-2 mt-md-0">
                                <Button variant="danger" className="me-4 mb-2 mb-sm-0">
                                    <i className="uil-plus me-1"></i> Create Document
                                </Button>
                                <ButtonGroup>
                                    <Button variant="primary" className="mb-2 mb-sm-0">
                                        All
                                    </Button>
                                </ButtonGroup>
                                <ButtonGroup className="ms-md-1">
                                    <Button variant="white" className="mb-2 mb-sm-0">
                                        Ongoing
                                    </Button>
                                    <Button variant="white" className="mb-2 mb-sm-0">
                                        Finished
                                    </Button>
                                </ButtonGroup>
                                <ButtonGroup className="ms-2 d-none d-sm-inline-block me-1">
                                    <Button>
                                        <i className="uil uil-apps"></i>
                                    </Button>
                                </ButtonGroup>
                                <ButtonGroup className="d-none d-sm-inline-block">
                                    <Button variant="white">
                                        <i className="uil uil-align-left-justify"></i>
                                    </Button>
                                </ButtonGroup>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                {(documents || []).map((document, i) => {
                    return (
                        <Col xl={4} md={6} key={'proj-' + document.id}>
                            <SingleDocument document={document} />
                        </Col>
                    );
                })}
            </Row>

            <Row className="mb-3 mt-2">
                <Col xs={12}>
                    <div className="text-center">
                        <Button variant="white">
                            <FeatherIcons icon="loader" className="icon-dual icon-xs me-2" />
                            Cargar más
                        </Button>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default Documents;
