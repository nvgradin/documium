import React from 'react';
import { Dropdown, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// dummy data
import { RecentFileTypes, DocumentsTypes } from './data';

interface AllRecentFilesProps {
    recentFiles: RecentFileTypes[];
}

interface AllDocumentsProps {
    documents: DocumentsTypes[];
}

const AllRecentFiles = ({ documents }: AllDocumentsProps) => {
    return (
        <Table responsive className="table-nowrap table-centered mb-0" >
            <thead>
                <tr>
                    <th className="border-0">Documento</th>
                    <th className="border-0">Contacto</th>
                    <th className="border-0">Fechas</th>
                    <th className="border-0">Área</th>
                    <th className="border-0">Edicción</th>
                </tr>
            </thead>
            <tbody>
                {(documents || []).map((document, index) => {
                    return (
                        <tr key={index}>
                            <td>{document.name}</td>
                            <td>{document.contacto}</td>
                            <td>{document.createDate}</td>
                            <td>{document.area}</td>
                            <td>
                                <Dropdown>
                                    <Dropdown.Toggle
                                        as="a"
                                        className="cursor-pointer table-action-btn btn btn-light btn-xs">
                                        <i className="uil uil-ellipsis-h"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu align="end">
                                        <Dropdown.Item>
                                            <i className="uil uil-share-alt me-2 text-muted vertical-middle"></i>
                                            Compartir
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <i className="uil uil-link-h me-2 text-muted vertical-middle"></i>
                                            <Link to="{document.url}" className="text-dark">
                                            Ver más</Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <i className="uil uil-pen me-2 text-muted vertical-middle"></i>
                                            Renombrar
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <i className="uil uil-arrow-to-bottom me-2 text-muted vertical-middle"></i>
                                            Descargar
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <i className="uil uil-trash-alt me-2 text-muted vertical-middle"></i>
                                            Eliminar
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
};

export default AllRecentFiles;
