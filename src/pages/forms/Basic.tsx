import React from 'react';
import { Row, Col, Card, Form, FloatingLabel, InputGroup, Button } from 'react-bootstrap';
import Select from 'react-select';

// components
import PageTitle from '../../components/PageTitle';
import FileUploader from '../../components/FileUploader';

const BasicInputElements = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mt-0">Añadir Documento</h4>
                <p className="sub-header">
                    Registro nuevo de documento
                </p>
                <Form className="form-horizontal">
                    <Row>
                        <Col md={6}>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="simpleinput">
                                    Nombre
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control type="text" id="simpleinput" defaultValue="Nombre del Archivo..." />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2}>
                                    Origen
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Check
                                        type="radio"
                                        className="mb-1"
                                        id="default-radio1"
                                        name="customRadio"
                                        label="Entrada"
                                    />
                                    <Form.Check
                                        type="radio"
                                        id="default-radio2"
                                        name="customRadio"
                                        label="Salida"
                                        defaultChecked
                                    />
                                    <Form.Check
                                        type="radio"
                                        id="default-radio2"
                                        name="customRadio"
                                        label="Interno"
                                        defaultChecked
                                    />
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
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-email">
                                    Contactos
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control
                                        type="text"
                                        id="contactos-relacionados"
                                        name="example-email"
                                        placeholder="Contacto"
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-email">
                                    Emails
                                </Form.Label>
                                <Col lg={10}>
                                     <Form.Control type="email" placeholder="name@example.com" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2}>
                                    Tel
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
                        </Col>
                        <Col md={6}>
                        <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2}>
                                    Remitente / Destinatario
                                </Form.Label>
                                <Col lg={10}>
                                <Form.Control
                                        type="text"
                                        id="organizaciones"
                                        name="organizaciones"
                                        placeholder="Añade remitente o destinatario"
                                    />
                                </Col>
                            </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2}>
                                    Empresa
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Select>
                                        <option>JJ.Gradín</option>
                                        <option>SIAL</option>
                                        <option>Grupo Gradín</option>
                                        <option>Horposa</option>
                                        <option>A Granxa</option>
                                    </Form.Select>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-date">
                                    Fecha del documento
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control id="example-date" type="date" name="date" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-date">
                                    Fecha de subida
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control id="example-date" type="date" name="date" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2}>
                                    Área
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Select>
                                        <option>Arrendamientos</option>
                                        <option>Auditoría</option>
                                        <option>Concesiones</option>
                                        <option>Contable</option>
                                        <option>Financiero</option>
                                        <option>Fiscal</option>
                                        <option>Jurídico</option>
                                        <option>Laboral</option>
                                        <option>OTS</option>
                                        <option>Parque Emp. do Fulao</option>
                                        <option>Seguros</option>
                                    </Form.Select>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2}>
                                    Tipo de documento
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Select>
                                        <option>Carta</option>
                                        <option>Contrato</option>
                                        <option>Email</option>
                                        <option>Escrituras</option>
                                        <option>Facturas</option>
                                        <option>Planos</option>
                                        <option>Presupuestos</option>
                                        <option>Otros</option>
                                    </Form.Select>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="simpleinput">
                                    Tags
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control type="text" id="simpleinput" defaultValue="Tags" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-color">
                                    Permisos
                                </Form.Label>
                                <Col lg={10}>
                                    <Select
                                        isMulti={true}
                                        options={[
                                            { value: 'publico', label: 'Público' },
                                            { value: 'privado', label: 'Privado' },
                                            { value: 'user1', label: 'Usuario 1' },
                                            { value: 'user2', label: 'Usuario 2' },
                                        ]}
                                        className="react-select react-select-container"
                                        classNamePrefix="react-select" placeholder="Selecciona permisos"></Select>
                                </Col>

                            </Form.Group>
                        </Col>
                        <FileUploader
                                onFileUpload={(files) => {
                                    console.log('Uploaded files - ', files);
                                }}
                            />
                                                            <div className="clearfix text-end mt-3">
                                    <Button variant="success">
                                        <i className="uil uil-arrow-right me-1"></i> Subir
                                    </Button>
                                  </div>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    );
};

