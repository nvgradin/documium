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

export interface ContactsTypes {
    id: number;
    Empresa: string;
    CIF: string;
    Contacto: string;
    Dirección: string;
    Email: string;
    Telefono: number;
    Web: string;
    Notas:string;
    createUser: {
      image?: string;
      name: string;
      variant?: string;
    }[];
    Url:string;
}

export interface ActivityTypes {
  date: string;
  variant: string;
  title: string;
  description: string;
}

const contacts:ContactsTypes[] = [
      {
      id: 17,
      Empresa: "AXA SEGUROS GENERALES SA",
      CIF: "A60917978",
      Contacto: "",
      Dirección: "Av. Domingo Bueno, 10, 36400 O Porriño, Pontevedra",
      Email: "",
      Telefono: 986331410,
      Web: "",
      Notas: "Aseguradora AXA",
      createUser: [
        {
          image: grupogradin,
          name: "Grupo Gradín",
        },
      ], 
      Url: "",
    },
    {
      id: 1,
      Empresa: "XUNTA DE GALICIA",
      CIF: "",
      Contacto: "",
      Dirección: "",
      Email: "",
      Telefono: 0,
      Web: "",
      Notas: "",
      createUser: [
        {
          image: grupogradin,
          name: "Grupo Gradín",
        },
      ], 
      Url: ""
    },
    {
      id: 2,
      Empresa: "GOBIERNO DE ESPAÑA",
      CIF: "",
      Contacto: "",
      Dirección: "",
      Email: "",
      Telefono: 0,
      Web: "",
      Notas: "",
      createUser: [
        {
          image: grupogradin,
          name: "Grupo Gradín",
        },
      ], 
      Url: ""
    },
    {
      id: 3,
      Empresa: "CATASTRO/REGISTRO PROPIEDAD",
      CIF: "",
      Contacto: "",
      Dirección: "",
      Email: "",
      Telefono: 0,
      Web: "",
      Notas: "",
      createUser: [
        {
          image: grupogradin,
          name: "Grupo Gradín",
        },
      ], 
      Url: ""
    },
    {
      id: 4,
      Empresa: "AYUNTAMIENTO/CAMARAS",
      CIF: "",
      Contacto: "",
      Dirección: "",
      Email: "",
      Telefono: 0,
      Web: "",
      Notas: "",
      createUser: [
        {
          image: grupogradin,
          name: "Grupo Gradín",
        },
      ], 
      Url: ""
    },
    {
      id: 5,
      Empresa: "JUZGADO/TRIBUNAL",
      CIF: "",
      Contacto: "",
      Dirección: "",
      Email: "",
      Telefono: 0,
      Web: "",
      Notas: "",
      createUser: [
        {
          image: grupogradin,
          name: "Grupo Gradín",
        },
      ], 
      Url: ""
    },
    {
      id: 6,
      Empresa: "DGT",
      CIF: "",
      Contacto: "",
      Dirección: "",
      Email: "",
      Telefono: 0,
      Web: "",
      Notas: "",
      createUser: [
        {
          image: grupogradin,
          name: "Grupo Gradín",
        },
      ], 
      Url: ""
    },
    {
      id: 7,
      Empresa: "CONFEDERACION HIDROGRAFICA",
      CIF: "",
      Contacto: "",
      Dirección: "",
      Email: "",
      Telefono: 0,
      Web: "",
      Notas: "",
      createUser: [
        {
          image: grupogradin,
          name: "Grupo Gradín",
        },
      ], 
      Url: ""
    },
    {
      id: 8,
      Empresa: "AGENCIA PROTECCION DATOS",
      CIF: "",
      Contacto: "",
      Dirección: "",
      Email: "",
      Telefono: 0,
      Web: "",
      Notas: "",
      createUser: [
        {
          image: grupogradin,
          name: "Grupo Gradín",
        },
      ], 
      Url: ""
    },
    {
      id: 9,
      Empresa: "ADIF",
      CIF: "",
      Contacto: "",
      Dirección: "",
      Email: "",
      Telefono: 0,
      Web: "",
      Notas: "",
      createUser: [
        {
          image: grupogradin,
          name: "Grupo Gradín",
        },
      ], 
      Url: ""
    },
    {
      id: 10,
      Empresa: "INE",
      CIF: "",
      Contacto: "",
      Dirección: "",
      Email: "",
      Telefono: 0,
      Web: "",
      Notas: "",
      createUser: [
        {
          image: grupogradin,
          name: "Grupo Gradín",
        },
      ], 
      Url: ""
    },
    {
      id: 11,
      Empresa: "APLU",
      CIF: "",
      Contacto: "",
      Dirección: "",
      Email: "",
      Telefono: 0,
      Web: "",
      Notas: "",
      createUser: [
        {
          image: grupogradin,
          name: "Grupo Gradín",
        },
      ], 
      Url: ""
    },
    {
      id: 12,
      Empresa: "POLICIA",
      CIF: "",
      Contacto: "",
      Dirección: "",
      Email: "",
      Telefono: 0,
      Web: "",
      Notas: "",
      createUser: [
        {
          image: grupogradin,
          name: "Grupo Gradín",
        },
      ], 
      Url: ""
    },
    {
      id: 13,
      Empresa: "GUARDIA CIVIL",
      CIF: "",
      Contacto: "",
      Dirección: "",
      Email: "",
      Telefono: 0,
      Web: "",
      Notas: "",
      createUser: [
        {
          image: grupogradin,
          name: "Grupo Gradín",
        },
      ], 
      Url: ""
    },
    {
      id: 14,
      Empresa: "INTERNO",
      CIF: "",
      Contacto: "",
      Dirección: "",
      Email: "",
      Telefono: 0,
      Web: "",
      Notas: "",
      createUser: [
        {
          image: grupogradin,
          name: "Grupo Gradín",
        },
      ], 
      Url: ""
    },
    {
      id: 15,
      Empresa: "OTROS",
      CIF: "",
      Contacto: "",
      Dirección: "",
      Email: "",
      Telefono: 0,
      Web: "",
      Notas: "",
      createUser: [
        {
          image: grupogradin,
          name: "Grupo Gradín",
        },
      ], 
      Url: ""
    },
    {
      id: 16,
      Empresa: "MAPFRE SEGUROS Y REASEGUROS SA",
      CIF: "",
      Contacto: "",
      Dirección: "",
      Email: "",
      Telefono: 0,
      Web: "",
      Notas: "",
      createUser: [
        {
          image: grupogradin,
          name: "Grupo Gradín",
        },
      ], 
      Url: ""
    },
    {
      id: 18,
      Empresa: "GENERALI DE ESPAÑA SA",
      CIF: "A60917978",
      Contacto: "",
      Dirección: "",
      Email: "",
      Telefono: 0,
      Web: "",
      Notas: "",
      createUser: [
        {
          image: grupogradin,
          name: "Grupo Gradín",
        },
      ], 
      Url: ""
    },
    {
      id: 19,
      Empresa: "ALLIANZ CIA DE SEGUROS Y REASEGUROS SA",
      CIF: "A28007748",
      Contacto: "",
      Dirección: "",
      Email: "",
      Telefono: 0,
      Web: "",
      Notas: "",
      createUser: [
        {
          image: grupogradin,
          name: "Grupo Gradín",
        },
      ], 
      Url: ""
    },
    {
      id: 20,
      Empresa: "REALE SEGUROS GENERALES SA",
      CIF: "A78520293",
      Contacto: "",
      Dirección: "",
      Email: "",
      Telefono: 0,
      Web: "",
      Notas: "",
      createUser: [
        {
          image: grupogradin,
          name: "Grupo Gradín",
        },
      ], 
      Url: ""
    },
    {
      id: 21,
      Empresa: "CUATRECASAS GONÇALVES PEREIRA SLP",
      CIF: "B95942110",
      Contacto: "",
      Dirección: "",
      Email: "",
      Telefono: 0,
      Web: "",
      Notas: "",
      createUser: [
        {
          image: grupogradin,
          name: "Grupo Gradín",
        },
      ], 
      Url: ""
    },
    {
      id: 22,
      Empresa: "JUAN ARNAIZ RAMOS",
      CIF: "",
      Contacto: "",
      Dirección: "",
      Email: "",
      Telefono: 0,
      Web: "",
      Notas: "",
      createUser: [
        {
          image: grupogradin,
          name: "Grupo Gradín",
        },
      ], 
      Url: ""
    },
    {
      id: 23,
      Empresa: "MANUEL PEREZ- BATALLON ORDOÑEZ",
      CIF: "33857935A",
      Contacto: "",
      Dirección: "",
      Email: "",
      Telefono: 0,
      Web: "",
      Notas: "",
      createUser: [
        {
          image: grupogradin,
          name: "Grupo Gradín",
        },
      ], 
      Url: ""
    },
    {
      id: 24,
      Empresa: "CACHARELA GROUP",
      CIF: "",
      Contacto: "",
      Dirección: "",
      Email: "",
      Telefono: 0,
      Web: "",
      Notas: "",
      createUser: [
        {
          image: grupogradin,
          name: "Grupo Gradín",
        },
      ], 
      Url: ""
    },
    {
      id: 25,
      Empresa: "EDUARDO TAVARES FERREIRA",
      CIF: "179146955",
      Contacto: "",
      Dirección: "",
      Email: "",
      Telefono: 0,
      Web: "",
      Notas: "",
      createUser: [
        {
          image: grupogradin,
          name: "Grupo Gradín",
        },
      ], 
      Url: ""
    },
    {
      id: 26,
      Empresa: "ASTEM SL",
      CIF: "B36027746",
      Contacto: "",
      Dirección: "",
      Email: "",
      Telefono: 0,
      Web: "",
      Notas: "",
      createUser: [
        {
          image: grupogradin,
          name: "Grupo Gradín",
        },
      ], 
      Url: ""
    },
    {
      id: 27,
      Empresa: "LUIS PAIS BARROS",
      CIF: "35426783K",
      Contacto: "",
      Dirección: "",
      Email: "",
      Telefono: 0,
      Web: "",
      Notas: "",
      createUser: [
        {
          image: grupogradin,
          name: "Grupo Gradín",
        },
      ], 
      Url: ""
    },
    {
      id: 28,
      Empresa: "SAICA NATUR SL",
      CIF: "B50616416",
      Contacto: "",
      Dirección: "",
      Email: "",
      Telefono: 0,
      Web: "",
      Notas: "",
      createUser: [
        {
          image: grupogradin,
          name: "Grupo Gradín",
        },
      ], 
      Url: ""
    },
    {
      id: 29,
      Empresa: "GESTAMP CERVEIRA LDA",
      CIF: "503478130",
      Contacto: "",
      Dirección: "",
      Email: "",
      Telefono: 0,
      Web: "",
      Notas: "",
      createUser: [
        {
          image: grupogradin,
          name: "Grupo Gradín",
        },
      ], 
      Url: ""
    },
    {
      id: 30,
      Empresa: "IBERIPLAST TEMOPLASTICOS SL",
      CIF: "B36888097",
      Contacto: "",
      Dirección: "",
      Email: "",
      Telefono: 0,
      Web: "",
      Notas: "",
      createUser: [
        {
          image: grupogradin,
          name: "Grupo Gradín",
        },
      ], 
      Url: ""
    },
    {
      id: 31,
      Empresa: "POMPAS FUNEBRES DEL ATLANTICO SA",
      CIF: "A36831147",
      Contacto: "",
      Dirección: "",
      Email: "",
      Telefono: 0,
      Web: "",
      Notas: "",
      createUser: [
        {
          image: grupogradin,
          name: "Grupo Gradín",
        },
      ], 
      Url: ""
    },
    {
      id: 32,
      Empresa: "RECTIFICADOS DURAN SL",
      CIF: "B36993228",
      Contacto: "",
      Dirección: "",
      Email: "",
      Telefono: 0,
      Web: "",
      Notas: "",
      createUser: [
        {
          image: grupogradin,
          name: "Grupo Gradín",
        },
      ], 
      Url: ""
    },
    {
      id: 33,
      Empresa: "SERVEO LOGISTICA SA",
      CIF: "A36783504",
      Contacto: "",
      Dirección: "",
      Email: "",
      Telefono: 0,
      Web: "",
      Notas: "",
      createUser: [
        {
          image: grupogradin,
          name: "Grupo Gradín",
        },
      ], 
      Url: ""
    },
    {
      id: 34,
      Empresa: "SERVIAL MC LOGISTICA SL",
      CIF: "B36990356",
      Contacto: "",
      Dirección: "",
      Email: "",
      Telefono: 0,
      Web: "",
      Notas: "",
      createUser: [
        {
          image: grupogradin,
          name: "Grupo Gradín",
        },
      ], 
      Url: ""
    },
    {
      id: 35,
      Empresa: "TALLERES AUTOEVOLUCION 3000 SL",
      CIF: "B27817980",
      Contacto: "",
      Dirección: "",
      Email: "",
      Telefono: 0,
      Web: "",
      Notas: "",
      createUser: [
        {
          image: grupogradin,
          name: "Grupo Gradín",
        },
      ], 
      Url: ""
    },
    {
      id: 36,
      Empresa: "GENERAL DE HORMIGONES SA-GEDHOSA",
      CIF: "A33008392",
      Contacto: "",
      Dirección: "",
      Email: "",
      Telefono: 0,
      Web: "",
      Notas: "",
      createUser: [
        {
          image: grupogradin,
          name: "Grupo Gradín",
        },
      ], 
      Url: ""
    },
    {
      id: 37,
      Empresa: "LEAR CORPORATION PONTEVEDRA SLU",
      CIF: "",
      Contacto: "",
      Dirección: "",
      Email: "",
      Telefono: 0,
      Web: "",
      Notas: "",
      createUser: [
        {
          image: grupogradin,
          name: "Grupo Gradín",
        },
      ], 
      Url: ""
    },
    {
      id: 38,
      Empresa: "REPSOL COMERCIAL DE PRODUCTOS PETROLIFEROS SA",
      CIF: "A80298839",
      Contacto: "",
      Dirección: "",
      Email: "",
      Telefono: 0,
      Web: "",
      Notas: "",
      createUser: [
        {
          image: grupogradin,
          name: "Grupo Gradín",
        },
      ], 
      Url: ""
    },
    {
      id: 39,
      Empresa: "ABANCA CORPORACION BANCARIA SA",
      CIF: "A70302039",
      Contacto: "",
      Dirección: "",
      Email: "",
      Telefono: 0,
      Web: "",
      Notas: "",
      createUser: [
        {
          image: grupogradin,
          name: "Grupo Gradín",
        },
      ], 
      Url: ""
    },
    {
      id: 40,
      Empresa: "BANCO SANTANDER SA",
      CIF: "A39000013",
      Contacto: "",
      Dirección: "",
      Email: "",
      Telefono: 0,
      Web: "",
      Notas: "",
      createUser: [
        {
          image: grupogradin,
          name: "Grupo Gradín",
        },
      ], 
      Url: ""
    },
    {
      id: 41,
      Empresa: "BANKINTER SA",
      CIF: "A28157360",
      Contacto: "",
      Dirección: "",
      Email: "",
      Telefono: 0,
      Web: "",
      Notas: "",
      createUser: [
        {
          image: grupogradin,
          name: "Grupo Gradín",
        },
      ], 
      Url: ""
    },
    {
      id: 42,
      Empresa: "RENTA 4 BANCO SA",
      CIF: "A82473018",
      Contacto: "",
      Dirección: "",
      Email: "",
      Telefono: 0,
      Web: "",
      Notas: "",
      createUser: [
        {
          image: grupogradin,
          name: "Grupo Gradín",
        },
      ], 
      Url: ""
    },
    {
      id: 43,
      Empresa: "CAIXABANK SA",
      CIF: "A08663619",
      Contacto: "",
      Dirección: "",
      Email: "",
      Telefono: 0,
      Web: "",
      Notas: "",
      createUser: [
        {
          image: grupogradin,
          name: "Grupo Gradín",
        },
      ], 
      Url: ""
    },
    {
      id: 44,
      Empresa: "CAIXA GERAL DE DEPOSITOS",
      CIF: "500960046",
      Contacto: "",
      Dirección: "",
      Email: "",
      Telefono: 0,
      Web: "",
      Notas: "",
      createUser: [
        {
          image: grupogradin,
          name: "Grupo Gradín",
        },
      ], 
      Url: ""
    }
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
];

export { activity, contacts };
