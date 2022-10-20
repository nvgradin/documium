import project1 from '../../../../assets/images/projects/project-1.jpg';
import project2 from '../../../../assets/images/projects/project-2.jpg';

export interface FileTrashItemTypes {
    id?: number;
    fileName?: string;
    fileSize?: string;
    previewImage?: string;
}

const filetrash: FileTrashItemTypes[] = [
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

export { filetrash };
