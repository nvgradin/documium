import project1 from '../../../assets/images/projects/project-1.jpg';
import project2 from '../../../assets/images/projects/project-2.jpg';


export interface folderDetailTypes {
    icon: string;
    name: string;
    variant: string;
}

export interface RecentFileTypes {
    name: string;
    folderName: string;
    lastviewed: string;
}

export interface FileItemTypes {
    id?: number;
    fileName?: string;
    fileSize?: string;
    previewImage?: string;
}

const folderDetails: folderDetailTypes[] = [
    {
        icon: 'bi bi-folder',
        name: 'Facturas',
        variant: 'info',
    },
    {
        icon: 'bi bi-folder',
        name: 'Licencias',
        variant: 'info',
    },
    {
        icon: 'bi bi-folder',
        name: 'Contrataciones',
        variant: 'info',
    },
    {
        icon: 'bi bi-folder',
        name: 'SIAL',
        variant: 'info',
    },
    {
        icon: 'bi bi-folder',
        name: 'JJ Gradín',
        variant: 'info',
    },
    {
        icon: 'Registro X',
        name: 'Registros',
        variant: 'info',
    },
];

const recentFiles: RecentFileTypes[] = [
    {
        name: 'Licencia',
        folderName: 'SIAL',
        lastviewed: '03 Dec',
    },
    {
        name: 'Horposa',
        folderName: 'Factura1',
        lastviewed: '05 Oct',
    },
    {
        name: 'Contrato',
        folderName: 'Recursos Humanos',
        lastviewed: '11 Nov',
    },
    {
        name: 'Mantenimiento',
        folderName: 'Obras',
        lastviewed: '11 Nov',
    },
    {
        name: 'Plano F0',
        folderName: 'Parque Empresarial do Fulao',
        lastviewed: '15 Mar',
    },
    {
        name: 'Plano F0',
        folderName: 'Parque Empresarial do Fulao',
        lastviewed: '15 Mar',
    },
    {
        name: 'Contrato',
        folderName: 'Obras y Mantenimiento',
        lastviewed: '14 Mar',
    },
    {
        name: 'Alquiler Factura',
        folderName: 'Inmuebles',
        lastviewed: '13 Mar',
    },
];

const files: FileItemTypes[] = [
    {
        id: 1,
        fileName: 'contrato.zip',
        fileSize: '2.3 MB',
        previewImage: project1,
    },
    {
        id: 2,
        fileName: 'factura_02.pdf',
        fileSize: '1.25 MB',
        previewImage: project2,
    },
];

export { folderDetails, recentFiles, files };
