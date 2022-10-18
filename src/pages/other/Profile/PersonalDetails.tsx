import React from 'react';
import { Card } from 'react-bootstrap';

// types
import { UserInfoTypes } from './data';

interface PersonalDetailsProps {
    userInfo: UserInfoTypes;
}

const PersonalDetails = ({ userInfo }: PersonalDetailsProps) => {
    return (
        <Card>
            <Card.Body>
                <div className="text-center mt-2">
                    <img src={userInfo.avatar} alt="" className="avatar-lg rounded-circle" />
                    <h4 className="mt-2 mb-0">{userInfo.userName}</h4>
                    <h6 className="text-muted fw-normal mt-2 mb-0">{userInfo.designation}</h6>
                    <h6 className="text-muted fw-normal mt-1 mb-3">{userInfo.location}</h6>
                </div>

                {/* profile */}
                <div className="mt-3 pt-2 border-top">
                    <h4 className="mb-2 fs-15">Contacto</h4>
                    <div className="table-responsive">
                        <table className="table table-borderless mb-0 text-muted">
                            <tbody>
                                <tr>
                                    <th scope="row">Email</th>
                                    <td>{userInfo.email}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Teléfono</th>
                                    <td>{userInfo.phone}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default PersonalDetails;
