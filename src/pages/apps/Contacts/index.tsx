import React from 'react';
import { Row, Col, Card, Button, ButtonGroup, Badge, ProgressBar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import FeatherIcons from 'feather-icons-react';

// components
import PageTitle from '../../../components/PageTitle';

// dummy data
import ContactCreate from './ContactCreate';

const Contacts= () => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Contactos', path: 'grupogradin/contactos', active: true },
                ]}
                title={'Contactos'}
            />        
            <Row>
                <Col xs={12}>
                    <div className="page-title-box">
                        <div className="page-title-right">
                            <div className="mt-2 mt-md-0">
                                <Button variant="danger" className="me-4 mb-2 mb-sm-0">
                                    <i className="uil-plus me-1"></i> Crear Contacto
                                </Button>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                        <Col>
                            <ContactCreate />
                        </Col>
            </Row>

        </React.Fragment>
    );
};

export default Contacts;
