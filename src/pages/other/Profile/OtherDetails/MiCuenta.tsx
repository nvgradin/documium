import React from 'react';
import { Card, Button } from 'react-bootstrap';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// types
import { MiCuentaTypes } from './data';

// components
import { FormInput, VerticalForm } from '../../../../components';

interface PersonalDetailsProps {
    micuenta: MiCuentaTypes[];
}

interface UserData {
    username: string;
    email: string;
    password: string;
    confirmpassword: string;
    checkbox: boolean;
}

const MiCuenta = ({ micuenta }: PersonalDetailsProps) => {
    /*
    form validation schema
    */
    const schemaResolver = yupResolver(
        yup.object().shape({
            username: yup.string().required('Please enter Username'),
            email: yup.string().required('Please enter Email address'),
            password: yup.string().required('Please enter Password'),
            confirmpassword: yup
                .string()
                .oneOf([yup.ref('password'), null], "Passwords don't match")
                .required('This value is required.'),
            checkbox: yup.bool().oneOf([true]),
        })
    );
    return (
        <>
            <h4 className="mt-1 fs-15 fw-bold text-uppercase">Mi Cuenta</h4>

            <Card>
            <Card.Body>
                <h4 className="header-title mt-0 mb-1">Editar Usuario</h4>
                <p className="sub-header">Edita tus datos</p>
                <VerticalForm<UserData>
                    onSubmit={() => {}}
                    resolver={schemaResolver}
                    defaultValues={{ username: 'test' }}>
                    <FormInput
                        label={'Nombre de usuario'}
                        type="text"
                        name="username"
                        placeholder="Introduce tu nombre"
                        containerClass={'mb-3'}
                    />
                    <FormInput
                        label={'Email'}
                        type="email"
                        name="email"
                        placeholder="Introduce tu email"
                        containerClass={'mb-3'}
                    />
                    <FormInput
                        label={'Password'}
                        type="password"
                        name="password"
                        placeholder="Password"
                        containerClass={'mb-3'}
                    />
                    <FormInput
                        label={'Confirmar Password'}
                        type="password"
                        name="confirmpassword"
                        placeholder="Password"
                        containerClass={'mb-3'}
                    />
                    <FormInput label={'Recuerdame'} type="checkbox" name="checkbox" containerClass={'mb-3'} />

                    <div className="text-md-end mb-0">
                        <Button variant="primary" className="me-1" type="submit">
                            Enviar
                        </Button>
                        <Button variant="secondary" type="reset">
                            Cancelar
                        </Button>
                    </div>
                </VerticalForm>
            </Card.Body>
        </Card>
        </>    
    );
};
export default MiCuenta;