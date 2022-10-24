import React from 'react';
import { Link } from 'react-router-dom';

interface CreateUserProps {
    createUser: {
        image?: string;
        name: string;
        variant?: string;
    }[];
}

const CreateUser = ({ createUser }: CreateUserProps) => {
    return (
        <>
            <h6 className="fw-bold">Registrado por</h6>
            {(createUser || []).map((user, index) => {
                return (
                    <Link key={index} to="#">
                        <img src={user.image} className="avatar-sm m-1 rounded-circle" alt="" />
                    </Link>
                );
            })}
        </>
    );
};

export default CreateUser;
