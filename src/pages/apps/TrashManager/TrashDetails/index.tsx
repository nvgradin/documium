import React, { useState } from 'react';
import { Card, Tab, Nav } from 'react-bootstrap';


// components
import Trash from './Trash';

// dummy data
import {  filetrash } from './data';

// TrashManager
const TrashDetails = () => {
    const [activeTab, setactiveTab] = useState<string>('filetrash');

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
                    <Tab.Content>
                        <Tab.Pane active={activeTab === 'filetrash'} eventKey="filetrash">
                            <Trash filetrash={filetrash} />
                        </Tab.Pane>
                    </Tab.Content>
                </Card.Body>
            </Card>
        </>
    );
};

export default TrashDetails;
