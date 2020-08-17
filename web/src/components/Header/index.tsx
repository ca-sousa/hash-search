import React from 'react';
import { Link } from 'react-router-dom';

import heart from '../../assets/images/icon/heart.svg'
import logo from '../../assets/images/logo/logo-azul-1.svg'

import './style.css'

function Header() {
    return (
        <header className='page-header'>
            <div className='top-bar-container'>
                <Link to='/'>
                    <img src={logo} alt="Voltar" className="logo-img"/>
                </Link>
                <Link to='/collection'>
                    <img src={heart} alt='*Sua Coleção' className="collection"/>
                </Link>
            </div>
        </header>
    );
}

export default Header;