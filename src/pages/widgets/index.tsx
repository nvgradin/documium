import React from 'react';
import { Col, Row } from 'react-bootstrap';

// components
import PageTitle from '../../components/PageTitle';
import MembersList from '../../components/MembersList';
import ChatList from '../../components/ChatList';

import ProfileCard1 from './UserProfile/ProfileCard1';
import ProfileCard2 from './UserProfile/ProfileCard2';
import ProfileCard3 from './UserProfile/ProfileCard3';
import ProfileCard4 from './UserProfile/ProfileCard4';
import Activities from './Activities';

// dummy data
import { topPerformers, chatMessages } from '../dashboard/Ecommerce/data';

import { activities } from './data';

const Widgets = () => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Components', path: '/apps/widgets' },
                    { label: 'Widgets', path: '/apps/widgets', active: true },
                ]}
                title={'Widgets'}
            />

            <Row>
                <Col xxl={3} md={5}>
                </Col>
                <Col xxl={4} md={7}>
                </Col>
                <Col xxl={4} md={6}>
                </Col>
                <Col xxl={4} md={6}>
                    <Activities activities={activities} />
                </Col>
            </Row>
        </>
    );
};

export default Widgets;
