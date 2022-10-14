import React from 'react';
import { Dropdown, Table } from 'react-bootstrap';

// dummy data
import { RecentFileTypes } from './data';

interface AllRecentFilesProps {
    recentFiles: RecentFileTypes[];
}

const AllRecentFiles = ({ recentFiles }: AllRecentFilesProps) => {
    return (
        <Table responsive className="table-nowrap table-centered mb-0">
            <thead>
                <tr>
                    <th className="border-0">Documento</th>
                    <th className="border-0">Carpeta</th>
                    <th className="border-0">Última Visualización</th>
                    <th className="border-0">Edicción</th>
                </tr>
            </thead>
            <tbody>
                {(recentFiles || []).map((file, index) => {
                    return (
                        <tr key={index}>
                            <td>{file.name}</td>
                            <td>{file.folderName}</td>
                            <td>{file.lastviewed}</td>
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
                                            Obtener Link para compartir
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
