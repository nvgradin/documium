import project1 from '../../../assets/images/projects/project-1.jpg';
import project2 from '../../../assets/images/projects/project-2.jpg';
import grupogradin from '../../../assets/images/users/grupo-gradin.jpg';


export interface folderDetailTypes {
    icon: string;
    name: string;
    variant: string;
}

export interface RecentFileTypes {
    id: number;
    name:string;
    origen: string;
    empresainterna: string;
    contacto: string;
    area: string;
    tipodocument: string;
    permisos: string;
    tag: string;
    notas:string;
    createUser: {
      image?: string;
      name: string;
      variant?: string;
    }[];
    url:string;
    documentDate: string;
    createDate: string;
}

export interface FileItemTypes {
    id?: number;
    fileName?: string;
    fileSize?: string;
    previewImage?: string;
}

export interface DocumentsTypes {
    id: number;
    name:string;
    origen: string;
    empresainterna: string;
    contacto: string;
    area: string;
    tipodocument: string;
    permisos: string;
    tag: string;
    notas:string;
    createUser: {
      image?: string;
      name: string;
      variant?: string;
    }[];
    url:string;
    documentDate: string;
    createDate: string;
}

const documents:DocumentsTypes[] = [
    {
    id: 17,
    name:"Seguro2022",
    origen:"Entrada",
    empresainterna:"JJ Gradín",
    contacto: "AXA SEGUROS GENERALES SA",
    area:"Seguros",
    permisos:"todos",
    tipodocument:"Contrato",
    tag:"",
    notas: "Aseguradora AXA, Seguro 2022",
    createUser: [
      {
        image: grupogradin,
        name: "Grupo Gradín",
      },
    ], 
    url: "Document/Details",
    documentDate: '15 de Octubre',
    createDate: '15 de Octubre',
    },
    {
    id: 1,
    name:"Licencia",
    origen:"Entrada",
    empresainterna:"SIAL",
    contacto: "Xunta de Galicia",
    area:"Jurídico",
    permisos:"todos",
    tipodocument:"Escrituras",
    tag:"",
    notas: "Licencia",
    createUser: [
      {
        image: grupogradin,
        name: "Grupo Gradín",
      },
    ], 
    url: "",
    documentDate: '15 de Octubre',
    createDate: '15 de Octubre',
    },
    {
    id: 2,
    name:"Factura1E",
    origen:"Entrada",
    empresainterna:"Horposa",
    contacto: "Nombre",
    area:"Contable",
    permisos:"todos",
    tipodocument:"Factura",
    tag:"",
    notas: "Factura",
    createUser: [
      {
        image: grupogradin,
        name: "Grupo Gradín",
      },
    ], 
    url: "",
    documentDate: '20 de Octubre',
    createDate: '20 de Octubre',
    },
    {
    id: 3,
    name:"Contrato",
    origen:"Interno",
    empresainterna:"Horposa",
    contacto: "Nombre",
    area:"Laboral",
    permisos:"todos",
    tipodocument:"Contrato",
    tag:"",
    notas: "Contrato",
    createUser: [
      {
        image: grupogradin,
        name: "Grupo Gradín",
      },
    ], 
    url: "",
    documentDate: '20 de Abril',
    createDate: '20 de Abril',
    },
    {
    id: 4,
    name:"Mantenimiento",
    origen:"Interno",
    empresainterna:"JJ Gradín",
    contacto: "Lear",
    area:"Obras",
    permisos:"todos",
    tipodocument:"Obra",
    tag:"",
    notas: "Obra de mantenimiento",
    createUser: [
      {
        image: grupogradin,
        name: "Grupo Gradín",
      },
    ], 
    url: "",
    documentDate: '20 de Septiembre',
    createDate: '20 de Septiembre',
    },
    {
    id: 5,
    name:"PLano 1",
    origen:"Interno",
    empresainterna:"Parque Empresarial do Fulao",
    contacto: "Kaleido",
    area:"Arrendamiento",
    permisos:"todos",
    tipodocument:"Plano",
    tag:"",
    notas: "Plano nave",
    createUser: [
      {
        image: grupogradin,
        name: "Grupo Gradín",
      },
    ], 
    url: "",
    documentDate: '20 de Septiembre',
    createDate: '20 de Septiembre',
    },
    {
    id: 6,
    name:"PLano 2",
    origen:"Interno",
    empresainterna:"Parque Empresarial do Fulao",
    contacto: "Sea",
    area:"Arrendamiento",
    permisos:"todos",
    tipodocument:"Plano",
    tag:"",
    notas: "Plano nave",
    createUser: [
      {
        image: grupogradin,
        name: "Grupo Gradín",
      },
    ], 
    url: "",
    documentDate: '27 de Septiembre',
    createDate: '27 de Septiembre',
    },
    {
    id: 7,
    name:"Contrato",
    origen:"Interno",
    empresainterna:"A Granxa",
    contacto: "Nombre",
    area:"Laboral",
    permisos:"todos",
    tipodocument:"Contrato",
    tag:"",
    notas: "Contrato obras de mantenimiento",
    createUser: [
      {
        image: grupogradin,
        name: "Grupo Gradín",
      },
    ], 
    url: "",
    documentDate: '2 de Octubre',
    createDate: '2 de Octubre',
    },
    {
    id: 8,
    name:"Ingreso Alquiler comprobante",
    origen:"Externo",
    empresainterna:"A Granxa",
    contacto: "Nombre",
    area:"Contable",
    permisos:"todos",
    tipodocument:"Contrato",
    tag:"",
    notas: "Alquiler obras de mantenimiento",
    createUser: [
      {
        image: grupogradin,
        name: "Grupo Gradín",
      },
    ], 
    url: "",
    documentDate: '2 de Octubre',
    createDate: '2 de Octubre',
    },
];


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

