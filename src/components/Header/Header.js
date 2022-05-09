import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import classes from './Header.module.css'

const Header = (props) => {
    const page = props.path;
    const [reRender, setReRender] = useState(true);

    const refLine = useRef();

    const handleActiveLine = (el) => {
        if (refLine.current !== undefined) {
            refLine.current.style.left = el.offsetLeft + 'px';
            refLine.current.style.width = el.offsetWidth + 'px';
        }
        else setReRender(prev => !prev);
    }

    return (
        <div className={classes.header}>
            <div className={classes.list}>
                <Link
                    to='/education'
                    className={classes.item + ' ' + (page === '/education' || page === '/' ? classes.active : "")}>
                    <div
                        ref={el => {
                            if (!el || (page !== '/education' && page !== '/')) return;
                            handleActiveLine(el);
                        }}
                    >
                        Bản thân
                    </div>
                </Link>

                <Link to='/skills' className={classes.item + ' ' + (page === '/skills' ? classes.active : "")}>
                    <div
                        ref={el => {
                            if (!el || page !== '/skills') return;
                            handleActiveLine(el);
                        }}
                    >
                        Học vấn
                    </div>
                </Link>

                <Link to='/projects' className={classes.item + ' ' + (page === '/projects' ? classes.active : "")}>
                    <div
                        ref={el => {
                            if (!el || page !== '/projects') return;
                            handleActiveLine(el);
                        }}
                    >
                        Dự án
                    </div>
                </Link>

                <Link to='/extracurricular' className={classes.item + ' ' + (page === '/extracurricular' ? classes.active : "")}>
                    <div
                        ref={el => {
                            if (!el || page !== '/extracurricular') return;
                            handleActiveLine(el);
                        }}
                    >
                        Hoạt động
                    </div>
                </Link>

                <div className={classes.line} ref={refLine}></div>
            </div>
        </div>
    );
}

export default Header;