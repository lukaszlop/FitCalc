import React from 'react';
import './NavBarMenu.scss';

const NavBarMenu = () => {
    return (

        <ul className="nav-list">
            <li><a href="/"><p>Strona główna</p></a></li>
            <li><a href="/"><p>Dieta Samuraja</p></a></li>
            <li><a href="/"><p>Kalkulator</p></a></li>
            <li><a href="/"><p>Kontakt</p></a></li>
        </ul>
    )
}

export default NavBarMenu;