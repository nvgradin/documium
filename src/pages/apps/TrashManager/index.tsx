import React from 'react';
import { Col, Row } from 'react-bootstrap';

// components
import PageTitle from '../../../components/PageTitle';

import TrashDetails from './TrashDetails';

// dummy data

const TrashManager = () => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Papelera', path: '/apps/trashmanager'},
                ]}
                title={'Papelera'}
            />

            <Row>
                <Col>
                    <TrashDetails />
                </Col>
            </Row>
        </>
    );
};

export default TrashManager;
