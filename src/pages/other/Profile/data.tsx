// images
import userAvatar from '../../../assets/images/users/grupo-gradin.jpg';

export interface UserInfoTypes {
    userName?: string;
    avatar?: string;
    designation?: string;
    location?: string;
    profileProgress: number;
    about?: string;
    email?: string;
    phone?: string;
    address?: string;
    skills?: string[];
}

const userInfo: UserInfoTypes = {
    userName: 'Grupo Gradín',
    location: 'Carretera O Porriño a Salceda, O Porriño, 36400 Pontevedra',
    avatar: userAvatar,
    profileProgress: 60,
    about: "Grupo Gradín",
    email: 'grupogradin@grupogradin.com',
    phone: '(+34) 986 33 25 53',
};

export { userInfo };
