import React from 'react';
import { Row, Col } from 'react-bootstrap';

// components
import PageTitle from '../../../components/PageTitle';

import TopPanel from './TopPanel';
import Folders from './Folders';
import Recent from './Recent';

// dummy data
import { folderDetails, recentFiles } from './data';

// FileManager
const FileManager = () => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Gestor', path: '/apps/file-manager' },
                ]}
                title={'Documentos'}
            />
            <Row>
                <Col>
                    <div className="bg-transparent">
                        {/* right side bar */}
                        <div className="inbox-rightbar h-100 pb-0">
                            <TopPanel />                            
                        </div>

                        {/* recent data */}
                        <div className="inbox-rightbar recent-data">
                            <Recent recentFiles={recentFiles} />
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default FileManager;
