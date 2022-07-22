import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {addUser} from "../../store/users/actions";

const Register = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const registerUserHandler = () => {
        dispatch(addUser({firstname, lastname, email, password}));
        navigate('/login');
    }
    return (
        <div style={{width: '300px', margin: '0 auto',textAlign: 'right'}}>
            <h1 style={{textAlign: 'center'}}>Register Page</h1>
            <p style={{textAlign: 'center'}}>Already have an account? <Link to={`/login`}>Login</Link></p>
            <br/>
            firstname: <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
            <br/>
            lastname: <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)}/>
            <br/>
            email: <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <br/>
            password: <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <br/>
            <button style={{width: '177px'}} onClick={registerUserHandler}>Register</button>
        </div>
    );
};

export default Register;
