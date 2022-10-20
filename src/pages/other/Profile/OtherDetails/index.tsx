import React, { useState } from 'react';
import { Card, Tab, Nav } from 'react-bootstrap';

// components
import Activity from './Activity';
import MiCuenta from './MiCuenta';
import Messages from './Messages';
import Projects from './Projects';
import Tasks from './Tasks';
import Files from './Files';

// dummy data
import { projects } from '../../../apps/Projects/data';
import { todayTasks, upcomingTasks } from '../../../apps/Tasks/List/data';

import { activityTimeline, messages, files } from './data';
import {  micuenta } from './data';

const OtherDetails = () => {
    const [activeTab, setactiveTab] = useState<string>('micuenta');

    /**
     * handles tab activation
     * @param eventKey currently active tab
     */
    const handleSelect = (eventKey: string | null) => {
        setactiveTab(eventKey!);
    };

    return (
        <Card>
            <Card.Body>
                <Nav
                    as="ul"
                    variant="pills"
                    justify
                    className="navtab-bg p-1"
                    activeKey={activeTab}
                    onSelect={handleSelect}>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="micuenta">Mi cuenta</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="files">Documentos</Nav.Link>
                    </Nav.Item>
                </Nav>

                <Tab.Content>
                    <Tab.Pane active={activeTab === 'micuenta'} eventKey="micuenta">
                        <MiCuenta micuenta={micuenta}/>
                    </Tab.Pane>
                    <Tab.Pane active={activeTab === 'files'} eventKey="files">
                        <Files files={files} />
                    </Tab.Pane>
                </Tab.Content>
            </Card.Body>
        </Card>
    );
};

export default OtherDetails;
