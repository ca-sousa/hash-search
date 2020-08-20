import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

import heart from '../../assets/images/icon/heart.svg'
import map from '../../assets/images/icon/map.svg'
import search from '../../assets/images/icon/search.svg'
import user from '../../assets/images/icon/user.svg'
import logo from '../../assets/images/logo/logo-azul-1.svg'

import './style.css'

export default class Header extends Component {  
    _handleLogoutClick = () => {
        window.open("http://localhost:3333/auth/logout", "_self");
        this.props.handleNotAuthenticated();
    };

    render() {
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
                        <a onClick={this._handleLogoutClick}>
                            <img src={user} alt="Desconectar" className="collection"/>
                        </a>    
                    </div>
                </div>
            </header>
        );
    }
}
