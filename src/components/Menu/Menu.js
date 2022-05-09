import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { IconEducation, IconExtracurricular, IconProject, IconSelf } from "./Icon";
import classes from './Menu.module.css'

function Menu(props) {
    const page = props.path;
    const [fixedMenu, setFixedMenu] = useState(false);
    let widthMenu = useRef();

    useEffect(() => {
        // set fixed menu
        const handleScroll = () => {
            if (window.scrollY < 1) {
                setFixedMenu(true);
            }
            if (widthMenu.current && widthMenu.current.offsetWidth < 800) {
                widthMenu.current.style.width = widthMenu.current.offsetWidth + 'px';
            }

            if (window.scrollY > 250)
                setFixedMenu(true);
            else setFixedMenu(false);
        }

        window.addEventListener('scroll', handleScroll)

        // cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <div className={classes.menu + ' ' + (fixedMenu ? classes.fixedMenu : '')} ref={widthMenu} >
            <Link to='/education'
                className={classes.item + ' ' + (page === '/education' || page === '/' ? classes.active : "")}
            >
                <IconEducation />
                <p>BẢN THÂN</p>
            </Link>
            <Link to='/skills'
                className={classes.item + ' ' + (page === '/skills' ? classes.active : "")}
            >
                <IconSelf />
                <p>HỌC VẤN</p>
            </Link>
            <Link to='/projects'
                className={classes.item + ' ' + (page === '/projects' ? classes.active : "")}
            >
                <IconProject />
                <p>DỰ ÁN</p>
            </Link>
            <Link to='/extracurricular'
                className={classes.item + ' ' + (page === '/extracurricular' ? classes.active : "")}
            >
                <IconExtracurricular />
                <p>HOẠT ĐỘNG</p>
            </Link>
        </div>
    );
}

export default Menu;