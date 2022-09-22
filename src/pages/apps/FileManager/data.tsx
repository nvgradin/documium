export interface folderDetailTypes {
    icon: string;
    name: string;
    size: string;
    variant: string;
}

export interface RecentFileTypes {
    name: string;
    folderName: string;
    fileSize: string;
    lastviewed: string;
}

const folderDetails: folderDetailTypes[] = [
    {
        icon: 'bi bi-file-earmark-zip',
        name: 'Facturas',
        size: '2.3 MB',
        variant: 'warning',
    },
    {
        icon: 'bi bi-images',
        name: 'Licencias',
        size: '17.3 GB',
        variant: 'danger',
    },
    {
        icon: 'bi bi-file-earmark-pdf',
        name: 'Contrataciones',
        size: '3.9 MB',
        variant: 'danger',
    },
    {
        icon: 'bi bi-file-earmark-ppt',
        name: 'Wedding-project.ppt',
        size: '350 MB',
        variant: 'primary',
    },
    {
        icon: 'bi bi-file-earmark-excel',
        name: 'Database.xlsx',
        size: '17 MB',
        variant: 'success',
    },
    {
        icon: 'bi bi-folder',
        name: 'Songs',
        size: '79.4 GB',
        variant: 'info',
    },
];

const recentFiles: RecentFileTypes[] = [
    {
        name: 'App Design & Devlopment',
        folderName: 'Work',
        fileSize: '5.6 GB',
        lastviewed: '03 Dec',
    },
    {
        name: 'Shreyu-admin.zip',
        folderName: 'Shreyu',
        fileSize: '1.3 GB',
        lastviewed: '05 Oct',
    },
    {
        name: 'Profile.jpg',
        folderName: 'Photo',
        fileSize: '2.6 MB',
        lastviewed: '11 Nov',
    },
    {
        name: 'Sign.jpeg',
        folderName: 'Photo',
        fileSize: '1.3 MB',
        lastviewed: '11 Nov',
    },
    {
        name: 'Licence.pdf',
        folderName: 'Personal',
        fileSize: '7.8 MB',
        lastviewed: '15 Mar',
    },
    {
        name: 'Photo',
        folderName: 'Personal',
        fileSize: '17.3 GB',
        lastviewed: '15 Mar',
    },
    {
        name: 'Teri Ladki.mp3',
        folderName: 'Song',
        fileSize: '8.9 MB',
        lastviewed: '14 Mar',
    },
    {
        name: 'Data.doc',
        folderName: 'Shreyu',
        fileSize: '233 KB',
        lastviewed: '13 Mar',
    },
];

export { folderDetails, recentFiles };
