import React from 'react';
import { Col, Row } from 'react-bootstrap';

// components
import PageTitle from '../../components/PageTitle';
import MembersList from '../../components/MembersList';
import ChatList from '../../components/ChatList';
import Tasks from '../../components/Tasks';

import ProfileCard1 from './UserProfile/ProfileCard1';
import ProfileCard2 from './UserProfile/ProfileCard2';
import ProfileCard3 from './UserProfile/ProfileCard3';
import ProfileCard4 from './UserProfile/ProfileCard4';
import OverView from './OverView';
import Activities from './Activities';

// dummy data
import { topPerformers, chatMessages, tasks } from '../dashboard/Ecommerce/data';

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

            <h4 className="mb-3 pb-1">Profile/User</h4>

            <Row>
                <Col md={6} xxl={3}>
                    <ProfileCard1 />
                </Col>
                <Col md={6} xxl={3}>
                    <ProfileCard2 />
                </Col>
                <Col md={6} xxl={3}>
                    <ProfileCard3 />
                </Col>
                <Col md={6} xxl={3}>
                    <ProfileCard4 />
                </Col>
            </Row>

            <h4 className="mb-3 pb-1">Team</h4>

            <Row>
                <Col xxl={3} md={5}>
                    <MembersList title={'Team Members'} members={topPerformers} />
                </Col>
                <Col xxl={4} md={7}>
                    <ChatList title="Team Chat" messages={chatMessages} />
                </Col>

                <Col xxl={4} md={4}>
                    <OverView />
                </Col>
                <Col xxl={4} md={6}>
                    <Tasks tasks={tasks} />
                </Col>
                <Col xxl={4} md={6}>
                    <Activities activities={activities} />
                </Col>
            </Row>
        </>
    );
};

export default Widgets;
