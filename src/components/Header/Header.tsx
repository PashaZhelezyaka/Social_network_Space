import React from 'react';
import h from './Header.module.css'
import {NavLink} from 'react-router-dom';

type PropsType = {
    isAuth: boolean
    login: string | null
}


export function Header(props: PropsType) {
    return <header className={h.header}>
        <img src='https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png' alt="Logo"/>
        <div className={h.loginBlock}>
            {props.isAuth ? props.login :
                <NavLink to={'/login'}>
                    Login
                </NavLink>}



        </div>

    </header>
}

