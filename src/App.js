import * as React from 'react';
import './App.css';
import * as PropTypes from "prop-types";
import {Routes, Route} from "react-router-dom";
import {additionalRoutes, authRoutes, publicRoutes} from "./routes";
import GetGoods from "./components/GetGoods";
import PageNotFound from "./pages/PageNotFound";
import Layout from "./components/Layout";
import {Component} from "react";
import Login from "./components/AuthPage/Login";
import {useSelector} from "react-redux";


Routes.propTypes = {children: PropTypes.node};

function App() {
    const isAuth = useSelector(state => state.user.isAuth);


    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout/>}>
                    {isAuth ? <Route index element={<GetGoods/>}/> : <Route index element={<Login/>}/>}
                    {isAuth && authRoutes.map(({path, Component}) =>
                        <Route key={path} path={path} element={<Component/>}/>
                    )}
                    {publicRoutes.map(({path, Component}) =>
                        <Route key={path} path={path} element={<Component/>}/>
                    )}
                    {additionalRoutes.map(({path, Component}) =>
                        <Route key={path} path={path} element={<Component/>}/>
                    )}
                    <Route path="/*" element={<PageNotFound/>}/>
                </Route>
            </Routes>

        </div>
    )
}

export default App;
