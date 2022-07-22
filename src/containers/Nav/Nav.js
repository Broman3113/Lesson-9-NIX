import React from 'react';
import {Link} from "react-router-dom";
import {authRoutes, publicRoutes} from '../../routes';
import classes from './Nav.module.css'
import {useDispatch, useSelector} from "react-redux";
import {setIsAuth, setUserInfo} from "../../store/user/actions";

const Nav = () => {
    const isAuth = useSelector(state => state.user.isAuth);

    const dispatch = useDispatch();

    const onLogout = (e) => {
        e.preventDefault();
        dispatch(setUserInfo({}));
        dispatch(setIsAuth(false));
    }
    return (
        <nav className={classes.Nav}>
            <Link to="/">Main</Link>
            {
                isAuth ?
                    authRoutes.map(link => <Link
                        key={link.path}
                        to={link.path}
                    >
                        {link.title}
                    </Link>)
                    :
                    publicRoutes.map(link => <Link
                        key={link.path}
                        to={link.path}
                    >
                        {link.title}
                    </Link>)
            }
            {isAuth && <a href="" onClick={onLogout}>Logout</a>}

        </nav>
    );
};

export default Nav;
