// images
import avatar1 from '../../../assets/images/users/avatar-7.jpg';
import avatar2 from '../../../assets/images/users/avatar-9.jpg';
import avatar3 from '../../../assets/images/users/avatar-4.jpg';
import avatar4 from '../../../assets/images/users/avatar-1.jpg';
import avatar5 from '../../../assets/images/users/avatar-8.jpg';
import profilePic2 from '../../../assets/images/users/avatar-5.jpg';

// types
import { MembersTypes } from '../../../components/MembersList';
import { MessageItemTypes } from '../../../components/ChatList';

export interface OrdersItemTypes {
    id: number;
    product: string;
    customer: string;
    price: string;
    status: string;
}

const orderDetails: OrdersItemTypes[] = [
    {
        id: 98754,
        product: 'ASOS Ridley High',
        customer: 'Otto B',
        price: '$79.49',
        status: 'Pending',
    },
    {
        id: 98753,
        product: 'Marco Lightweight Shirt',
        customer: 'Mark P',
        price: '$125.49',
        status: 'Delivered',
    },
    {
        id: 98752,
        product: 'Half Sleeve Shirt',
        customer: 'Dave B',
        price: '$35.49',
        status: 'Declined',
    },
    {
        id: 98751,
        product: 'Lightweight Jacket',
        customer: 'Shreyu N',
        price: '$49.49',
        status: 'Delivered',
    },
    {
        id: 98750,
        product: 'Marco Shoes',
        customer: 'Rik N',
        price: '$69.49',
        status: 'Declined',
    },
];

const topPerformers: MembersTypes[] = [
    {
        id: 1,
        name: 'Shreyu N',
        avatar: avatar1,
        designation: 'Senior Sales Guy',
    },
    {
        id: 2,
        name: 'Greeva Y',
        avatar: avatar2,
        designation: 'Social Media Campaign',
    },
    {
        id: 3,
        name: 'Nik G',
        avatar: avatar3,
        designation: 'Inventory Manager',
    },
    {
        id: 4,
        name: 'Hardik G',
        avatar: avatar4,
        designation: 'Sales Person',
    },
    {
        id: 5,
        name: 'GB Patel G',
        avatar: avatar5,
        designation: 'Sales Person',
    },
];


const chatMessages: MessageItemTypes[] = [
    {
        id: 1,
        userPic: profilePic2,
        userName: 'Geneva',
        text: 'Hello!',
        postedOn: '10:00',
    },
    {
        id: 2,
        userPic: avatar4,
        userName: 'Dominic',
        text: 'Hi, How are you? What about our next meeting?',
        postedOn: '10:01',
    },
    {
        id: 3,
        userPic: profilePic2,
        userName: 'Geneva',
        text: 'Yeah everything is fine',
        postedOn: '10:02',
    },
    {
        id: 4,
        userPic: avatar4,
        userName: 'Dominic',
        text: "Wow that's great!",
        postedOn: '10:03',
    },
    {
        id: 5,
        userPic: profilePic2,
        userName: 'Geneva',
        text: 'Cool!',
        postedOn: '10:03',
    },
];

export { orderDetails, topPerformers, chatMessages };
