import React from 'react';
import { Row, Col, Card, Form, FloatingLabel, InputGroup, Button } from 'react-bootstrap';
import Select from 'react-select';

// components
import PageTitle from '../../components/PageTitle';
import Table from '../../components/Table';

//dummy data
import { contactsRecords as contacts } from '../tables/data';

const columns = [
    {
        Header: 'ID',
        accessor: 'id',
        sort: false,
    },
    {
        Header: 'Empresa',
        accessor: 'Empresa',
        sort: true,
    },
    {
        Header: 'CIF',
        accessor: 'CIF',
        sort: true,
    },
    {
        Header: 'Contacto',
        accessor: 'contacto',
        sort: true,
    },
    {
        Header: 'Dirección',
        accessor: 'direccion',
        sort: false,
    },
    {
        Header: 'Email',
        accessor: 'email',
        sort: true,
    },
    {
        Header: 'Teléfono',
        accessor: 'phone',
        sort: false,
    },
    {
        Header: 'Web',
        accessor: 'web',
        sort: false,
    },
    {
        Header: 'Notas',
        accessor: 'notas',
        sort: false,
    },
];

const sizePerPageList = [
    {
        text: '5',
        value: 5,
    },
    {
        text: '10',
        value: 10,
    },
    {
        text: '25',
        value: 25,
    },
    {
        text: 'All',
        value: contacts.length,
    },
];

const ContactInputElements = () => {
    return (
       <Row>
            <Col>
             <Card>
            <Card.Body>
                <h4 className="header-title mt-0">Añadir Contacto</h4>
                <p className="sub-header">
                    Añade un nuevo contacto
                </p>
                <Form className="form-horizontal">
                    <Row>
                        <Col lg={11}>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="simpleinput">
                                    Empresa
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control type="text" id="simpleinput" placeholder="Nombre de Empresa..." />
                                </Col>
                            </Form.Group> 
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2}>
                                    CIF/NIF
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control type="text" name="simpleinput" placeholder="Añadir CIF/NIF"/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-email">
                                    Email
                                </Form.Label>
                                <Col lg={10}>
                                     <Form.Control type="email" placeholder="name@example.com" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2}>
                                    Télefono
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control type="tel" name="tel" placeholder="Añadir Teléfono"/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2}>
                                    Web
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control type="url" name="url" placeholder="Añadir Web"/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-textarea">
                                    Notas
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control as="textarea" rows={5} id="notas" placeholder="Añadir información adiccional" />
                                </Col>
                            </Form.Group>
                            <div className="clearfix text-end mt-3">
                                    <Button variant="success">
                                    Guardar<i className="uil uil-arrow-right me-1"></i> 
                                    </Button>
                             </div>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
             </Card>
            <Card>
                <Card.Body>
                    <h4 className="header-title">Empresas</h4>
                    <p className="text-muted fs-14 mb-4">Listado de Empresas y Contactos</p>

                    <Table
                        columns={columns}
                        data={contacts}
                        pageSize={10}
                        sizePerPageList={sizePerPageList}
                        isSortable={true}
                        pagination={true}
                        isSearchable={true}
                    />
                </Card.Body>
            </Card>
        </Col>
    </Row>
    );
};

const ContactForms = () => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Formularios', path: '/forms/contact' },
                    { label: 'Contactos', path: '/forms/contact', active: true },
                ]}
                title={'Contactos'}
            />

            <Row>
                <Col xs={12}>
                    <ContactInputElements />
                </Col>
            </Row>
        </React.Fragment>
    );
};
export default ContactForms;
