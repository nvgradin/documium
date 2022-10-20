import React, { useState } from 'react';
import { Card, Tab, Nav } from 'react-bootstrap';


// components
import Trash from './Trash';

// dummy data
import {  filetrash } from './data';

// TrashManager
const TrashDetails = () => {
    const [activeTab, setactiveTab] = useState<string>('trash');

    /**
     * handles tab activation
     * @param eventKey currently active tab
     */
    const handleSelect = (eventKey: string | null) => {
        setactiveTab(eventKey!);
    };
    return (
        <>
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
                        <Nav.Link eventKey="trash">Papelera</Nav.Link>
                    </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane active={activeTab === 'trash'} eventKey="trash">
                            <Trash filetrash={filetrash} />
                        </Tab.Pane>
                    </Tab.Content>
                </Card.Body>
            </Card>
        </>
    );
};

export default TrashDetails;
