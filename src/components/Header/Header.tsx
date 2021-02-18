import React from 'react';
import h from './Header.module.css'

export function Header () {
    return <header className={h.header}>
        <img src='https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png' alt="Logo"/>
    </header>
}

