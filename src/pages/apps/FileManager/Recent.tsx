import React from 'react';
import { Tab, Row, Col, Card, Nav } from 'react-bootstrap';

// components
import AllRecentFiles from './AllRecentFiles';

// dummy data
import { RecentFileTypes } from './data';

interface RecentProps {
    recentFiles: RecentFileTypes[];
}

const Recent = ({ recentFiles }: RecentProps) => {
    return (
        <Row>
            <Col xs={18}>
                <h6 className="fs-18"></h6>

                <Card className="border-0">
                    <Card.Body>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="all">
                            <Tab.Content className="text-muted pt-2">
                                <Tab.Pane eventKey="all">
                                    <AllRecentFiles documents={recentFiles} />
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default Recent;
