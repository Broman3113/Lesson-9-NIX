import React from 'react';
import {useSelector} from "react-redux";

const Profile = () => {
    const userInfo = useSelector(state => state.user.userInfo);
    return (
        <div style={{width: '300px', margin: '0 auto'}}>
            <ul style={{textAlign: 'left', listStyleType: 'none'}}>
                <li>First name: {userInfo.firstname}</li>
                <li>Last name: {userInfo.lastname}</li>
                <li>Email: {userInfo.email}</li>
                <li>Password: {userInfo.password}</li>
            </ul>
        </div>
    );
};

export default Profile;
