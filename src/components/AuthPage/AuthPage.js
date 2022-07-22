import React from 'react';
import {useParams} from "react-router-dom";

const AuthPage = () => {
    const {authType} = useParams();
    console.log(authType);
    return (
        <div>

        </div>
    );
};

export default AuthPage;
