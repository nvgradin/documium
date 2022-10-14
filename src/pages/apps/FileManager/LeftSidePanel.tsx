import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

// images
import user from '../../../assets/images/users/avatar-5.jpg';

const LeftSidePanel = () => {
    const apexOpts: ApexOptions = {
        chart: {
            height: 225,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '70% used',
                },
            },
        },
        colors: ['#43d39e'],
        labels: ['256 GB'],
    };

    const apexData = [58];

    return (
        <Card className="inbox-leftbar border-0 pb-1 pb-lg-4 h-100">

            <div className="mail-list mb-0 mb-lg-4 fs-15">
                <Link to="#" className="list-group-item border-0">
                    <i className="bi bi-folder me-2"></i>Carpetas
                </Link>
                <Link to="#" className="list-group-item border-0 my-1 text-muted">
                    <i className="bi bi-card-text me-2"></i>Documentos
                </Link>
                <Link to="#" className="list-group-item border-0 my-1 text-muted">
                    <i className="bi bi-download me-2"></i>Descargas
                </Link>
                <Link to="#" className="list-group-item border-0 my-1 text-muted">
                    <i className="bi bi-clock me-2"></i>Recientes
                </Link>
                <Link to="#" className="list-group-item border-0 my-1 text-muted">
                    <i className="bi bi-trash me-2"></i>Papelera
                </Link>
            </div>

        </Card>
    );
};

export default LeftSidePanel;
