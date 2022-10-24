// images
import user1 from '../../../assets/images/users/avatar-1.jpg';
import user2 from '../../../assets/images/users/avatar-2.jpg';
import user3 from '../../../assets/images/users/avatar-3.jpg';
import user4 from '../../../assets/images/users/avatar-4.jpg';
import user5 from '../../../assets/images/users/avatar-5.jpg';
import user6 from '../../../assets/images/users/avatar-6.jpg';
import user7 from '../../../assets/images/users/avatar-7.jpg';
import user8 from '../../../assets/images/users/avatar-8.jpg';
import user9 from '../../../assets/images/users/avatar-9.jpg';
import user10 from '../../../assets/images/users/avatar-10.jpg';
import grupogradin from '../../../assets/images/users/grupo-gradin.jpg';


export interface ActivityTypes {
    date: string;
    variant: string;
    title: string;
    description: string;
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
    url: "",
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

const activity: ActivityTypes[] = [
    {
        date: '09 Jan',
        variant: 'primary',
        title: 'Bryan',
        description: 'Neque porro quisquam est',
    },
    {
        date: '08 Jan',
        variant: 'success',
        title: 'Everett',
        description: 'Ut enim ad minima veniam quis velit',
    },
    {
        date: '08 Jan',
        variant: 'warning',
        title: 'Richard',
        description: 'Quis autem vel eum iure',
    },
    {
        date: '08 Jan',
        variant: 'info',
        title: 'Jery',
        description: 'Quis autem vel eum iure',
    },
    {
        date: '07 Jan',
        variant: 'primary',
        title: 'Bryan',
        description: 'Neque porro quisquam est',
    },
    {
        date: '06 Jan',
        variant: 'success',
        title: 'Everett',
        description: 'Ut enim ad minima veniam quis velit',
    },
    {
        date: '05 Jan',
        variant: 'warning',
        title: 'Richard',
        description: 'Quis autem vel eum iure',
    },
];

export { documents, activity };
