import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {setIsAuth, setUserInfo} from "../../store/user/actions";

const Login = () => {
    const users = useSelector(state => state.users.users);

    const [email, setEmail] = useState("john@smith.com");
    const [password, setPassword] = useState("123");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginUserHandler = () => {
        const checkUser = users.filter(user => user.email === email)[0];
        if (checkUser.password === password) {
            dispatch(setUserInfo(checkUser));
            dispatch(setIsAuth(true));
            navigate('/')
        } else {
            console.log('Bad');
        }
    }

    return (
        <div style={{width: '300px', margin: '0 auto',textAlign: 'right'}}>
            <h1 style={{textAlign: 'center'}}>Login Page</h1>
            <p style={{textAlign: 'center'}}>Don't have an account? <Link to={`/register`}>Register</Link></p>
            email: <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <br/>
            password: <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <br/>
            <button style={{width: '177px'}} onClick={loginUserHandler}>Login</button>
            <button onClick={() => console.log(users)}>Get users</button>
        </div>
    );
};

export default Login;
