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
