import React from 'react';
import { Link } from 'react-router-dom';

import heart from '../../assets/images/icon/heart.svg'
import map from '../../assets/images/icon/map.svg'
import search from '../../assets/images/icon/search.svg'
import logo from '../../assets/images/logo/logo-azul-1.svg'


import './style.css'

function Header() {
    return (
        <header className='page-header'>
            <div className='top-bar-container'>
                <Link to='/'>
                    <img src={logo} alt="Voltar" className="logo-img"/>
                </Link>
                <div className='navigation'>
                    <Link to='/search'>
                        <img src={search} alt="Pesquisar" className="collection"/>
                    </Link>
                    <Link to='/maps'>
                        <img src={map} alt="Mapa" className="collection"/>
                    </Link>
                    <Link to='/collection'>
                        <img src={heart} alt="Sua Coleção" className="collection"/>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;