const FloatingLabels = () => {
    return (
        <>
            <h4 className="mb-3 header-title mt-0">Floating label</h4>

            <Row>
                <Col>
                    <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                </Col>
            </Row>
        </>
    );
};

const FloatingTextareaSelects = () => {
    return (
        <>
            <h4 className="mb-3 header-title mt-0">Floating Textarea</h4>
            <Row>
                <Col md>
                    <FloatingLabel className="mb-3" controlId="floatingTextarea2" label="Comments">
                        <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }} />
                    </FloatingLabel>
                </Col>
            </Row>

            <h4 className="mb-3 header-title mt-0">Floating Selects</h4>
            <Row>
                <Col md>
                    <FloatingLabel controlId="floatingSelectGrid" label="Works with selects">
                        <Form.Select aria-label="Floating label select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </FloatingLabel>
                </Col>
            </Row>
        </>
    );
};

const SelectInput = () => {
    return (
        <>
            <h4 className="header-title mt-0">Select menu</h4>
            <p className="sub-header">
                Custom <code>&lt;select&gt;</code> menus need only a custom class, <code>.form-select</code> to trigger
                the custom styles.
            </p>

            <Form.Select className="mb-2" aria-label="Default select example">
                <option defaultValue="0">Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>

            <Form.Select className="mb-2" size="lg" aria-label="large select example">
                <option defaultValue="0">Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>

            <Form.Select size="sm" aria-label="small select example">
                <option defaultValue="0">Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>
        </>
    );
};

const Switches = () => {
    return (
        <div className="mt-4">
            <h4 className="header-title">Switches</h4>
            <p className="sub-header">
                A switch has the markup of a custom checkbox but uses the <code>.form-switch</code> class to render a
                toggle switch. Switches also support the <code>disabled</code> attribute.
            </p>

            <Form.Check type="switch" id="custom-switch" className="mb-2" label="Toggle this switch element" />
            <Form.Check
                disabled
                type="switch"
                label="Disabled switch element"
                id="disabled-custom-switch"
                className="mt-1"
            />
        </div>
    );
};

const CheckboxesRadios = () => {
    return (
        <>
            <h4 className="header-title mt-0">Checkboxes</h4>
            <div className="mt-3">
                <Form.Check
                    type="checkbox"
                    className="mb-1"
                    id="default-checkbox1"
                    label="Check this custom checkbox"
                    defaultChecked
                />
                <Form.Check type="checkbox" id="default-checkbox2" label="Check this custom checkbox" />
            </div>

            <h4 className="header-title mt-4">Radios</h4>
            <div>
                <Form.Check
                    type="radio"
                    className="mb-1"
                    id="default-radio1"
                    name="customRadio"
                    label="Toggle this custom radio"
                />
                <Form.Check
                    type="radio"
                    id="default-radio2"
                    name="customRadio"
                    label="Or toggle this other custom radio"
                    defaultChecked
                />
            </div>

            <h4 className="header-title mt-4">Disabled</h4>
            <div>
                <Form.Check
                    type="checkbox"
                    className="mb-1"
                    id="customCheckDisabled1"
                    label="Check this custom checkbox"
                    disabled
                />
                <Form.Check
                    type="radio"
                    id="customRadioDisabled2"
                    name="customRadioDisabled2"
                    label="Toggle this custom radio"
                    disabled
                />
            </div>
        </>
    );
};

const BasicForms = () => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Forms', path: '/forms/basic' },
                    { label: 'Basic Elements', path: '/forms/basic', active: true },
                ]}
                title={'Basic Elements'}
            />

            <Row>
                <Col xs={12}>
                    <BasicInputElements />
                </Col>
            </Row>
        </React.Fragment>
    );
};
export default BasicForms;
