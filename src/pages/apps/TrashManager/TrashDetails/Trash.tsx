import React from 'react';
import { Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

// components

// dummy data
import {  FileTrashItemTypes } from './data';

interface FileTrashProps {
    filetrash: FileTrashItemTypes[];
}


const Trash = ({ filetrash }: FileTrashProps) => {
    return (
        <>
            <h6 className="fs-18">Documentos en la papelera</h6>
            {(filetrash || []).map((filetrash, index) => {
                return (
                    <Card key={index} className={classNames('mb-2', 'shadow-none', 'border', { 'mt-3': index === 0 })}>
                        <div className="p-1 px-2">
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <img src={filetrash.previewImage} className="avatar-sm rounded" alt="" />
                                </div>
                                <div className="col ps-0">
                                    <Link to="#" className="text-muted fw-bold">
                                        {filetrash.fileName}
                                    </Link>
                                </div>
                                <div className="col-auto">
                                    <OverlayTrigger
                                        placement="bottom"
                                        overlay={<Tooltip id="file-download">Recuperar</Tooltip>}>
                                        <Link to="#" className="btn btn-link text-muted btn-lg p-0">
                                            <i className="uil uil-cloud-upload fs-14"></i>
                                        </Link>
                                    </OverlayTrigger>

                                    <OverlayTrigger
                                        placement="bottom"
                                        overlay={<Tooltip id="file-delete">Eliminar</Tooltip>}>
                                        <Link to="#" className="btn btn-link text-danger btn-lg p-0">
                                            <i className="uil uil-multiply fs-14"></i>
                                        </Link>
                                    </OverlayTrigger>
                                </div>
                            </div>
                        </div>
                    </Card>
                );
            })}
        </>        
    );
};

export default Trash;
