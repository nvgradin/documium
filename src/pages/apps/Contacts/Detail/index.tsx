import React, { useState } from 'react';
import { Row, Col,  ButtonGroup, Button, Nav, Tab } from 'react-bootstrap';

// components
import AboutContact from './AboutContact';
import Activities from './Activities';

// images
import grupogradin from '../../../../assets/images/users/grupo-gradin.jpg';

// dummy data
import { activity, ContactsTypes } from '../data';


const ContactDetail = () => {
    const contact: ContactsTypes = {
        id: 17,
        Empresa: "AXA SEGUROS GENERALES SA",
        CIF: "A60917978",
        Contacto: "",
        Dirección: "Av. Domingo Bueno, 10, 36400 O Porriño, Pontevedra",
        Email: "",
        Telefono: 986331410,
        Web: "",
        Notas: "Aseguradora AXA",
        createUser: [
            {
                image: grupogradin,
                name: 'Grupo Gradín',
            },
        ], 
        Url: ""
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
                            {contact.Empresa}{' '}
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
                <Col xl={8}>
                    <AboutContact contact={contact} />
                </Col>

                <Col xl={4}>
                    <Activities activity={activity} />
                </Col>
            </Row>
        </>
    );
};

export default ContactDetail;