const recentFiles:RecentFileTypes[] = [
    {
    id: 17,
    name:"Seguro2022",
    origen:"Entrada",
    empresainterna:"JJ Gradín",
    contacto: "AXA SEGUROS GENERALES SA",
    area:"Seguros",
    permisos:"todos",
    tipodocument:"Contrato",
    tag:"",
    notas: "Aseguradora AXA, Seguro 2022",
    createUser: [
      {
        image: grupogradin,
        name: "Grupo Gradín",
      },
    ], 
    url: "Document/Details",
    documentDate: '15 de Octubre',
    createDate: '15 de Octubre',
    },
    {
    id: 1,
    name:"Licencia",
    origen:"Entrada",
    empresainterna:"SIAL",
    contacto: "Xunta de Galicia",
    area:"Jurídico",
    permisos:"todos",
    tipodocument:"Escrituras",
    tag:"",
    notas: "Licencia",
    createUser: [
      {
        image: grupogradin,
        name: "Grupo Gradín",
      },
    ], 
    url: "",
    documentDate: '15 de Octubre',
    createDate: '15 de Octubre',
    },
    {
    id: 2,
    name:"Factura1E",
    origen:"Entrada",
    empresainterna:"Horposa",
    contacto: "Nombre",
    area:"Contable",
    permisos:"todos",
    tipodocument:"Factura",
    tag:"",
    notas: "Factura",
    createUser: [
      {
        image: grupogradin,
        name: "Grupo Gradín",
      },
    ], 
    url: "",
    documentDate: '20 de Octubre',
    createDate: '20 de Octubre',
    },
    {
    id: 3,
    name:"Contrato",
    origen:"Interno",
    empresainterna:"Horposa",
    contacto: "Nombre",
    area:"Laboral",
    permisos:"todos",
    tipodocument:"Contrato",
    tag:"",
    notas: "Contrato",
    createUser: [
      {
        image: grupogradin,
        name: "Grupo Gradín",
      },
    ], 
    url: "",
    documentDate: '20 de Abril',
    createDate: '20 de Abril',
    },
    {
    id: 4,
    name:"Mantenimiento",
    origen:"Interno",
    empresainterna:"JJ Gradín",
    contacto: "Lear",
    area:"Obras",
    permisos:"todos",
    tipodocument:"Obra",
    tag:"",
    notas: "Obra de mantenimiento",
    createUser: [
      {
        image: grupogradin,
        name: "Grupo Gradín",
      },
    ], 
    url: "",
    documentDate: '20 de Septiembre',
    createDate: '20 de Septiembre',
    },
    {
    id: 5,
    name:"PLano 1",
    origen:"Interno",
    empresainterna:"Parque Empresarial do Fulao",
    contacto: "Kaleido",
    area:"Arrendamiento",
    permisos:"todos",
    tipodocument:"Plano",
    tag:"",
    notas: "Plano nave",
    createUser: [
      {
        image: grupogradin,
        name: "Grupo Gradín",
      },
    ], 
    url: "",
    documentDate: '20 de Septiembre',
    createDate: '20 de Septiembre',
    },
    {
    id: 6,
    name:"PLano 2",
    origen:"Interno",
    empresainterna:"Parque Empresarial do Fulao",
    contacto: "Sea",
    area:"Arrendamiento",
    permisos:"todos",
    tipodocument:"Plano",
    tag:"",
    notas: "Plano nave",
    createUser: [
      {
        image: grupogradin,
        name: "Grupo Gradín",
      },
    ], 
    url: "",
    documentDate: '27 de Septiembre',
    createDate: '27 de Septiembre',
    },
    {
    id: 7,
    name:"Contrato",
    origen:"Interno",
    empresainterna:"A Granxa",
    contacto: "Nombre",
    area:"Laboral",
    permisos:"todos",
    tipodocument:"Contrato",
    tag:"",
    notas: "Contrato obras de mantenimiento",
    createUser: [
      {
        image: grupogradin,
        name: "Grupo Gradín",
      },
    ], 
    url: "",
    documentDate: '2 de Octubre',
    createDate: '2 de Octubre',
    },
    {
    id: 8,
    name:"Ingreso Alquiler comprobante",
    origen:"Externo",
    empresainterna:"A Granxa",
    contacto: "Nombre",
    area:"Contable",
    permisos:"todos",
    tipodocument:"Contrato",
    tag:"",
    notas: "Alquiler obras de mantenimiento",
    createUser: [
      {
        image: grupogradin,
        name: "Grupo Gradín",
      },
    ], 
    url: "",
    documentDate: '2 de Octubre',
    createDate: '2 de Octubre',
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

export { folderDetails, recentFiles, files, documents };
