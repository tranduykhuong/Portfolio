import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Information from "../Information/Information";
import Menu from "../Menu/Menu";
import '../../grid.css'
import classes from './Layout.module.css'


const Layout = (props) => {
    const location = useLocation().pathname;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location])

    return (
        <div>
            <div className='grid wide'>
                <Information />
                <div className='row'>
                    <div className='col l-2'>
                        <Menu path={location.toString()} />
                    </div>
                    <div className='col l-10 m-12 t-12'>
                        <Header path={location.toString()} />
                        {props.children}
                    </div>

                </div>
            </div>

            <div className={classes.footer}>
                <Footer />
            </div>
        </div>
    );
}

export default Layout;