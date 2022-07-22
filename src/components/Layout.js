import React from 'react';
import {Outlet} from "react-router-dom";
import Nav from "../containers/Nav/Nav";
import Footer from "../containers/Footer";

const Layout = () => {
    return (
        <>
            <header className="Header">
                <Nav/>
            </header>
            <main className="Main">
                <Outlet/>
            </main>
            <footer className="Footer">
                <Footer/>
            </footer>
        </>
    );
};

export default Layout;
