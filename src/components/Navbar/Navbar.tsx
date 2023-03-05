import React from 'react';
import s from './Navbar.module.css'

export function Navbar(){
    return (
        <div className={s.wrapper}>
        <ul className={s.nav_list}>
            <li className={s.nav_item}><a href="/task_1" className={s.link}>Метод Map</a></li>
            <li className={s.nav_item}><a href="/task_2" className={s.link}>123</a></li>
        </ul>
        </div>
    )
}